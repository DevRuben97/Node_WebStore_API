import express from 'express';
import configure from './config';
import router from './Routes/router';

let _server;

const server= {
    start(){
        const app = express()
        configure(app);
        router(app);
        _server= app.listen(4000, ()=> {
            if (process.env.NODE_ENV!== 'test'){
                console.log('Server started on port 4000')
            }
        })
    },
    close(){
        _server.close();
    }
}

export default server;

if (!module.parent){
    server.start();
}