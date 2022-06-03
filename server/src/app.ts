import express, { Express } from "express";
import "dotenv/config";
import router from "./routes";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";

const app: Express = express();
const uri: string = `mongodb+srv://${process.env.MONGO_DB_URL}`;
const PORT: string | number = process.env.PORT || 4000;
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINERY_API_KEY,
    api_secret: process.env.CLOUDINERY_API_SECRET,
});

app.use(
    fileUpload({
        useTempFiles: true,
    })
);
app.use(router);

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
};
mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error;
    });
