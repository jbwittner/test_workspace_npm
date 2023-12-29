import { User } from '@monorepo/domain'
import { UserDTO } from '../controller/UserController'
import { UserEntity } from '../spi/models/UserEntity'

export const UserTransformer = () => {
  const toUserDTO = (user: User): UserDTO => {
    return {
      userId: user.getUserId(),
      userName: user.getUserName()
    }
  }

  const toUserEntity = (user: User): UserEntity => {
    return new UserEntity(user.getUserId(), user.getUserName())
  }

  const fromUserEntity = (userEntity: UserEntity): User => {
    return new User(userEntity.userId, userEntity.userName)
  }

  return {
    toUserDTO,
    toUserEntity,
    fromUserEntity
  }
}
