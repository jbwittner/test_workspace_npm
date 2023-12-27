import { User } from '@monorepo/domain/src'

export interface UserSpi {
  save: (user: User) => User
  findUser: (userId: string) => User | undefined
}
