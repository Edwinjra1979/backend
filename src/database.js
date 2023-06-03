import { mongoose } from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const uri = process.env.URI;

try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
    })
    console.log('Conected to MongoDb Atlas 👍')
} catch (error) {
    console.error(error)
}



