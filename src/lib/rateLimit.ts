// Simple in-memory fixed-window rate limiter.
//
// This is process-local: it resets on redeploy and does not share state
// across multiple serverless instances. It's a reasonable first line of
// defense against casual abuse, but a production deployment behind
// multiple instances should move this to a shared store (e.g. Redis /
// Upstash) for it to be effective under real scale.

type Window = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, Window>();

function sweep(now: number) {
  for (const [key, window] of hits) {
    if (window.resetAt <= now) hits.delete(key);
  }
}

export function checkRateLimit(identifier: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  if (hits.size > 5000) sweep(now);

  const existing = hits.get(identifier);

  if (!existing || existing.resetAt <= now) {
    hits.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
