import { v4 as uuidv4 } from 'uuid'
import { Group } from '../model'
import { GroupApi } from '../api/GroupApi'
import { GroupSpi } from '../spi/GroupSpi'
import { UserSpi } from '../spi'
import { UserGroup } from '../model/UserGroup'

export class GroupDomainService implements GroupApi {
  private groupSpi: GroupSpi

  constructor(groupSpi: GroupSpi, userSpi: UserSpi) {
    this.groupSpi = groupSpi
  }
  async addUserToGroup(groupId: string, userId: string) {
    return null
  }

  async getGroup(groupId: string) {
    const finded = await this.groupSpi.findGroup(groupId)
    if (finded === null) {
      throw new Error('User not exist')
    }
    return finded
  }

  async createGroup(groupname: string) {
    const groupId = uuidv4()
    const user = new Group(groupname, groupId)
    return await this.groupSpi.save(user)
  }
}
