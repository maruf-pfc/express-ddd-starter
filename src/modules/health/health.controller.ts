import type { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.ts';
import ApiResponse from '../../utils/ApiResponse.ts';
import healthService from './health.service.ts';

/**
 * HealthController — HTTP layer for the health module.
 *
 * In the modular pattern, each module owns its controller.
 * Controllers stay thin: parse request → delegate to service → send response.
 */

/**
 * GET /api/v1/health
 * Returns current API + database health status.
 */
const getHealth = catchAsync(async (_req: Request, res: Response) => {
  const data = healthService.getHealthStatus();
  res.status(200).json(new ApiResponse(200, 'Service is healthy', data));
});

const healthController = { getHealth };

export default healthController;
