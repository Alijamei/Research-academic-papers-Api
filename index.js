import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import Authroutes from './src/routes/AuthRoutes.js';
import optionsRoutes from './src/routes/optionsRoutes.js';
import cookieParser from 'cookie-parser';


const app = express();

app.use(helmet());

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('trust proxy', true)
// Middleware
app.use(express.json()); 

app.use(helmet());

app.use('/', Authroutes);

app.use('/post', optionsRoutes);


// Listen on port
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

