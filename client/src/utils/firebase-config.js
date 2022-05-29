import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBjT4yR_kdvkjoCXnSYyXwk_3BYLzI3sdg",
    authDomain: "jereer-media.firebaseapp.com",
    projectId: "jereer-media",
   storageBucket: "jereer-media.appspot.com",
      messagingSenderId: "134390681498",
     appId: "1:134390681498:web:560ff97918daf0887f7423"
    };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
export default app;