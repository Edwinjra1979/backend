import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/router.js'
import './database.js'
import cookieParser from 'cookie-parser';
// import { createRole } from './libs/initialSetup.js';

const app = express();

// createRole()
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser())
app.use(router);
app.use(express.static('public'));

export default app