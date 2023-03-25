import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from"firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDplHoWVR2SMakugQnpTfgVhnHVdK0zu0o",
    authDomain: "krishi-sampark-5bed5.firebaseapp.com",
    databaseURL: "https://krishi-sampark-5bed5-default-rtdb.firebaseio.com",
    projectId: "krishi-sampark-5bed5",
    storageBucket: "krishi-sampark-5bed5.appspot.com",
    messagingSenderId: "674902016553",
    appId: "1:674902016553:web:1f8afcae08c9983b3ed238",
    measurementId: "G-EPTV8HYYKL"
};

const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
const firestore=getFirestore(app)
const storage=getStorage(app)

export {app,firestore,storage};