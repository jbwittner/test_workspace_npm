import { Group } from "./Group"
import { User } from "./User"

export class UserGroup {
    private userGroupId: string
    private user: User
    private group: Group
  
    constructor(userGroupId: string, user: User, group: Group) {
        this.userGroupId = userGroupId
        this.user = user
        this.group = group
    }
  
    getUserGroupId() {
      return this.userGroupId
    }
  
    getUser() {
      return this.user
    }

    getGroup() {
        return this.group
      }
  }
  