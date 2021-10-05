import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA5mfWlLjyd7VX3FW2rsmlb2jnQ2NE6SfQ",
  authDomain: "apartment-hunt-e3e15.firebaseapp.com",
  projectId: "apartment-hunt-e3e15",
  storageBucket: "apartment-hunt-e3e15.appspot.com",
  messagingSenderId: "591768230268",
  appId: "1:591768230268:web:693ead4011be0365f96cf9",
  measurementId: "G-8JQZPMN46C"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        {user ? <h1>Yes</h1> :<h1>No</h1>}
      </header>
    </div>
  );
}

export default App;
