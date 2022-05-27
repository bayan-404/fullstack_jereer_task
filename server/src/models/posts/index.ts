import {IPost} from '../../types/post'
import {model, Schema} from "mongoose"

const postSchema: Schema = new Schema(
    {
        mediaUrl: {
            type: String,
            required: true,
        }
    }
)

export default model<IPost>("Post", postSchema)