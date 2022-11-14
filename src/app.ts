import express, { Request } from "express";
import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import "dotenv";
import router from "./app/api/routes";
import { InvalidRouteError } from "./shared/errors";
import { ErrorMiddleware } from "./app/api/middlewares";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use("*", (req: Request) => {
    throw new InvalidRouteError(req.baseUrl, req.method);
});
app.use(ErrorMiddleware);

export default app;
