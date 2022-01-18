import { Response, Request } from "express"
import { IProduct } from './../../types/Product';
import Product from "../../models/Product";


const getProducts = async (req: Request, res: Response): Promise<void>=>{
    try {
        const products: IProduct[] = await Product.find().populate('brand')
        res.status(200).json({ products })
    } catch (error) {
    throw error
    }
}

const getProduct = async (req: Request, res: Response): Promise<void>=>{
    try {
        const product: IProduct = await Product.getBySlug({slug: req.params.slug})
        res.status(200).json({ product })
    } catch (error) {
        
    throw error
    }


}

export { getProducts,getProduct }


