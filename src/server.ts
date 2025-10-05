import express from 'express'
import 'dotenv/config';
import connectDB from './config/db';
import router from './router/router';


const app = express();

// Enable JSON Data
app.use(express.json());

// Start DB connection
connectDB();

// Enable Routing
app.use('/', router);

export default app;