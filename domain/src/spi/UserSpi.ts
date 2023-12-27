import { User } from '@monorepo/domain/src/model'

export interface UserSpi {
  save: (user: User) => User
  findUser: (userId: string) => User | undefined
}
