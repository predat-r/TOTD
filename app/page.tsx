import Heading from "@/components/Heading";
import TopThought from "@/components/TopThought";
import UserActions from "./lib/userActions";
import { doesUserExist, createUser } from "./lib/data";
import {  User } from "./lib/definitions";
import React from "react";
import CardContainer from "@/components/CardContainer";
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
  console.log("started sign up ... ");
  await signupUser();
  console.log("finished singup check...");

  return (
    <div className="relative">
      <Heading />
      <TopThought
        text="top thought"
        likes={"1.2k"}
        picture="/placeholder.jpg"
      />
      <CardContainer  />
    </div>
  );
};

export default Homepage;
