import { UserGroup } from '../model'

export interface UserGroupSpi {
  save: (userGroup: UserGroup) => Promise<UserGroup>
  findUserGroup: (userGroupId: string) => Promise<UserGroup | null>
}
