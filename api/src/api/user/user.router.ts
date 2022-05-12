import { Router, Request, Response, NextFunction } from 'express';
import UserController from "./user.controller";

class UserRouter {

    public router: Router


    /*--------  Constructor  --------*/


    constructor() {

        //
        // Set router
        this.router = Router();
        this.init();
    }


    /*--------  Methods  --------*/


    /**
     * Init all routes in this router
     */
    init() {
        this.router.get('/userId/:userId', UserController.getUserById);
        this.router.post('/authenticate', UserController.login);
        this.router.post('/', UserController.createUser);
    }
}

const userRoutes = new UserRouter();
// userRoutes.init();

export default userRoutes.router;