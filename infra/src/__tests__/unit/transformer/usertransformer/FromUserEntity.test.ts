import { faker } from '@faker-js/faker'
import { UserTransformer } from '../../../../transformer/UserTransformer'
import { Sequelize } from 'sequelize'
import { ModelManager } from '../../../../spi/models/ModelManager'
import { UserEntity } from '../../../../spi/models/UserEntity'
import { v4 as uuidv4 } from 'uuid'

describe('Test toUserEntity method', () => {
  ModelManager(new Sequelize({ dialect: 'mysql' }))
  const userTransformer = UserTransformer()

  test('Ok', () => {
    ModelManager(new Sequelize({ dialect: 'mysql' }))
    const userEntity = new UserEntity({
      userName: faker.internet.userName(),
      userId: uuidv4()
    })
    const user = userTransformer.fromUserEntity(userEntity)
    expect(user.getUserId()).toBe(userEntity.userId)
    expect(user.getUserName()).toBe(userEntity.userName)
  })
})
