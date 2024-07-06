import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import morgan from 'morgan';

import getDB from './dbConnection.js';
import mainRouter from './routes/mainRouter.js';
import login from './controllers/loginController.js';
import { verifyToken } from './middlewares/authMiddleware.js';

import createDefaultUsers from './setDefaultUser.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
    try {
        res.json("Server is running successfully");
    } catch (error) {
        res.json(error);
    }
});

// Public routes
app.post('/login', login);

// Protected routes
app.use('/api', verifyToken, mainRouter);

const db = getDB();

db.then(async () => {
    try {
        await createDefaultUsers();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log('Error starting the server:', error.message);
    }
}).catch((error) => {
    console.log('Error connecting to the database:', error.message);
});