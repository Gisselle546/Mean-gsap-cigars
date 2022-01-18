import { Router } from "express"
import { getProducts,getProduct} from "../controllers/Product/Product";

const router: Router = Router()


router.get("/product", getProducts)
router.get("/product/:slug", getProduct)


export default router;