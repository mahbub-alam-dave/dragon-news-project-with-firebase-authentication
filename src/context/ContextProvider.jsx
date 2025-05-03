import React, { useEffect, useState } from 'react';
import { ContextValue } from './ContextValue';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import Loader from '../components/Loader';
// import { useNavigate } from 'react-router';

const auth = getAuth(app)

const ContextProvider = ({children}) => {



    const [allNews, setAllNews] = useState([])
    const [user, setUser] =useState([])
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        fetch("/news.json").
        then(res => res.json()).
        then(data => setAllNews(data))
        setLoading(false)
    },[]);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const logOutUser = () => {
        signOut(auth)
        .then(()=>{
        }).catch(error => {console.log(error)})
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
              setUser(currentUser)
              setLoading(false)
          })
          return () => {
              unSubscribe()
          }
      },[]);

      console.log(user)
    const contextValue = {
        allNews,
        setAllNews,
        registerUser,
        loginUser,
        updateUser,
        logOutUser,
        user,
        loading,
        setLoading

    }

    // if(loading) return <Loader />

    return (
        <ContextValue.Provider value={contextValue}>
            {children}
        </ContextValue.Provider>
    );
};

export default ContextProvider;