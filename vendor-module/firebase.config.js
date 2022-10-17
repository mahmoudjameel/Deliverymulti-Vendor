import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBrAreSMzVYc4GA3PVEg7iDRGXSy3thA5g",
  authDomain: "appddelevery.firebaseapp.com",
  databaseURL: "https://appddelevery-default-rtdb.firebaseio.com",
  projectId: "appddelevery",
  storageBucket: "appddelevery.appspot.com",
  messagingSenderId: "57098218201",
  appId: "1:57098218201:web:7e4d3b0bdca57744afecc8",
};

if (firebase.apps.length === 0) {
  const defaultApp = firebase.initializeApp(config);
  initializeAuth(defaultApp);
  //   initializeAuth(defaultApp, {
  //     persistence: getReactNativePersistence(AsyncStorage)
  //   })
} else {
  firebase.app();
}

db = firebase.firestore();
const ServerTimeStamp = serverTimestamp();
export default { firebase, db, ServerTimeStamp };
