import { join } from "path";
import "dotenv/config";
import express, { Express } from "express";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes";

const app: Express = express();
const uri: string = `mongodb+srv://${process.env.MONGO_DB_URL}`;
const PORT: string | number = process.env.PORT || 4000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINERY_API_KEY,
  api_secret: process.env.CLOUDINERY_API_SECRET,
});

const options = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

app.use(express.static(join(__dirname, "..", "client", "build")));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(router);
app.use(
  cors({
    origin: "*",
  })
);
app.get("*", (_req, res) => {
  res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
});

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
