import { AppLogger } from '@monorepo/domain/src'
import { NextFunction, Request, Response } from 'express'
import { UserInfraService } from '../service/UserInfraService'
import { app } from '../configuration/expressConf'
import { UserTransformer } from '../transformer/UserTransformer'

export interface UserRequest {
  username: string
}

export interface UserDTO {
  userId: string
  userName: string
}

export const UserController = (appLogger: AppLogger, userInfraService: UserInfraService) => {
  app.post('/user', async (req: Request, res: Response, next: NextFunction) => {
    appLogger.info('POST : /user')
    const { username } = req.body as UserRequest

    if (typeof username !== 'string') {
      res.status(400).send('Username must be a string')
    } else {
      try {
        const user = await userInfraService.createUser(username)
        const userDTO = UserTransformer().toUserDTO(user)
        res.status(201).send(userDTO)
      } catch (error) {
        next(error)
      }
    }
  })

  app.get('/user/:userId', async (req: Request, res: Response, next: NextFunction) => {
    appLogger.info('GET : /user/' + req.params.userId)
    const userId = req.params.userId
    try {
      const user = await userInfraService.getUser(userId)
      const userDTO = UserTransformer().toUserDTO(user)
      res.status(200).send(userDTO)
    } catch (error) {
      next(error)
    }
  })
}
