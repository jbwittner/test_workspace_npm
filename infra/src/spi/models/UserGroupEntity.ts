import { Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { UserEntity } from "./UserEntity"
import { GroupEntity } from "./GroupEntity"

@Entity()
export class UserGroupEntity {

  @PrimaryColumn()
  userGroupId: string

  @ManyToOne(() => UserEntity) // note: we will create author property in the Photo class below
  userEntity: Promise<UserEntity>

  @ManyToOne(() => GroupEntity)
  groupEntity: Promise<GroupEntity>

  constructor(userGroupId: string, userEntity: UserEntity, groupEntity: GroupEntity){
    this.userGroupId = userGroupId
    this.userEntity = Promise.resolve(userEntity)
    this.groupEntity = Promise.resolve(groupEntity)
  }

}