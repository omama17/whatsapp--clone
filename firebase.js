import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyByJwNomOEMrtCDNFF16jgQW-e54NVkbak",
  authDomain: "whatsapp-clone-25545.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-25545.firebaseio.com",
  projectId: "whatsapp-clone-25545",
  storageBucket: "whatsapp-clone-25545.appspot.com",
  messagingSenderId: "918654808741",
  appId: "1:918654808741:web:7fb34d26a4973e5fbf934c",
  measurementId: "G-J1JWFMW2ED"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;




