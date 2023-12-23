import { AppLogger, UserApi } from "@monorepo/domain";

export class UserInfraService implements UserApi{
    private userApi:UserApi
    private logger:AppLogger

    constructor(logger:AppLogger, userApi:UserApi){
        this.userApi = userApi
        this.logger = logger
    }
    createUser(username: string) {
        this.logger.info("createUser")
        return this.userApi.createUser(username)
    };

    getUser(userId: string){
        this.logger.info("getUser")
        return this.userApi.getUser(userId)
    };


}