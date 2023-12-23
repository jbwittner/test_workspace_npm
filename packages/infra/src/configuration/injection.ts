import { UserApi, UserDomainService, UserSpi } from "@monorepo/domain";
import { initControllerAndInject } from "./expressConf";
import { UserSpiImpl } from "../spi/UserSpiImpl";

export const inject = () => {
    const userSpi: UserSpi = new UserSpiImpl()
    const userApi: UserApi = new UserDomainService(userSpi)
    initControllerAndInject(userApi);
}