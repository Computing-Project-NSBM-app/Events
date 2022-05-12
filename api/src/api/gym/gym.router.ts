import { Router, Request, Response, NextFunction } from 'express';
import GymController from './gym.controller';
import GymModel from './gym.model';

class GymRouter {

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
        this.router.post('/', GymController.createGym);
        this.router.get('/', GymController.getgym);

    }
}

const gymRoutes = new GymRouter();
gymRoutes.init();

export default gymRoutes.router;