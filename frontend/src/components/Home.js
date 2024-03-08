import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


const Home = ({ history, sendData}) => {
    const navigate = useNavigate();

    const responseGoogleLogin = async (credentialResponse) => {
        console.log('Google Sign-In Success:', credentialResponse);

        try {
          const response = await axios.get('{link}/user', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
          });
          console.log(response)
          const result = response.data

        } catch (error) {
            console.error('Error getting role:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
            <h1>Welcome to AI Lion Trader!</h1>
            <h2>Login to Continue: </h2>
            <GoogleLogin
                onSuccess={responseGoogleLogin}
                shape="circle"
                size="large"
                theme="filled_blue"
                onError={() => {
                console.log('Login Failed');
                }}
            />
            </header>
        </div>
  );
};

export default Home;