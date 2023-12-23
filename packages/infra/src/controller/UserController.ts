import { UserApi } from "@monorepo/domain"
import { app } from "../configuration/expressConf"
import { Request, Response } from "express";

interface UserRequest {
    username: string;
}

export const UserController = (userApi: UserApi) => {
    app.post('/user', (req: Request, res: Response) => {
        const { username } = req.body as UserRequest;

        if (typeof username !== 'string') {
            return res.status(400).send('Username must be a string');
        }
        const user = userApi.createUser(username)
        res.status(201).send(user);
    })

    app.get('/user/:userId', (req: Request, res: Response) => {
        const userId = req.params.userId;
        const user = userApi.getUser(userId)
        res.status(200).send(user);
    });

}