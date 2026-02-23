import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();

const __dirname = path.resolve();
app.use(express.json());

if(process.env.NODE_ENV !== 'production') {
app.use(cors({
    origin: 'http://localhost:5173', // Update with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
}
app.use(rateLimiter);

// API Routes
app.use('/api/notes', notesRoutes);

// Serve static files from the React app
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
    });
}
const PORT = process.env.PORT || 5001;

connectDB().then(() => {
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
});


// 