import type { ErrorRequestHandler } from 'express';
import config from '../config/index.ts';

/**
 * Global error handler middleware.
 * Must be registered LAST, after all routes.
 */
const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode: number = (err as { statusCode?: number }).statusCode ?? 500;
  const message: string = (err as Error).message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    message,
    ...(config.env === 'development' && {
      errorOrigin: err,
      stack: (err as Error).stack,
    }),
  });
};

export default globalErrorHandler;
