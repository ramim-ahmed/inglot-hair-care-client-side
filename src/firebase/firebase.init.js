import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confi";

const firebaseInitilization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitilization;