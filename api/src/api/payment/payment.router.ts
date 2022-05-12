import { Router, Request, Response, NextFunction } from 'express';
import PaymentController from "./payment.controller";

class PaymentRouter {

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
        this.router.post('/payment', PaymentController.savePayment);
        this.router.get('/payment', PaymentController.getPayment);
        this.router.delete('/payment', PaymentController.deletePayments);
    }
}

const paymentRoutes = new PaymentRouter();
paymentRoutes.init();

export default paymentRoutes.router;