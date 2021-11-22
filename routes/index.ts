import path from "path";
import { Router, Application } from "express";
import apiCache from "apicache";
import { getEventsController } from "../controller/getEventsController";

const router = Router();

// Init Cache
const cache = apiCache.middleware;

export const routes = (app: Application) => {
  // POST REQUESTS
  app.post("/api/v1/correios", cache("0.3 minutes"), getEventsController);

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });

  return app.use("/", router);
};
