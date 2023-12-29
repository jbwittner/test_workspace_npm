import { Sequelize } from 'sequelize'
import { UserEntity, initUserEntityModel } from './UserEntity'
import { GroupEntity, iniGroupEntityModel } from './GroupEntity'
import { UserGroupEntity, initUserGroupEntityModel } from './UserGroupEntity'

GroupEntity.hasMany(UserGroupEntity)
UserEntity.hasMany(UserGroupEntity)

export const ModelManager = (sequelize: Sequelize) => {
  initUserEntityModel(sequelize)
  iniGroupEntityModel(sequelize)
  initUserGroupEntityModel(sequelize)

  // Many to Many between user and group
  //GroupEntity.hasMany(UserGroupEntity)
  //UserEntity.hasMany(UserGroupEntity)
}
