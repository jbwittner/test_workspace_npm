import { AppLogger } from '@monorepo/domain/src'
import { NextFunction, Request, Response } from 'express'
import { UserInfraService } from '../service/UserInfraService'
import { app } from '../configuration/expressConf'

export interface UserRequest {
  username: string
}

export interface UserDTO {
  userId: string
  userName: string
}

export const UserController = (appLogger: AppLogger, userInfraService: UserInfraService) => {
  app.post('/user', (req: Request, res: Response, next: NextFunction) => {
    appLogger.info('POST : /user')
    const { username } = req.body as UserRequest

    if (typeof username !== 'string') {
      res.status(400).send('Username must be a string')
    } else {
      userInfraService
        .createUser(username)
        .then(user => {
          const userDTO = null
          res.status(201).send(userDTO)
        })
        .catch(error => {
          next(error)
        })
    }
  })

  app.get('/user/:userId', (req: Request, res: Response, next: NextFunction) => {
    appLogger.info('GET : /user/' + req.params.userId)
    const userId = req.params.userId
    userInfraService
      .getUser(userId)
      .then(user => {
        const userDTO = null
        res.status(200).send(userDTO)
      })
      .catch(error => {
        next(error)
      })
  })
}
