import { User, UserGroup, UserGroupSpi, UserSpi } from '@monorepo/domain'
import { UserEntity } from './models/UserEntity'

export class UserGroupSpiImpl implements UserGroupSpi {
  async findByUserGroupId(userGroupId: string) {
    return null
  }

  async save(userGroup: UserGroup) {
    return userGroup
  }
}
