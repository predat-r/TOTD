import { PrismaClient, Thought, User } from "@prisma/client";
import { createUserInput, createThoughtInput } from "./definitions";

//initializing the prisma client
const prisma = new PrismaClient();

//function to create a user entity
//returns User object if created successfully

export const createUser = async (
  user: createUserInput
): Promise<User | null> => {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        username: user.username,
      },
    });
    return newUser;
  } catch (e) {
    console.error("unable to create user");
    return null;
  }
};

//function to delete a user entity
export const deleteUser = async (userId: string): Promise<boolean> => {
  try {
    const deleted = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return true;
  } catch (e) {
    console.error("error deleting user");
    return false;
  }
};

//function to create a thought
//returns created thought if creation is successful
export const createThought = async (
  userId: string,
  thought: createThoughtInput
): Promise<Thought | null> => {
  try {
    const newThought = await prisma.thought.create({
      data: {
        content: thought.content,
        authorId: userId,
      },
    });
    return newThought;
  } catch (e) {
    console.error("unable to create thought");
    return null;
  }
};

//function to delete a thought
//returns true if successful, false if failed
export const deleteThought = async (thoughtId: number): Promise<boolean> => {
  try {
    const deleted = await prisma.thought.delete({
      where: {
        thoughtId: thoughtId,
      },
    });
    return true;
  } catch (e) {
    console.error("unable to delete thought");
    return false;
  }
};
