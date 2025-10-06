import express from 'express'
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db';
import router from './router/router';


const app = express();

// Enable JSON Data
app.use(express.json());
app.use(cors({
  origin: '*',                  // todos los dominios
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Start DB connection
connectDB();

// Enable Routing
app.use('/', router);

export default app;