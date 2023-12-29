import { Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { UserEntity } from "./UserEntity"
import { GroupEntity } from "./GroupEntity"

@Entity()
export class UserGroupEntity {

  @PrimaryColumn()
  userGroupId: string

  @ManyToOne(() => UserEntity) // note: we will create author property in the Photo class below
  userEntity: UserEntity

  @ManyToOne(() => GroupEntity)
  groupEntity: GroupEntity

  constructor(userGroupId: string, userEntity: UserEntity, groupEntity: GroupEntity){
    this.userGroupId = userGroupId
    this.userEntity = userEntity
    this.groupEntity = groupEntity
  }

}