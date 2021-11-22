import express, { Application } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { routes } from "./routes";
import config from "./config/";

const { PORT } = config;

const app: Application = express();

// Rate Limit
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 min
  max: 20,
});

app.use(limiter);
app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "/client/build")));

app.use(cors());
app.use(express.json());

routes(app);

const port = PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
