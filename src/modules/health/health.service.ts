import mongoose from 'mongoose';

/**
 * HealthService — business logic for the health module.
 *
 * In the modular/DDD pattern, each module owns its own service.
 * No other module should import from here directly; they communicate
 * through well-defined interfaces or events.
 */
const getHealthStatus = () => {
  const dbState = mongoose.connection.readyState;

  const dbStatus: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: dbStatus[dbState] ?? 'unknown',
  };
};

const healthService = { getHealthStatus };

export default healthService;
