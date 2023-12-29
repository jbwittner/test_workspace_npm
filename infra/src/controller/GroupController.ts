import { AppLogger } from "@monorepo/domain"

export interface GroupRequest {
  groupname: string
}

export interface GroupDTO {
  groupId: string
  groupName: string
}