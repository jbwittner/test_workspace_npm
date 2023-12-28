import { SpiApplicationTestContext } from '../../../testtools/SpiIntegrationTestTools'
import { v4 as uuidv4 } from 'uuid'
import { User } from '@monorepo/domain'
import { faker } from '@faker-js/faker'
import { UserEntity } from '../../../../spi/models/UserEntity'

export const SaveUserTest = async (testContext: SpiApplicationTestContext) => {
  const user = new User(faker.internet.userName(), uuidv4())

  await testContext.userSpi.save(user)

  const userEntity = await UserEntity.findByPk(user.getUserId())

  expect(userEntity).not.toBeNull()
  expect(userEntity!.userId).toBe(user.getUserId())
  expect(userEntity!.userName).toBe(user.getUserName())
}
