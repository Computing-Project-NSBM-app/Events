import {Request, Response, NextFunction} from 'express';
import GymModel from './gym.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';

export default class GymController { 
    
      /**
     *
     * @param req
     * @param res
     * @param next
     */
    

       public static async getgym(req: Request, res: Response, next: NextFunction) {
        const query = req.query;
        const gymkey = query.key;

        try {
            const result = await GymController.getgymById(gymkey);
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
    public static async createGym(req: Request, res: Response, next: NextFunction) {
        console.log("createClub")
        const gym = req.body;

        try {
            const result = await GymController.newGym(gym);
            res.send({
                        message: 'Gym Status Updates',
                        code: 200,
                        result: result
                    });
        } catch (e) {
            res.send({
                        message: 'Gym Status Updation Failed',
                        code: 400,
                        result: e
                    });
        }
    }

    private static async newGym(gyms){
        const newGyms= new GymModel({
            key:gyms.key,
            availableSpace:gyms.availableSpace,
            closingtime:gyms.closingtime,
            openeningtime:gyms.openeningtime,
            numberallowed:gyms.numberallowed,
            lastentrytime:gyms.lastentrytime,
        })

        try {
            await newGyms.save();
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
    
     /**
     *
     * @param gymkeys
     */
    
  private static async getgymById(gymkeys) {
    try {
        let result = await GymModel.find({}).where({gymkeys:gymkeys});
        return isEmpty(result) ? null : result[0]
    } catch (e) {
        throw new Error(e)
    }
}}