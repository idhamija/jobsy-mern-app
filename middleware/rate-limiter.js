import rateLimiter from 'express-rate-limit'

export const apiLimiter = rateLimiter({
  windowMs: 60 * 1000,
  max: 30,
  message: 'Too many requests from this IP, please try again after sometime',
})
