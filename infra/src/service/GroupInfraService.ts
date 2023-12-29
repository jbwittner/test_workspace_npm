import { AppLogger, Group, GroupApi, UserGroup } from '@monorepo/domain'

export class GroupInfraService implements GroupApi {
  private groupApi: GroupApi
  private logger: AppLogger

  constructor(logger: AppLogger, groupApi: GroupApi) {
    this.groupApi = groupApi
    this.logger = logger
  }

    addUserToGroup(groupId: string, userId: string){
        this.logger.info('addUserToGroup')
        return this.groupApi.addUserToGroup(groupId, userId)
    }

    createGroup(groupname: string) {
    this.logger.info('createGroup')
    return this.groupApi.createGroup(groupname)
    }

  getGroup(groupId: string) {
    this.logger.info('getGroup')
    return this.groupApi.getGroup(groupId)
  }
}
