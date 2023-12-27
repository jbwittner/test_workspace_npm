import { v4 as uuidv4 } from 'uuid'
import { UserSpi } from 'src/spi'
import { User } from 'src/model'
import { UserApi } from 'src/api'

export class UserDomainService implements UserApi {
  userSpi: UserSpi

  constructor(userSpi: UserSpi) {
    this.userSpi = userSpi
  }

  getUser(userId: string) {
    const finded = this.userSpi.findUser(userId)
    if (finded === undefined) {
      throw new Error('User not exist')
    }
    return finded
  }

  createUser(username: string) {
    const userId = uuidv4()
    const user = new User(username, userId)
    return this.userSpi.save(user)
  }
}
