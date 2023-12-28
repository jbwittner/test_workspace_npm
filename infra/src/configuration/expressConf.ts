import { AppLogger } from '@monorepo/domain/src'
import express from 'express'
import { UserController } from '../controller/UserController'
import { UserInfraService } from '../service/UserInfraService'
import * as http from 'http'

export const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

export const initControllerAndInject = (appLogger: AppLogger, userInfraService: UserInfraService) => {
  UserController(appLogger, userInfraService)
}

export const startExpressServer = (port: number, appLogger: AppLogger): Promise<http.Server> => {
  return new Promise((resolve, reject) => {
    const server = app
      .listen(port, () => {
        appLogger.info(`Server running on ${port}`)
        resolve(server)
      })
      .on('error', (err: Error) => {
        appLogger.error('Error starting server : ' + err.message)
        reject(err)
      })
  })
}
