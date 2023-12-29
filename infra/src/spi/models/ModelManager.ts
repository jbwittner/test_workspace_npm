import { Sequelize } from 'sequelize'
import { UserEntity, initUserEntityModel } from './UserEntity'
import { GroupEntity, iniGroupEntityModel } from './GroupEntity'

export const ModelManager = (sequelize: Sequelize) => {
  initUserEntityModel(sequelize)
  iniGroupEntityModel(sequelize)

  GroupEntity.belongsToMany(UserEntity, { through: 'USER_GROUPS' });
  UserEntity.belongsToMany(GroupEntity, { through: 'USER_GROUPS' });

}
