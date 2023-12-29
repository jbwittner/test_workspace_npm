import { DataTypes, Model, Sequelize } from 'sequelize'

export class UserGroupEntity extends Model {
  declare userGroupId: string
}

export const initUserGroupEntityModel = (sequelize: Sequelize) => {
  UserGroupEntity.init(
    {
      userGroupId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'USER_ID'
      }
    },
    {
      sequelize,
      modelName: 'UserGroupEntity',
      tableName: 'USER_GROUP_ENTITIES'
    }
  )
}
