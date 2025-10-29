import {Router} from "express";
import {marketRouter} from "./marketRouter.ts";
import {tradeRouter} from "./tradeRouter.ts";
import {liquidityRouter} from "./liquidityRouter.ts";

import {publicKeyMiddleware} from "../middleware/publicKey.ts";

const v1Router = Router();

v1Router.use(publicKeyMiddleware)
v1Router.use('/market', marketRouter)
v1Router.use('/trade', tradeRouter)
v1Router.use('liquidity', liquidityRouter)

export default v1Router
