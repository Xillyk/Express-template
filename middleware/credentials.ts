import { Request, Response, NextFunction } from 'express';
import allowedOrigins from "../config/allowedOrigins";

const credentials = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin!)) {
		// prevent cors error
    res.header("Access-Control-Allow-Credentials", "true");
  }
  next();
};

export default credentials;
