import { Response, Request } from "express"
import { v2 as cloudinary } from 'cloudinary'
 const postMedia = async (req: any, res: Response): Promise<void> => {
     const file = req?.files?.Image
      cloudinary.uploader.upload(file?.tempFilePath, (err:any, result:any) => {
            if (err) {
              return res.status(400).json({ msg: 'error in uploading the file', err })
            }
            return res.status(200).json({ url: result.url })
          })
  };
  export default postMedia;