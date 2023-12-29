import { faker } from '@faker-js/faker'
import { UserTransformer } from '../../../../transformer/UserTransformer'
import { InfraUnitFactory } from '../../../testtools/InfraUnitFactory'
import { Sequelize } from 'sequelize'
import { ModelManager } from '../../../../spi/models/ModelManager'

describe('Test toUserEntity method', () => {
  ModelManager(new Sequelize({ dialect: 'mysql' }))

  const userTransformer = UserTransformer()
  const infraUnitFactory = InfraUnitFactory(faker)

  test('Ok', () => {
    ModelManager(new Sequelize({ dialect: 'mysql' }))
    const user = infraUnitFactory.getUser()
    const toUserEntity = userTransformer.toUserEntity(user)
    expect(toUserEntity.userId).toBe(user.getUserId())
    expect(toUserEntity.userName).toBe(user.getUserName())
  })
})
