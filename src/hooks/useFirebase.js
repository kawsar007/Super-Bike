import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";



// initialize firebase app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message)
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    const loginUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    // Manage users

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError
    }
}

export default useFirebase;