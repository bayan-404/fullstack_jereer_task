import React, {useState} from 'react';
import axios from 'axios';


const UploadFile =() =>{

 const [file, setFile] = useState('');
 const [fileName , setFileName] = useState('choose a vido / image')

 const handleFile = async (e)=>{
   setFile (URL.createObjectURL (e.target.files[0]))
   setFileName(e.target.files[0].name)

   const formData = new FormData();
   formData.append('Image', e.target.files[0]);
   try {
     const res = await axios.post('/api/upload/', formData, {
       headers: {
         'content-Type': 'multipart/form-data',
       },
  });

     const { url } = res.data;
   console.log(url)
   }catch (err) {
    if (err.response.status === 500) {
      console.log('there was a problem with the server');
    } else {
      console.log(err.response.data.msg);
    }
 }
}
   return  (
       <div>
        <form>
        <h1>share your media</h1>
        <input type = 'file' accept='image/png, image/jpeg, video/*'onChange={handleFile}/> 
        </form>
        <img src = {file}/>
        </div>
    );
   }


export default UploadFile;