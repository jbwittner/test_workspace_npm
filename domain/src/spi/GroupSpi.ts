import { Group } from '../model'

export interface GroupSpi {
  save: (group: Group) => Promise<Group>
  findGroup: (groupId: string) => Promise<Group | null>
}
