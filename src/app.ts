import express from "express";
import appConfig from "./2-utils/AppConfig";
import productsController from "./6-controllers/productsController";

const app = express();

app.use(express.json());

app.use("/api", productsController.router);

app.listen(appConfig.port, () => {
  console.log(`Listening to http://localhost:${appConfig.port}`);
});
