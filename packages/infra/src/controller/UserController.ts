import { AppLogger } from "@monorepo/domain"
import { app } from "../configuration/expressConf"
import { Request, Response } from "express";
import { UserInfraService } from "../service/UserInfraService";

interface UserRequest {
    username: string;
}

export const UserController = (appLogger: AppLogger, userInfraService: UserInfraService) => {
    app.post('/user', (req: Request, res: Response) => {
        appLogger.info("POST : /user")
        const { username } = req.body as UserRequest;

        if (typeof username !== 'string') {
            return res.status(400).send('Username must be a string');
        }
        const user = userInfraService.createUser(username)
        res.status(201).send(user);
    })

    app.get('/user/:userId', (req: Request, res: Response) => {
        appLogger.info("GET : /user/" + req.params.userId)
        const userId = req.params.userId;
        const user = userInfraService.getUser(userId)
        res.status(200).send(user);
    });

}