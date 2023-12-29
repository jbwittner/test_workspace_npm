import { User, UserSpi } from '@monorepo/domain'
import { UserEntity } from './models/UserEntity'

export class UserSpiImpl implements UserSpi {
  async findByUserId(userId: string) {
    return null
  }

  async save(user: User) {
    return user
  }
}
