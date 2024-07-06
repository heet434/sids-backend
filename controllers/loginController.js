import { User } from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Defining methods for the loginController
const login = async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '12h' }
        );
        res.status(200).json({ token , role: user.role });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export default login;