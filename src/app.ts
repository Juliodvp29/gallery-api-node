import express from 'express';
import morgan from 'morgan';
// import router from './routes/index';
import path from 'path';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
// app.use('/api', router);

// folder static files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;