import { User } from '../model'

export interface UserSpi {
  save: (user: User) => Promise<User>
  findUser: (userId: string) => Promise<User | undefined>
}
