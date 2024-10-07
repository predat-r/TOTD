"use server";
import { PrismaClient, Thought } from "@prisma/client";
import { createThoughtInput, likeInput } from "./definitions";

//initializing the prisma client
const prisma = new PrismaClient();

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
    console.error("unable to create thought", e);
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
//function to fetch all thoughts
//accepts page number as input and returns 20 thoughts
export const fetchThoughts = async (
  pageNumber: number
): Promise<Thought[] | null> => {
  try {
    const thoughts: Thought[] = await prisma.thought.findMany({
      skip: (pageNumber - 1) * 20,
      take: 20, //number of thoughts to display per page
      orderBy: {
        likeCount: "desc",
      },
    });
    return thoughts;
  } catch (e) {
    console.error("unable to fetch thoughts at this time", e);
    return null;
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
    await prisma.thought.update({
      where: {
        thoughtId: thoughtId,
      },
      data: {
        likeCount: {
          increment: 1,
        },
      },
    });
    return true;
  } catch (e) {
    console.error("unable to like thought at this time", e);
    return false;
  }
};
//function to remove like from thought
//returns a boolean
export const removeLike = async (like: likeInput): Promise<boolean> => {
  try {
    const likeToDelete = await prisma.like.findFirst({
      where: {
        thoughtId: like.thoughtId,
        userId: like.userId,
      },
    });
    if (likeToDelete) {
      await prisma.like.delete({
        where: {
          id: likeToDelete.id,
        },
      });
      return true;
    }
    return false;
  } catch (e) {
    console.error("unable to remove like at this time", e);
    return false;
  }
};
//check if liked by a current user
export const likedByUser = async (
  userId: string,
  thoughtId: number
): Promise<boolean> => {
  const count = await prisma.like.count({
    where: {
      thoughtId: thoughtId,
      userId: userId,
    },
  });

  return count > 0;
};
