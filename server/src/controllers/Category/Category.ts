import {Response, Request} from 'express';
import { ICategory } from '../../types/Category';
import Category from '../../models/Category';


const getCategories = async (req:Request, res:Response): Promise<void>=>{
    try{
        const categories: ICategory[] = await Category.find()
        res.status(200).json({categories})
    } catch(error){
        throw error
    }
}


export {getCategories}