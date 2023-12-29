import { DataTypes, Model, Sequelize } from 'sequelize'

export class GroupEntity extends Model {
  declare groupId: string
  declare groupName: string
}

export const iniGroupEntityModel = (sequelize: Sequelize) => {
  GroupEntity.init(
    {
      groupId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'GROUP_ID'
      },
      groupName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'GROUP_NAME'
      }
    },
    {
      sequelize,
      modelName: 'GroupEntity',
      tableName: 'GROUP_ENTITIES'
    }
  )
}
