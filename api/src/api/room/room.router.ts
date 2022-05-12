import { Router, Request, Response, NextFunction } from 'express';
import RoomController from "./room.controller";

class RoomRouter {

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
        this.router.post('/rooms', RoomController.checkIn);
        this.router.delete('/rooms', RoomController.checkOut);
        this.router.post('/login', RoomController.login);
    }
}

const roomRouter = new RoomRouter();
roomRouter.init();

export default roomRouter.router;