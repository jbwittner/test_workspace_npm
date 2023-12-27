import { faker } from '@faker-js/faker'
import { UserSpiImpl } from '../../../../spi/UserSpiImpl'
import { InfraUnitFactory } from '../../../testtools/InfraUnitFactory'
import { v4 as uuidv4 } from 'uuid'

describe('Test find user method', () => {
  let userSpiImpl: UserSpiImpl
  const infraUnitFactory = InfraUnitFactory(faker)

  beforeEach(() => {
    userSpiImpl = new UserSpiImpl()
  })

  test('Create user Ok', () => {
    const user = infraUnitFactory.getUser()
    const userSaved = userSpiImpl.save(user)
    expect(userSaved).toEqual(user)

    const userFinded = userSpiImpl.findUser(user.getUserId())
    expect(userFinded).toEqual(user)
  })

  test('User not exist', () => {
    const userId = uuidv4()
    const userFinded = userSpiImpl.findUser(userId)
    expect(userFinded).toBe(undefined)
  })
})
