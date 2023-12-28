import { Sequelize } from 'sequelize'
import { initUserEntityModel } from './UserEntity'

export const ModelManager = (sequelize: Sequelize) => {
  initUserEntityModel(sequelize)
}
