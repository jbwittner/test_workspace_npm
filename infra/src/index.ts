import { startExpressServer } from "./configuration/expressConf";
import { inject } from "./configuration/injection";

inject()
startExpressServer(8080);