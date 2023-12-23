import { AppLogger, UserApi, UserDomainService, UserSpi } from "@monorepo/domain";
import { initControllerAndInject } from "./expressConf";
import { UserSpiImpl } from "../spi/UserSpiImpl";
import { LoggerImpl } from "../tools/Logger";

export const inject = () => {
    const appLogger: AppLogger = new LoggerImpl()
    const userSpi: UserSpi = new UserSpiImpl()
    const userApi: UserApi = new UserDomainService(userSpi)
    initControllerAndInject(appLogger, userApi);
}