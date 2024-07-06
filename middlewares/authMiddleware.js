import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: "Token expired" });
            }
            return res.status(500).json({ error: "Failed to authenticate token" });
        }

        req.userId = decoded._id;
        req.userRole = decoded.role;
        next();
    });
};

export const verifyRole = (requiredRole) => (req, res, next) => {
    if (req.userRole !== requiredRole) {
        return res.status(403).json({ error: "Insufficient permissions" });
    }
    next();
};
