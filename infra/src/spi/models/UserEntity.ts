import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  userId: string

  @Column()
  userName: string

  constructor(userId:string, userName: string){
    this.userId = userId
    this.userName = userName
  }
}