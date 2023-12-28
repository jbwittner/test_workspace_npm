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
    return UserEntity.build({
      userId: user.getUserId(),
      userName: user.getUserName()
    })
  }

  const fromUserEntity = (userEntity: UserEntity): User => {
    return new User(userEntity.userName, userEntity.userId)
  }

  return {
    toUserDTO,
    toUserEntity,
    fromUserEntity
  }
}
