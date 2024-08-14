export interface IUser {
  name: string;
  login: string;
  password: string;
  role: string;
  id: number | string;
}

export enum UserRole {
  Admin = "Admin",
  Mentor = "Mentor",
  User = "User",
}
