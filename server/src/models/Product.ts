import { IProduct } from "../types/Product";
import { model, Schema, Model } from "mongoose";


interface ProductModal extends Model<IProduct> {
    getBySlug({}:any): any;
  }


  
const productSchema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true,
     },
      description: {
        type: String,
        required: true,
    },
     
      strength:{
        type:Number,
        required:true
      },

    images:{
        type:Array,
        default:[]
    },

    capa:{
      type: String,
      required: true,
    },

    bandaycapote:{
      type:String,
      required: true
    },

    tripa:{
     type:String,
     required: true
   },

    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true

    },

    slug: {
        type: String,
        required: true,
        unique: true,
    },

    size:[
      
      {
        
        name:{
          type:String
        },
        measure:{
          type:String
        }
    }
  ]


},
    { timestamps: true }
  )


  productSchema.statics.getBySlug = async function({slug}) {
    const productDoc = await this.findOne({ slug });
    if (!productDoc) {
      throw new Error('Product not found');
    }

    const book = productDoc.toObject();

    return book;
  };

  
  export default model<IProduct, ProductModal>("Product", productSchema)