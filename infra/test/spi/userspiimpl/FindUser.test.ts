import { User } from '@monorepo/domain'
import { UserSpiImpl } from '../../../src/spi/UserSpiImpl'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

describe('Test find user method', () => {
  let userSpiImpl: UserSpiImpl

  beforeEach(() => {
    userSpiImpl = new UserSpiImpl()
  })

  test('Create user Ok', () => {
    const user = new User(faker.internet.userName(), uuidv4())
    const userSaved = userSpiImpl.save(user)
    expect(userSaved).toEqual(user)

    const userFinded = userSpiImpl.findUser(user.getUserId())
    expect(userFinded).toEqual(user)
  })
})
