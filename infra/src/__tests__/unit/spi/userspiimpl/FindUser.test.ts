import { faker } from '@faker-js/faker'
import { UserSpiImpl } from '../../../../spi/UserSpiImpl'
import { InfraUnitFactory } from '../../../testtools/InfraUnitFactory'

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
})
