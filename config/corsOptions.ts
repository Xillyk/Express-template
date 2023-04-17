import { CorsOptions } from "cors";
import allowedOrigins from './allowedOrigins';

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
      // development: add || !origin
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
} as CorsOptions;

export default corsOptions;
