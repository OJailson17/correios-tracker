import path from 'path';
import { Router, Application } from 'express';
import apiCache from 'apicache';
import { getEventsController } from '../controller/getEventsController';

const router = Router();

// Init Cache
const cache = apiCache.middleware;

export const routes = (app: Application) => {
  // POST REQUESTS
  app.post('/api/v1/correios', getEventsController);

  return app.use('/', router);
};
