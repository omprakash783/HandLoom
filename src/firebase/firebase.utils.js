import {initializeApp} from 'firebase/app' 
import  {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyATQ5IBxk89yOBbUqBNp4PrySdlZFBQz28",
    authDomain: "handlloom-db.firebaseapp.com",
    projectId: "handlloom-db",
    storageBucket: "handlloom-db.appspot.com",
    messagingSenderId: "177585275044",
    appId: "1:177585275044:web:1169a397c93c58e7bd2631",
    measurementId: "G-KE58RQEGXS"
}

const app = initializeApp(config)

export const auth = getAuth()
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth,provider)
