import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class GroupEntity {

  @PrimaryColumn()
  groupId: string

  @Column()
  groupName: string

  constructor(groupId:string, groupName: string){
    this.groupId = groupId
    this.groupName = groupName
  }
}