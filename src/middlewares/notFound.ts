import type { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError.ts';

/**
 * 404 Not Found handler.
 * Must be registered AFTER all routes, BEFORE the global error handler.
 */
const notFound = (req: Request, _res: Response, next: NextFunction): void => {
  next(new ApiError(404, `Route not found: ${req.originalUrl}`));
};

export default notFound;
