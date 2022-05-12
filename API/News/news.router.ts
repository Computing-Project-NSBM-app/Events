import { Router, Request, Response, NextFunction } from 'express';
import NewsController from './news.controller';

class NewsRouter {

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
        this.router.post('/', NewsController.createNews);
        this.router.get('/', NewsController.getNews);
        this.router.get('/getNewsById/:newsKey', NewsController.getSIngleNewsById);

    }
}

const newsRoutes = new NewsRouter();
newsRoutes.init();

export default newsRoutes.router;