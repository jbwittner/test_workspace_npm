import { UserApi } from "../api/UserApi";
import { User } from "../model/User";
import { UserSpi } from "../spi/UserSpi";

export class UserDomainService implements UserApi {

    userSpi: UserSpi;

    constructor(userSpi: UserSpi){
        this.userSpi = userSpi;
    }

    createUser(username: string) {
        const user = new User(username)
        return this.userSpi.save(user);
    }
    
}