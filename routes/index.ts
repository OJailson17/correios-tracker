import { Router, Application, Request, Response, response } from "express";
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
    cache("100 minutes"),
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
        const data = await needle.post(
          `${API_URL}`,
          body,
          options,
          (err, response) => {
            if (err) {
              res.json({ err });
            }

            res.json(response.body);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  );

  return app.use("/", router);
};
