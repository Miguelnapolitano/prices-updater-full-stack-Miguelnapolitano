import express, { Application } from "express";
import cors from "cors";
import startDataBase from "./database/connection";
import updaterRouter from "./routers/updater.routers"

const app: Application = express();
app.use(express.json());

app.use(cors());

app.listen(5000, async () => {
  await startDataBase();
  console.log("Server is running!");
});


app.use("", updaterRouter)

