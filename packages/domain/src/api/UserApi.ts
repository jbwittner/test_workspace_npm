import { User } from "../model/User";

export interface UserApi {
    createUser: (username: string) => User
}