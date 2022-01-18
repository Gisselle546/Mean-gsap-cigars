import mongoose,{ConnectOptions} from 'mongoose'

const options = {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
    

export default (async ()=>{
    mongoose.connect(process.env.MONGO_URI!,options as ConnectOptions)
.then(() => console.log('DB connection successful!'))
.catch(err => console.log(err));

}

)


