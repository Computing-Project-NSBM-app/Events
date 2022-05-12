import {Request, Response, NextFunction} from 'express';
import Payment, {IPaymentModel} from './payment.model';
import RoomModel from '../room/room.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';

export default class PaymentController {

    /**
     *
     * @param req
     * @param res
     * @param next
     */

    public static async savePayment(req: Request, res: Response, next: NextFunction) {
        const payment = req.body;

        try {
            const result = await PaymentController.confirmPayment(payment);
            res.send({
                message: 'success',
                code: 200,
                result: result
            });
        } catch (e) {
            res.send({
                message: 'fail',
                code: 400,
                err: e
            });
        }
    }

    public static async getPayment(req: Request, res: Response, next: NextFunction) {
        const query = req.query;
        const keyId = query.key;

        try {
            const result = await PaymentController.getPaymentById(keyId.toString());
            res.send({
                message: 'success',
                code: 200,
                result: result
            });
        } catch (e) {
            res.send({
                message: 'fail',
                code: 400,
                err: e
            });
        }
    }




    public static async deletePayments(req: Request, res: Response, next: NextFunction){
        const query = req.query;
        const removingKey = query.key;
        try{
            const result = await PaymentController.deleterPaymentRecordsForKey(removingKey.toString());
            res.send({
                message: 'success',
                code: 200,
                result: result
            });
        }catch (e) {
            res.send({
                message: 'fail',
                code: 400,
                err: e
            });
        }

    }

    private static async confirmPayment(payment:IPaymentModel){
        try {
            const result = await new Payment({
                payments:payment.payments,
                key:payment.key
            });
            // const roomData = await PaymentController.getRoomDetailsFromId(payment.key);
            return payment;
        }catch (e) {
            throw new Error(e)
        }
    }

    private static async getPaymentById(keyId:string){
        try {
            const payment = await Payment.find({}).where({key:keyId})
            return payment;
        }catch (e) {
            throw new Error(e)
        }
    }

    private static async deleterPaymentRecordsForKey(keyId:string){
        try {
            const payment = await Payment.deleteMany({key:keyId});
            return payment;
        }catch (e) {
            throw new Error(e)
        }
    }

    private static  async  getRoomDetailsFromId(keyId:string){
        try{
            const roomData = RoomModel.find({"keys.id":keyId});
            return roomData;
        }catch (e) {
            throw new Error(e)
        }
    }



}