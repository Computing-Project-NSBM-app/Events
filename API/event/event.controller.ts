import {Request, Response, NextFunction} from 'express';
import EventModel from './event.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';


export default class EventController { 
    
     /**
     *
     * @param req
     * @param res
     * @param next
     */
    

      public static async createEvent(req: Request, res: Response, next: NextFunction) {

        const eventkey = req.body;

        try {
            const result = await EventController.newEvent(eventkey);
            res.send({
                        message: 'User registered',
                        code: 200,
                        result: result
                    });
        } catch (e) {
            res.send({
                        message: 'Failed to register user',
                        code: 400,
                        result: e
                    });
        }
    }
    public static async getEvents(req: Request, res: Response, next: NextFunction) {

        try {

            // 
            // Get data
            let result = await EventModel.find().exec();

            // 
            // Response
            res.send({
                message: 'Here is all the Events',
                result: result
            });
        } catch (err) {

            // 
            // Error response
            res.send({
                message: "Clubs couldn't Events",
                err: err
            });
        }
    }
    private static async newEvent(event){
        const newEvent= new EventModel({
            
            key:event.key,
            participants:event.participants,
            imagepath:event.imagepath,
            title:event.title,
            caption:event.caption,
            date:event.date,
            month:event.month,
            organizer:event.organizer
        })

        try {
            await newEvent.save();
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
    /**
     *
     * @param eventkeys
     */
    
  private static async getEventById(eventkeys) {
    try {
        let result = await EventModel.find({}).where({eventkeys:eventkeys});
        return isEmpty(result) ? null : result[0]
    } catch (e) {
        throw new Error(e)
    }
}}