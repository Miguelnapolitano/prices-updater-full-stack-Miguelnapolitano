import express, { Application } from "express";
import startDataBase from "./database/connection";
import updaterRouter from "./routers/updater.routers"

const app: Application = express();
app.use(express.json());

app.listen(3000, async () => {
  await startDataBase();
  console.log("Server is running!");
});


app.use("", updaterRouter)