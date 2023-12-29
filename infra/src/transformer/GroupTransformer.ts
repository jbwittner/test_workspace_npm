import { Group } from '@monorepo/domain'
import { GroupDTO } from '../controller/GroupController'
import { GroupEntity } from '../spi/models/GroupEntity'

export const GroupTransformer = () => {
  const toGroupDTO = (group: Group): GroupDTO => {
    return {
      groupId: group.getGroupId(),
      groupName: group.getGroupName()
    }
  }

  const toGroupEntity = (group: Group): GroupEntity => {
    return GroupEntity.build({
      groupId: group.getGroupId(),
      groupName: group.getGroupName()
    })
  }

  const fromGroupEntity = (groupEntity: GroupEntity): Group => {
    return new Group(groupEntity.groupId, groupEntity.groupName)
  }

  return {
    toGroupDTO,
    toGroupEntity,
    fromGroupEntity
  }
}
