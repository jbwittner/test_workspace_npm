import { error } from 'console'
import { sequelize } from './configuration/databaseConf'
import { startExpressServer } from './configuration/expressConf'
import { inject } from './configuration/injection'

export const APPLICATION_PORT = 8080

const { appLogger } = inject()

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(error => {
    console.error('Unable to connect to the database:', error);
})