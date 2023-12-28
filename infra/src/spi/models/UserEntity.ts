import { DataTypes, Model, Sequelize } from 'sequelize'

class UserEntity extends Model {
  declare userId: string
  declare userName: string
}

export const initUserEntityModel = (sequelize: Sequelize) => {
  UserEntity.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'UserEntity'
    }
  )
}
