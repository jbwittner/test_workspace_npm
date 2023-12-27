import { faker } from '@faker-js/faker'
import { UserTransformer } from '../../../../transformer/UserTransformer'
import { InfraUnitFactory } from '../../../testtools/InfraUnitFactory'

describe('Test find user method', () => {
  const userTransformer = UserTransformer()
  const infraUnitFactory = InfraUnitFactory(faker)

  test('Create user Ok', () => {
    const user = infraUnitFactory.getUser()
    const userDTO = userTransformer.toUserDTO(user)
    expect(userDTO.userId).toBe(user.getUserId())
    expect(userDTO.userName).toBe(user.getUserName())
  })
})
