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
        res.status(500).json({ message: error.message });
    }
};

export default rateLimiter;
