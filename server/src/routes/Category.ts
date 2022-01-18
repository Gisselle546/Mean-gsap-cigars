import {Router} from 'express';
import { getCategories} from '../controllers/Category/Category';

const router: Router = Router()

router.get('/categories',getCategories)

export default router;