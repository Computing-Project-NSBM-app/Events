import { Router, Request, Response, NextFunction } from 'express';
import PoolController from './Pool.controller';

class PoolRouter {

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
        this.router.post('/', PoolController.createpool);
        this.router.get('/', PoolController.getpool);
    }
}

const poolRoutes = new PoolRouter();
poolRoutes.init();

export default poolRoutes.router;