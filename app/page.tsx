import Heading from "@/components/Heading";
import Cards from "@/components/CardContainer";
import TopThought from "@/components/TopThought";
import UserActions from "./lib/userActions";
import { doesUserExist,createUser } from "./lib/data";

const Homepage = () => {
  async function signupUser() {
    const user = await UserActions();
    if (user) {
      const doesExist = await doesUserExist(user.userId);
      if(!doesExist){
       const result = await createUser({
          id:user.userId,
          username:user.username,
        })
        console.log("user created in db successfully",result);
      }
    }
  }
  signupUser();
  return (
    <div className="relative">
      <Heading />
      <TopThought
        text="top thought"
        likes={"1.2k"}
        picture="/placeholder.jpg"
      />
      <Cards />
    </div>
  );
};

export default Homepage;
