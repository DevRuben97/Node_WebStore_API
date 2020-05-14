import express from 'express';
import jwt from 'jwt-simple';

const AuthRoutes = express.Router();


AuthRoutes.post('/Login', (req, res)=> {
    const payload= {
        email: req.params.email,
        id: 1
    }

    const token = jwt.encode(payload, req.app.locals.config.TOKEN)
    res.status(201)
    .json(token);

})


export default AuthRoutes;