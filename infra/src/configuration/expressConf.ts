import { AppLogger, UserApi } from '@monorepo/domain';
import express from 'express'
import { UserController } from '../controller/UserController';
import { UserInfraService } from '../service/UserInfraService';

export const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

export const initControllerAndInject = (appLogger: AppLogger, userInfraService: UserInfraService) => {
    UserController(appLogger, userInfraService)
}

export const startExpressServer = async (port: number) => {
    await new Promise((resolve) => {
        app.listen(port, () => resolve(app))
    });
}