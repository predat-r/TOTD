//definitions of various types used throughout the project
export interface createUserInput {
  id: string;
  username: string;
  profilePicture?: string; //url to profile picture stored in cloudinary
}

export interface createThoughtInput {
  content: string;
  authorId: string;
}
//used for both add and remove like
export interface likeInput {
  thoughtId: number;
  userId: string;
}
export interface Thought {
  thoughtId: number;
  content: string;
  authorId: string;
  likeCount: number;
}
export interface User {
  id: string;
  username: string;
  profilePicture: string | null;
}
