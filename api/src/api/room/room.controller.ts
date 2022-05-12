import {Request, Response, NextFunction} from 'express';
import Room from './room.model';
import DoorLock from '../doorLock/doorLock.model';
import {isEmpty, includes, get, map, isNull, concat, isUndefined, filter} from 'lodash';


export default class RoomController {

    public static async checkIn(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        const room = new Room(body);
        try {
            await room.save();
            res.send({
                message: 'Check In success',
                code: 200,
                result: room
            });
        }catch (e) {
            res.send({
                message: 'Check In Failed',
                code: 200,
                result: e
            });
        }
    }


    public static async checkOut(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        const keys = body.keys;
        map(keys,async function(key){
            try {
                const updatedAuthorizedKeys = RoomController.removeAuthorizeKey(key);
                const room = RoomController.getMasterKeyRoom(key);
                //Remove the room data.
                res.send({
                    message: 'Check In success',
                    code: 200,
                    result: room
                });
            }catch (e) {
                res.send({
                    message: 'Check In Failed',
                    code: 200,
                    result: e
                });
            }
        })
    }

    public static async login(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        const loginId = body.loginId;
        try{
            const result = await RoomController.getRoomDetailsByNIC(loginId);
            res.send({
                message: 'Login success',
                code: 200,
                result: result
            });
        }catch (e) {
            res.send({
                message: 'Unauthorized',
                code: 401,
                result: e
            });
        }
    }

    private static async removeAuthorizeKey(key){
        try {
            const updatedAuthorizedKeys = await DoorLock.update({$pull:{keys:key}},{multi: true});
            return updatedAuthorizedKeys;
        }catch (e) {
            throw new Error(e);
        }
    }

    private static async getMasterKeyRoom(key){
        try {
            const room = await Room.find({keys:{$elemMatch:{id:key}}});
            return room;
        }catch (e) {
            throw new Error(e);
        }
    }

    private static async  getRoomDetailsByNIC(loginId:string) {
        try{
            const roomDetails = await Room.find({}).where({loginId:loginId});
            if(isEmpty(roomDetails)) {
                throw new Error("Unauthorized")
            }else{
                return roomDetails[0]
            }
        } catch (e) {
            throw new Error(e)
        }
    }

}