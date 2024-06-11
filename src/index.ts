import express, { Request, Response, NextFunction } from "express";
import http from "http";

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type,X-Api-Key,X-Ignore-In-Logs"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import routes from "./routers/routes";
import { PORT_APP } from "./config";
app.use("/", routes);

const server = http.createServer(app);

const PORT = process.env.PORT || PORT_APP;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
