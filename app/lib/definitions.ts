//definitions of various types used throughout the project
export interface createUserInput {
  id: string;
  username: string;
}

export interface createThoughtInput {
  content: string;
  authorId: string;
}
//used for both add and remove like
export interface likeInput {
  thoughtId:number,
  userId:string,
}