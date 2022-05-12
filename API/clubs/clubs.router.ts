import { Router, Request, Response, NextFunction } from 'express';
import ClubsController from './clubs.controller';

class ClubRouter {

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
        this.router.post('/', ClubsController.createClubs);
        this.router.get('/', ClubsController.getClubs);

    }
}

const clubRoutes = new ClubRouter();
clubRoutes.init();

export default clubRoutes.router;