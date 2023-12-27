import { User } from "../model"

export interface UserSpi {
  save: (user: User) => User
  findUser: (userId: string) => User | undefined
}
