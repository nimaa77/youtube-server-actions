export interface User {
  userId: number;
  name: string;
}

export async function getAuthenticatedUser(): Promise<User> {
  return {
    userId: 123,
    name: "nima",
  };
}
