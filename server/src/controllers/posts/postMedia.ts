import { Response, Request } from "express";
import { v2 as cloudinary } from "cloudinary";
import Post from "../../models/posts";
import { IPost } from "../../types/post";

const postMedia = async (req: any, res: Response): Promise<void> => {
  console.log('cloudinary upload disabled')
  // try {
  //   const file = req?.files?.Image;
  //   cloudinary.uploader.upload(file?.tempFilePath, async (err: any, result: any)  => {
  //     console.log('Im here')
  //     if (err) {
  //       return res
  //         .status(400)
  //         .json({ msg: "error in uploading the file", err });
  //     }
  
  //     const mediaPost = { mediaUrl: result.url };
  //     const response: IPost = await Post.create(mediaPost);
  //     console.log(result.url);

  //     return res.status(200).json({ url: result.url });
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Failed to send media.",
  //   });
  // }
};
export default postMedia;
