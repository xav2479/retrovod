import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import Axios from 'axios'
// import { seedDatabase } from '../seed'

// @ici la base de données //


// @ici la configuration //

const config = {
    apiKey: "AIzaSyDAn4kiI3bJJor8MFJDbo2Rwbfq_8CQGxw",
    authDomain: "retro-test-115c1.firebaseapp.com",
    projectId: "retro-test-115c1",
    storageBucket: "retro-test-115c1.appspot.com",
    messagingSenderId: "147957568924",
    appId: "1:147957568924:web:4ee8ef448e5256feec2459"
}

const firebase = Firebase.initializeApp(config)

const db = firebase.firestore()

// seedDatabase(firebase)

export { firebase, Axios, db }

