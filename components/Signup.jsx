import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import logo from '../src/assets/Logo1.png'; 
import logo1 from '../src/assets/google.png'; 

const Signup = () => {
    const navigate = useNavigate();

    // Function to handle navigation to the login page
    const handleLoginNavigation = () => {
        navigate('/'); // Navigate to the login page
    };

    return (
        <div>
            <div className="left-container">
                <div className="login-container">
                    <div className="login-card">
                        <div className="logo-container">
                            <img src={logo} className="logo" alt="Logo" />
                            <span className="logo-text"><h1>VitaFile</h1></span>
                        </div>
                        <h2>Create Account</h2>
                        <br />
                        <form className="login-form">
                            <div className="input-group">
                                <label htmlFor="username"></label>
                                <input type="text" id="username" name="username" placeholder="Username" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password"></label>
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="footer-group">
                                <button type="submit" className="login-button">Signup</button>
                                <br />
                                <div className="media-options">
                                    <button type="button" className="login-button1">
                                        <img src={logo1} className="logo1" alt="Google logo" />
                                        Signup with Google
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="image-container">
                    {/* Image container content */}
                </div>
            </div>
        </div>
    );
};

export default Signup;
