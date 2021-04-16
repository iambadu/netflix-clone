import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import {fireData} from './firedata';

let config = {
    apiKey: "AIzaSyCsfsLqjSEtAYOMLo2Hrsm-z1Zy2-p_5ao",
    authDomain: "netflix-clone-a0875.firebaseapp.com",
    projectId: "netflix-clone-a0875",
    storageBucket: "netflix-clone-a0875.appspot.com",
    messagingSenderId: "352169691425",
    appId: "1:352169691425:web:25ddaa6c124daff695d660"
}

const firebase = Firebase.initializeApp(config);

//fireData(firebase);

export {firebase};