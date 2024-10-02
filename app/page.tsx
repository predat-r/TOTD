import Heading from "@/components/Heading";
import Cards from "@/components/CardContainer";
import TopThought from "@/components/TopThought";
import UserActions from "./lib/userActions";
import { doesUserExist, createUser } from "./lib/data";
import { Thought, User } from "./lib/definitions";
export const revalidate = 2;
async function signupUser() {
  const user = await UserActions();
  if (user) {
    const doesExist = await doesUserExist(user.userId);
    if (!doesExist) {
      const result: User | null = await createUser({
        id: user.userId,
        username: user.username,
      });
      console.log("user created in db successfully", result);
    }
  }
}
const Homepage = async () => {
  await signupUser();

  const response = await fetch(
    "http://localhost:3000/api/thoughts?pageNumber=1",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const thoughts:Thought[] = await response.json();

  return (
    <div className="relative">
      <Heading />
      <TopThought
        text="top thought"
        likes={"1.2k"}
        picture="/placeholder.jpg"
      />
      <Cards thoughts={thoughts} />
    </div>
  );
};

export default Homepage;
