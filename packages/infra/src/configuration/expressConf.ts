import { UserApi } from '@monorepo/domain';
import express from 'express'
import { UserController } from '../controller/UserController';
import bodyParser from 'body-parser';

export const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

export const initControllerAndInject = (userApi: UserApi) => {
    UserController(userApi)
}

export const startExpressServer = async (port: number) => {
    await new Promise((resolve) => {
        app.listen(port, () => resolve(app))
    });
}