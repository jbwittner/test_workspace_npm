import { Group, GroupSpi } from '@monorepo/domain'
import { GroupEntity } from './models/GroupEntity'
import { GroupTransformer } from '../transformer/GroupTransformer'

export class GroupSpiImpl implements GroupSpi {
  async findByGroupId(groupId: string) {
    const userEntity = await GroupEntity.findByPk(groupId)
    if (userEntity) {
      return GroupTransformer().fromGroupEntity(userEntity)
    } else {
      return null
    }
  }

  async save(group: Group) {
    const entity = GroupTransformer().toGroupEntity(group)
    const entitySaved = await entity.save()
    return GroupTransformer().fromGroupEntity(entitySaved)
  }
}
