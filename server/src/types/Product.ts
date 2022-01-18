
  import { Document } from "mongoose"
  import {ICategory} from './Category';
  
  export interface IProduct extends Document {
    name: string
    brand:ICategory
    description: string
    capa: string
    bandaycapote:string
    tripa:string
    strength:number
    images:[]
    slug:string
    size:[
      {
      name:string,
      measure:string
    }
  ]
}

 