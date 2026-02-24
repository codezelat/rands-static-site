import "server-only";

type RateLimitOptions = {
  windowMs: number;
  maxRequests: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

export function createRateLimiter({ windowMs, maxRequests }: RateLimitOptions) {
  const buckets = new Map<string, Bucket>();

  return (key: string): RateLimitResult => {
    const now = Date.now();
    const bucket = buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfterSeconds: 0 };
    }

    if (bucket.count >= maxRequests) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(
          1,
          Math.ceil((bucket.resetAt - now) / 1000)
        ),
      };
    }

    bucket.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  };
}
