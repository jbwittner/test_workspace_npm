import { User } from '@monorepo/domain'
import { UserDTO } from '../controller/UserController'

export const UserTransformer = () => {
  const toUserDTO = (user: User): UserDTO => {
    return {
      userId: user.getUserId(),
      userName: user.getUserName()
    }
  }

  return {
    toUserDTO
  }
}
