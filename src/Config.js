import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCFAss9Kv8-_8r-3UEzX5vxtg4dr9GvrBE",
    authDomain: "schooldemo-3596e.firebaseapp.com",
    projectId: "schooldemo-3596e",
    storageBucket: "schooldemo-3596e.appspot.com",
    messagingSenderId: "1060284882100",
    appId: "1:1060284882100:web:e38bd966032c303eb38be1"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)
  export default app;


  