import { Router } from 'express';
import healthController from './health.controller.ts';

/**
 * HealthRouter — routes for the health module.
 *
 * Each module exports its own router. The central routes/index.ts
 * mounts all module routers under /api/v1.
 *
 * @route GET /api/v1/health
 */
const router = Router();

router.get('/', healthController.getHealth);

export default router;
