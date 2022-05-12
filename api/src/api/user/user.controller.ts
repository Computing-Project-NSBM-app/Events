import {Request, Response, NextFunction} from 'express';
import UserModal from './user.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';

export default class UserController {

    /**
     *
     * @param req
     * @param res
     * @param next
     */

    public static async login(req: Request, res: Response, next: NextFunction) {
        const body = req.body;

        try {
            const result = await UserController.authenticate(body.email, body.password);
            if(result === 404) {
                res.send({
                    message: 'User not found',
                    code: 404,
                    result: null
                })
            }

            if(result){
                res.send({
                    message: 'success',
                    code: 200,
                    result: result
                });
            }else{
                res.send({
                    message: 'Failed to authenticate',
                    code: 401,
                    result: result
                });
            }
            
        } catch (e) {
            res.send({
                message: 'fail',
                code: 400,
                err: e
            });
        }
    }

    public static async createUser(req: Request, res: Response, next: NextFunction) {
        console.log("Create user")

        const user = req.body;

        try {
            const result = await UserController.newUser(user);
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

    public static async getUserById(req: Request, res: Response, next: NextFunction) {
        console.log("params" , req.params)
        const userId = req.params.userId;
        console.log("user id ", userId);
        try {
            const result = await UserController.getUser(userId);
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

    private static async authenticate(email:string, password:string) {
        
        try{
            let result = await UserModal.find({}).where({email:email});
            if(!isEmpty(result)){
                if(result[0].password === password){
                    return true;
                }else{
                    return false;
                }
            }else{
                return 404;
            }
        }catch(e){
            throw new Error(e);
        }
    }

    private static async newUser(user){
        const newUser = new UserModal({
            key:user.key,
            user:user.user,
            image:user.image,
            email:user.email,
            contactNo:user.contactNo,
            password:user.password,
            creditAmount:user.creditAmount,
            type:user.type
        })

        try {
            await newUser.save();
            return;
        } catch (error) {
            throw new Error(error);
        }
    }

    private static async getUser(userId){

        try {
            const result = await UserModal.find({}).where({key:userId});
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    

}