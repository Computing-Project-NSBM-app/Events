import {Request, Response, NextFunction} from 'express';
import PoolModel from './pool.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';

export default class PoolController { 
    
     /**
     *
     * @param req
     * @param res
     * @param next
     */
    

      public static async getpool(req: Request, res: Response, next: NextFunction) {
        const query = req.query;
        const poolkey = query.key;

        try {
            const result = await PoolController.getpoolById(poolkey);
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
    public static async createpool(req: Request, res: Response, next: NextFunction) {
        console.log("Pool Status")
        const pool = req.body;

        try {
            const result = await PoolController.newPool(pool);
            res.send({
                        message: 'Pool Status Updates',
                        code: 200,
                        result: result
                    });
        } catch (e) {
            res.send({
                        message: 'Pool Status Updation Failed',
                        code: 400,
                        result: e
                    });
        }
    }

    private static async newPool(pools){
        const newPools= new PoolModel({
            key:pools.key,
            availableSpace:pools.availableSpace,
            closingtime:pools.closingtime,
            openeningtime:pools.openeningtime,
            numberallowed:pools.numberallowed,
            lastentrytime:pools.lastentrytime,
        })

        try {
            await newPools.save();
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
    
     /**
     *
     * @param poolkeys
     */
    
  private static async getpoolById(poolkeys) {
    try {
        let result = await PoolModel.find({}).where({poolkeys:poolkeys});
        return isEmpty(result) ? null : result[0]
    } catch (e) {
        throw new Error(e)
    }
}}