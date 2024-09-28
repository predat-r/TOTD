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
    console.error("unable to create user", e);
    return null;
  }
};

//function to delete a user entity
export const deleteUser = async (userId: string): Promise<boolean> => {
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return true;
  } catch (e) {
    console.error("error deleting user", e);
    return false;
  }
};

//function to create a thought
//returns created thought if creation is successful
export const createThought = async (
  thought: createThoughtInput
): Promise<Thought | null> => {
  try {
    const newThought = await prisma.thought.create({
      data: {
        content: thought.content,
        authorId: thought.authorId,
      },
    });
    return newThought;
  } catch (e) {
    console.error("unable to create thought",e);
    return null;
  }
};

//function to delete a thought
//returns true if successful, false if failed
export const deleteThought = async (thoughtId: number): Promise<boolean> => {
  try {
    await prisma.thought.delete({
      where: {
        thoughtId: thoughtId,
      },
    });
    return true;
  } catch (e) {
    console.error("unable to delete thought", e);
    return false;
  }
};

//function to like a thought
//returns a boolean
export const likeThought = async (
  userId: string,
  thoughtId: number
): Promise<boolean> => {
  try {
    await prisma.like.create({
      data: { userId: userId, thoughtId: thoughtId },
    });
    return true;
  } catch (e) {
    console.error("unable to like thought at this time", e);
    return false;
  }
};

