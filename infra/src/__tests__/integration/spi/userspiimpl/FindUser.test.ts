import { SpiApplicationTestContext } from '../../../testtools/SpiIntegrationTestTools'
import { v4 as uuidv4 } from 'uuid'
import { faker } from '@faker-js/faker'
import { UserEntity } from '../../../../spi/models/UserEntity'

export const FindUserTestOk = async (testContext: SpiApplicationTestContext) => {
  const userId = uuidv4()
  const userEntity = await UserEntity.create({
    userId: userId,
    userName: faker.internet.userName()
  })

  const userFinded = await testContext.userSpi.findUser(userId)

  expect(userFinded).not.toBeNull()
  expect(userFinded!.getUserId()).toBe(userEntity.userId)
  expect(userFinded!.getUserName()).toBe(userEntity.userName)
}

export const UserNotExistTest = async (testContext: SpiApplicationTestContext) => {
  const userId = uuidv4()
  const userFinded = await testContext.userSpi.findUser(userId)

  expect(userFinded).toBeNull()
}
