import { User, UserSpi } from '@monorepo/domain'
import { UserTransformer } from '../transformer/UserTransformer'
import { UserEntity } from './models/UserEntity'

export class UserSpiImpl implements UserSpi {
  async findByUserId(userId: string) {
    const userEntity = await UserEntity.findByPk(userId)
    if (userEntity) {
      return UserTransformer().fromUserEntity(userEntity)
    } else {
      return null
    }
  }

  async save(user: User) {
    const UserEntity = UserTransformer().toUserEntity(user)
    const UserEntitySaved = await UserEntity.save()
    return UserTransformer().fromUserEntity(UserEntitySaved)
  }
}
