import {Request, Response, NextFunction} from 'express';
import ClubsModel from './clubs.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';


export default class ClubsController { 
    
     /**
     *
     * @param req
     * @param res
     * @param next
     */
     
 
      public static async createClubs(req: Request, res: Response, next: NextFunction) {
        console.log("createClub")
        const clubs = req.body;

        try {
            const result = await ClubsController.newClub(clubs);
            res.send({
                        message: 'Club registered',
                        code: 200,
                        result: result
                    });
        } catch (e) {
            res.send({
                        message: 'Failed to register Club',
                        code: 400,
                        result: e
                    });
        }
    }
    public static async getClubs(req: Request, res: Response, next: NextFunction) {

        try {

            // 
            // Get data
            let result = await ClubsModel.find().exec();

            // 
            // Response
            res.send({
                message: 'Here is all the clubs',
                result: result
            });
        } catch (err) {

            // 
            // Error response
            res.send({
                message: "Clubs couldn't load",
                err: err
            });
        }
    }
    private static async newClub(clubs){
        const newClubs= new ClubsModel({
            clubId:clubs.clubId,
            members:clubs.members,
            imagepath:clubs.imagepath,
            clubname:clubs.clubname,
            description:clubs.description,
        })

        try {
            await newClubs.save();
            return;
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     *
     * @param clubId
     */
    
     private static async getclubsById(clubId) {
        try {
            let result = await ClubsModel.find({}).where({clubId:clubId});
            return isEmpty(result) ? null : result[0]
        } catch (e) {
            throw new Error(e)
        }
    }}