//definitions of various types used throughout the project
export interface createUserInput {
  id: string;
  username: string;
}

export interface createThoughtInput {
  content: string;
  authorId: string;
}
