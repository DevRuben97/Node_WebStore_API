import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv'

//Load the enviorment variables:
const SETTINGS= config();

//set dependencies configuration
export const configure= app=> {
    app.disable('x-powered-by');
    
    app.set('env', SETTINGS.parsed.ENV);
    app.set('config',SETTINGS.parsed);
    app.locals.env= app.get('env');
    app.locals.config= app.get('config');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cors());

    if (SETTINGS.parsed.ENV!== 'test'){
        app.use(morgan('combined'));
    }
}

export default configure;