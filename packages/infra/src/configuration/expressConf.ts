import express from 'express'

export const app = express();

export const startExpressServer = async (port: number) => {
    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}