import { ICategory } from "../types/Category";
import { model, Schema } from "mongoose";

const categorySchema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true,
     },

    
    
    },
    
  )

  export default model<ICategory>("Category", categorySchema)