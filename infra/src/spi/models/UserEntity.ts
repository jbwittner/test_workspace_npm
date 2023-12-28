import { DataTypes, Model, Sequelize } from 'sequelize'

export class UserEntity extends Model {
  declare userId: string
  declare userName: string
}

export const initUserEntityModel = (sequelize: Sequelize) => {
  UserEntity.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'USER_ID'
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'USER_NAME'
      }
    },
    {
      sequelize,
      modelName: 'UserEntity'
    }
  )
}
