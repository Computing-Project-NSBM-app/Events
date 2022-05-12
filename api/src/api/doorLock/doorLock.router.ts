import { Router, Request, Response, NextFunction } from 'express';
import DoorLockController from "./doorLock.controller";

class DoorLockRouter {

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
        this.router.get('/locks', DoorLockController.getDoor);
        this.router.get('/locks/authenticate', DoorLockController.authenticateKey);
        this.router.post('/locks/registerKey', DoorLockController.registerKey);
        this.router.delete('/locks', DoorLockController.deleteLockData);
    }
}

const doorLockRoutes = new DoorLockRouter();
doorLockRoutes.init();

export default doorLockRoutes.router;