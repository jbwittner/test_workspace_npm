import express from 'express'

export const app = express();

export const initControllerAndInject = (apiProductService: ApiProductService, logger: AppLogger) => {
    apiProductController(apiProductService, logger);
}

export const startExpressServer = async (port: number) => {
    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}