import { User } from "../model/User";

export interface UserSpi {
    save: (user: User) => User
}