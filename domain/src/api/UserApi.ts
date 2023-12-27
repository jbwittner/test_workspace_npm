import { User } from "../model"

export interface UserApi {
  createUser: (username: string) => User
  getUser: (userId: string) => User
}
