import { Request, Response } from "express";
import needle from "needle";
import config from "../config";

const { API_URL } = config;

export const getEventsController = async (req: Request, res: Response) => {
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
};
