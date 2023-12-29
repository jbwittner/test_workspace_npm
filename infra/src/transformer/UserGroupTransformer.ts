import { Group, UserGroup } from '@monorepo/domain'
import { GroupDTO } from '../controller/GroupController'
import { GroupEntity } from '../spi/models/GroupEntity'
import { UserGroupEntity } from '../spi/models/UserGroupEntity'

/*
export const UserGroupTransformer = () => {
  const toUserGroupEntity = (userGroup: UserGroup): UserGroupEntity => {
    return UserGroupEntity.build({
        userGroupId: UserGroup.getUserGroupId(),
        groupEntity : {
            groupId: userGroup.getGroup().getGroupId(),
            groupName: userGroup.getGroup().getGroupName()
        },
        {
            include: [{
                association: UserGroupEntity.GroupEntity
            }]
        }
    })
  }

  const fromUserGroupEntity = (userGroupEntity: UserGroupEntity): UserGroup => {
    return new UserGroup(groupEntity.groupId, groupEntity.groupName)
  }

  return {
    toUserGroupEntity,
    fromUserGroupEntity
  }
}
*/