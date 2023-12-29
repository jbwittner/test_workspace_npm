export class Group {
    private groupname: string
    private groupId: string
  
    constructor(groupname: string, groupId: string) {
      this.groupname = groupname
      this.groupId = groupId
    }
  
    getGroupName() {
      return this.groupname
    }
  
    getGroupId() {
      return this.groupId
    }
  }
  