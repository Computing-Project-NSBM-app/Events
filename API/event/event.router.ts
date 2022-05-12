import { Router, Request, Response, NextFunction } from 'express';
import EventController from './event.controller';

class EventRouter {

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
        this.router.post('/', EventController.createEvent);
        this.router.get('/', EventController.getEvents);

    }
}

const eventRoutes = new EventRouter();
eventRoutes.init();

export default eventRoutes.router;