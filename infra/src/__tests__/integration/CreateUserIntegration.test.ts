import {startExpressServer, initControllerAndInject} from '../../configuration/expressConf'
import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import {LoggerImpl} from '../../tools/Logger'
import * as http from "http";
import { UserInfraService } from '../../service/UserInfraService';
import {UserSpiImpl} from '../../spi/UserSpiImpl'
import {UserRequest} from '../../controller/UserController'
import { User } from '@monorepo/domain/src';

describe('Test find user method', () => {

    let server: http.Server;

    beforeAll(async () => {
        const appLogger: AppLogger = new LoggerImpl()
        const userSpi: UserSpi = new UserSpiImpl()
        const userApi: UserApi = new UserDomainService(userSpi)
        const userInfraService: UserInfraService = new UserInfraService(appLogger, userApi)
        initControllerAndInject(appLogger, userInfraService)
        server = await startExpressServer(9090, appLogger)
        console.log(server.address())
    })

    afterAll(() => {
        server.close()
    })

    beforeEach(() => {
    })

    test('Create user Ok', async () => {
        const userRequest: UserRequest = {
            username: "toto"
        }

        const response = await fetch('http://127.0.0.1:9090/user', {
            method: 'POST',
            body: JSON.stringify(userRequest),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
        
        })

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
      
          // 👇️ const result: CreateUserResponse
          const result = (await response.json()) as User;
      
          console.log('result is: ', JSON.stringify(result, null, 4));
    })
})
