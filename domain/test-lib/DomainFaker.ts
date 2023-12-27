import { Faker } from '@faker-js/faker'
import { User } from '@monorepo/domain/src'
import { v4 as uuidv4 } from 'uuid'

export const DomainFaker = (faker: Faker) => {
  const getUser = () => {
    const userName = faker.internet.userName()
    const userId = uuidv4()
    return new User(userName, userId)
  }

  return {
    getUser
  }
}
