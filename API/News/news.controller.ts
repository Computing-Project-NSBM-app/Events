
import {Request, Response, NextFunction} from 'express';
import NewsModel from './news.model';
import {isEmpty, includes, get, map, isNull,concat,isUndefined,filter} from 'lodash';


export default class NewsController { 
    
     /**
     *
     * @param req
     * @param res
     * @param next
     */
     
 
       public static async createNews(req: Request, res: Response, next: NextFunction) {
 
         const news = req.body;
 
         try {
             const result = await NewsController.newNews(news);
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
     public static async getNews(req: Request, res: Response, next: NextFunction) {

        try {

            // 
            // Get data
            let result = await NewsModel.find();
            // 
            // Response
            res.send({
                message: 'Here is all the News',
                result: result
            });
        } catch (err) {

            // 
            // Error response
            res.send({
                message: "News couldn't load",
                err: err
            });
        }
    }

    public static async getSIngleNewsById(req:Request, res: Response){
        console.log("params" , req.params)
        const newskey = req.params.newsKey;
        try {
            const result = await NewsController.getNewsById(newskey);
            res.send({
                message: 'Here is all the News',
                result: result
            });
        } catch (error) {
            res.send({
                message: 'Here is all the News',
                result: error
            });
        }
        }
     private static async newNews(news){
         const newNews= new NewsModel({
             
             key:news.key,
             likes:news.likes,
             imagepath:news.imagepath,
             title:news.title,
             caption:news.caption,
             date:news.date,
             month:news.month,
             organizer:news.organizer
         })
 
         try {
             await newNews.save();
             return;
         } catch (error) {
             throw new Error(error);
         }
     }
    /**
     *
     * @param newskeys
     */
    
  private static async getNewsById(newskeys) {
    console.log('news key' , newskeys)
    try {
        let result = await NewsModel.find({}).where({key:newskeys});
        console.log("result ", result)
        return isEmpty(result) ? null : result[0]
    } catch (e) {
        throw new Error(e)
    }
}}