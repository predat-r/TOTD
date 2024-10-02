"use server";
import { currentUser } from "@clerk/nextjs/server";
async function UserActions(): Promise<
  { userId: string; username: string } | undefined
> {
  const user = await currentUser();
  if (!user) {
    console.error("User not logged in");
    return;
  }
  const username = user.username;
  const userId = user.id;
  if (!username) {
    console.error("Username not found");
    return;
  }
  return {
    userId,
    username,
  };
}

export default UserActions;
