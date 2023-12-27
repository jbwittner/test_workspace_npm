import { User } from '@monorepo/domain/src'

export interface UserApi {
  createUser: (username: string) => User
  getUser: (userId: string) => User
}
