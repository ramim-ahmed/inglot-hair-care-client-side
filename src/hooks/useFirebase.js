import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseInitilization from "../firebase/firebase.init";


firebaseInitilization();

const useFirebase = () => {
  const [user, setUser ] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const history = useHistory();

// create a new user
  const createUser = (name, email, password, history, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then( result => {
        const user = result.user;
        const {email} = user;
        updateName(name)
        setUser(user);
        saveUser(email, name)
        alert('User Succefully Created!');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //update profile name
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName:name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  //sign in user

  const signInUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      alert('login successfully');
      const destination = location?.state?.from || '/';
      history.replace(destination);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => setIsLoading(false));

  
  }
  

  //user logout 
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      alert('logout succesfully');
      setUser({});
      history.push('/')
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setIsLoading(false));
  }


  //user observation...
  useEffect( () => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false);
      });

      return unsubscribe;
  }, [auth]);

  const saveUser = (email, name) => {
    
    const user = {email, name};
    fetch('https://aqueous-fortress-70124.herokuapp.com/saveUser', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(user)
    })
    .then()

  }
  return {
      createUser,
      signInUser,
      isLoading,
      logOut,
      user
  }


};


export default useFirebase;