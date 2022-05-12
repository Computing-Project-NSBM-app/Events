import {Request, Response, NextFunction} from 'express';
import DoorLock from './doorLock.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';

export default class DoorLockController {

    /**
     *
     * @param req
     * @param res
     * @param next
     */

    public static async getDoor(req: Request, res: Response, next: NextFunction) {
        const query = req.query;
        const doorId = query.doorId;

        try {
            const result = await DoorLockController.getDoorKeys(doorId);
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

    /**
     *
     * @param req
     * @param res
     * @param next
     */

    public static async authenticateKey(req: Request, res: Response, next: NextFunction) {
        const query = req.query;
        const doorId = query.doorId;
        const key = query.key;
        console.log('lock key ',key);
        console.log('doorId ',doorId);
        try {
            let lockData = await DoorLockController.getDoorKeys(doorId);
            // @ts-ignore
            if (isEmpty(get(lockData, 'keys', [])) || !includes(get(lockData, 'keys', []), key.toUpperCase())) {
                res.send({
                    message: 'Not Authorized',
                    code: 401,
                    result: false
                });
            } else {
                console.log('Authorized')
                res.send({
                    message: 'Authorized',
                    code: 200,
                    result: true
                });
            }
        } catch (e) {
            res.send({
                message: 'Not Authorized',
                code: 401,
                result: false
            });
        }
    }


    /**
     *
     * @param req
     * @param res
     * @param next
     */

    public static async registerKey(req: Request, res: Response, next: NextFunction) {
        console.log(req.body)
        const body = req.body;
        let result = null;
        try {
            map(body, async function (door) {
                const doorData = await DoorLockController.getDoorKeys(door.doorId);
                if (isNull(doorData)) {
                    result = await  DoorLockController.addDoorKeys(door.doorId, door.keys)
                }else {
                    result = await DoorLockController.updateDoorKeys(door.doorId, door.keys,doorData.keys)
                }
            });
            res.send({
                message: 'Keys registered',
                code: 200,
                result: result
            });
        }catch (e) {
            res.send({
                message: 'Failed to register',
                code: 400,
                result: e
            });
        }
    }

    public static async deleteLockData(req: Request, res: Response, next: NextFunction){
        const query = req.query;
        const doorId = query.doorId;
        const removingKey = query.key;

        if(isUndefined(removingKey)){
            try{
                const results = await DoorLock.deleteOne({doorId:doorId})
                res.send({
                    message: `Room ${doorId} data deleted`,
                    code: 200,
                    result: results
                });
            }catch (e) {
                res.send({
                    message: 'Failed to delete',
                    code: 400,
                    result: e
                });
            }
        }else{
            const roomData = await DoorLockController.getDoorKeys(doorId);
            const roomKeys = roomData.keys;
            const updatedRoomKeys = filter(roomKeys,(key)=>{
                return key.toString() !== removingKey;
            });
            try {
                const results = await DoorLock.update({doorId:doorId},{keys:updatedRoomKeys})
                res.send({
                    message: `Room ${doorId} key ${removingKey} deleted`,
                    code: 200,
                    result: results
                });
            }catch (e) {
                res.send({
                    message: `Failed to delete key ${removingKey}`,
                    code: 400,
                    result: e
                });
            }
        }
    }

    /**
     *
     * @param doorId
     */

    private static async getDoorKeys(doorId) {
        try {
            let result = await DoorLock.find({}).where({doorId:doorId});
            return isEmpty(result) ? null : result[0]
        } catch (e) {
            throw new Error(e)
        }
    }


    /**
     *
     * @param doorId
     * @param keys
     */


    private static async addDoorKeys(doorId, keys) {
        const doorLock = new DoorLock({
            doorId:doorId,
            keys:keys
        })
        try{
            await doorLock.save();
            return doorLock;
        }catch (e) {
            throw new Error(e);
        }
    }

    /**
     *
     * @param doorId
     * @param keys
     * @param currentKeys
     */
    private static async updateDoorKeys(doorId, keys,currentKeys) {
       try {
           const result = await DoorLock.update({doorId:doorId},{keys:concat(keys,currentKeys)})
           return result;
       }catch (e) {
           throw new Error(e)
       }
    }


}