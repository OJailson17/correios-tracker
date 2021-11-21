import { Router, Application, Request, Response } from "express";
import needle from "needle";
import apiCache from "apicache";
import config from "../config";

const router = Router();

// Env variables
const { API_URL } = config;

// Init Cache
const cache = apiCache.middleware;

export const routes = (app: Application) => {
  app.post(
    "/api/v1/correios",
    cache("150 minutes"),
    async (req: Request, res: Response) => {
      const { code } = req.body;

      const body = {
        code,
        type: "LS",
      };

      const options = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      try {
        needle.post(`${API_URL}`, body, options, (err, response) => {
          if (err) {
            res.json({ err });
          }

          res.json(response.body);
        });
      } catch (error) {
        res.json({ error });
      }
    }
  );

  return app.use("/", router);
};
