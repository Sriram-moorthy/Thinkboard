import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        const { success } = await ratelimit.limit(ip);

        if (!success) {
            return res.status(429).json({ message: 'Too many requests' });
        }

        next();
    } catch (error) {
        console.error("Rate limiter error (failing open):", error.message);
        next(); // Fail open — don't block requests if Redis is unavailable
    }
};

export default rateLimiter;
