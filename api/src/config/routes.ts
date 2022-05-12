import { Router, Request, Response, NextFunction } from 'express';
import ExampleRouter from '../api/example/example.router';
import DoorLockRouter from "../api/doorLock/doorLock.router";
import RoomRouter from "../api/room/room.router";
import PaymentRouter from "../api/payment/payment.router";
import * as cors from 'cors';
import UserRouter from '../api/user/user.router';
import EventRouter from '../api/event/event.router';
import NewsRouter from '../api/news/news.router';
import GymRouter from '../api/gym/gym.router';
import PoolRouter from '../api/pool/pool.router';
import ClubsRouter from '../api/clubs/clubs.router';

export default class Routes {

    public router: Router;
    private app;


    /*--------  Constructor  --------*/


    constructor(app) {

        // 
        // Set router
        this.router = Router();

        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: 'http://localhost:27018',
            preflightContinue: false
        };
        this.router.use(cors(options));
        this.router.options("*", cors(options));
        // 
        // Set app
        this.app = app;

        // 
        // Set all routes
        this.setAllRoutes();
    }


    /*--------  Methods  --------*/


    /**
     * Set all app routes
     */
    setAllRoutes() {


        /*--------  Set all custom routes here  --------*/


        // 
        // Your routes goes here
        this.app.use('/api/examples', ExampleRouter);
        this.app.use('/api/doorLock', DoorLockRouter);
        this.app.use('/api/package', RoomRouter);
        this.app.use('/api/cashier', PaymentRouter);
        this.app.use('/api/user', UserRouter);
        this.app.use('/api/event', EventRouter)
        this.app.use('/api/news', NewsRouter)
        this.app.use('/api/gym',GymRouter)
        this.app.use('/api/pool',PoolRouter)
        this.app.use('/api/club',ClubsRouter)



        /*--------  Main routes  --------*/


        // 
        // Set main route for any other route found
        this.setMainRoute();
    }

    /**
     * Set main route
     * this route will be used for all other routes not found before
     */
    private setMainRoute() {

        // 
        // All other routes should redirect to the index.html
        this.app.route('/*').get(this.index);
    }

    /**
     * Main route
     */
    private index(req: Request, res: Response, next: NextFunction) {
        res.json({
            message: 'Hello World!'
        });
    }

}