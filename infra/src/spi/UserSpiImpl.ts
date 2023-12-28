import { User, UserSpi } from '@monorepo/domain'

export class UserSpiImpl implements UserSpi {
  private userMap: Map<string, User>

  constructor() {
    this.userMap = new Map()
  }

  async findUser(userId: string) {
    return this.userMap.get(userId)
  }

  async save(user: User) {
    this.userMap.set(user.getUserId(), user)
    return user
  }
}
