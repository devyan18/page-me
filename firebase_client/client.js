import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore, Timestamp, orderBy, query } from 'firebase/firestore'
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBEHB5bp0xY-frtH_fuuds9cuGm2bpyXFM',
  authDomain: 'dc-twitter-clone.firebaseapp.com',
  projectId: 'dc-twitter-clone',
  storageBucket: 'dc-twitter-clone.appspot.com',
  messagingSenderId: '602700950270',
  appId: '1:602700950270:web:9e0a31f6c01cd17beb13af'
}

initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export const onAuthStateChanged = (onChange) => {
  return auth.onAuthStateChanged(onChange)
}

export const onLogout = () => auth.signOut()

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth, githubProvider)
}

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

export const loginWithTwitter = () => {
  const twitterProvider = new TwitterAuthProvider()
  return signInWithPopup(auth, twitterProvider)
}

export const addTweet = ({ avatar, username, content, userId }) => {
  return addDoc(collection(db, 'tweets'), {
    userId,
    avatar,
    username,
    content,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const getLatestTweets = () => {
  const q = query(
    collection(db, 'tweets'),
    orderBy('createdAt', 'desc')
  )
  return getDocs(q)
    .then(({ docs }) => {
      return docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return { ...data, id, createdAt: +createdAt.toDate() }
      })
    })
}
