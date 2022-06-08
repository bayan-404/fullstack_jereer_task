import React, { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("choose a vido / image");

  const handleFile = async (event :React.ChangeEvent<HTMLInputElement>) => {
    console.log("the event that I'm trying to give a type",event)
    if(event.target.files){
    setFile(URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0].name);

    const formData = new FormData();
    formData.append("Image", event.target.files[0]);
    try {
      const res = await axios.post("/api/upload/", formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });

      const { url } = res.data;
      console.log(url)
    } catch (err: any) {
      if (err.response.status === 500) {
        console.log("there was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  } else{
    console.log("no files found")
  }
  };
  return (
    <div>
      <form>
        <h1>share your media</h1>
        <label htmlFor="contained-button-file">
          <input
            accept="image/png, image/jpeg, video/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFile}
          />
          <button>
            Upload
          </button>
        </label>
      </form>
      <img src={file} />
    </div>
  );
};

export default UploadFile;