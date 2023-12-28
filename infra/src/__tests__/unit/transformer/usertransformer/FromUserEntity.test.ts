import { faker } from '@faker-js/faker'
import { UserTransformer } from '../../../../transformer/UserTransformer'
import { UserEntity, initUserEntityModel } from '../../../../spi/models/UserEntity'
import { v4 as uuidv4 } from 'uuid'
import { Sequelize } from 'sequelize'

describe('Test toUserEntity method', () => {
  const userTransformer = UserTransformer()

  beforeAll(() => {
    const sequelize = new Sequelize()

    const mockUserSpi: jest.Mocked<Sequelize>}

    initUserEntityModel(sequelize)
  })

  test('Ok', () => {
    const userEntity = new UserEntity()
    userEntity.userName = faker.internet.userName()
    userEntity.userId = uuidv4()

    const user = userTransformer.fromUserEntity(userEntity)
    expect(user.getUserId()).toBe(userEntity.userId)
    expect(user.getUserName()).toBe(userEntity.userName)
  })
})
