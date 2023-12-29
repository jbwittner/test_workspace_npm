import { Group, GroupSpi } from '@monorepo/domain'

export class GroupSpiImpl implements GroupSpi {
  async findByGroupId(groupId: string) {
    return null
  }

  async save(group: Group) {
    return group
  }
}
