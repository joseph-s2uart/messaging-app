import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
   
   
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    
    return (
        <div className="Login">
            <div className="Login__container">
            <img
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Google_Messages_logo.svg/150px-Google_Messages_logo.svg.png"alt=" "
            />

            <div>
                <h1>Welcome to the React Chat app</h1>
            </div>

            <Button onClick={signIn}>
                Sign In With Google Account
            </Button>
            </div>
        </div>
    );
}

export default Login;
