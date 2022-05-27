import express, {Express} from 'express';
import 'dotenv/config'
import router from './routes'
import {v2 as cloudinary} from 'cloudinary'
import fileUpload from "express-fileupload";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINERY_API_KEY,
    api_secret: process.env.CLOUDINERY_API_SECRET
})

app.use(fileUpload({
    useTempFiles: true
}))
app.use(router)
app.listen(PORT, ()=>
console.log(`server is running on http://localhost:${PORT}`)
)