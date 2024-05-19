import React from 'react';
import { useState } from 'react';
import './Login.css';
import ordaImage from '../../assets/LoginCover.png'; 
import { Link } from 'react-router-dom'; 
// import axious from 'axios';
function Login() {
    const [isRegistering, setIsRegistering] = useState(false); // Initialize as false (login mode)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        // Add other fields if necessary
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check for password confirmation during registration
        if (isRegistering && formData.password !== formData.confirmPassword) {
            console.error('Error: Passwords do not match');
            return; // Exit the function if passwords don't match
        }
    
        const url = isRegistering ? 'http://localhost:5000/signup' : 'http://localhost:5000/login';
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                // Handle success (redirect or show success message)
                console.log('Success:', data);
            } else {
                // Handle errors (show error messages)
                console.error('Error:', data);
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const toggleMode = () => {
        setIsRegistering(!isRegistering); // Toggle the registration mode
    };

    return (
        <div className="login-container">
            <div className="arrow-home">
                <Link to="/" className="arrow-home" title="Go to home page">
                    <i className="fa-solid fa-arrow-left arrow-icon"></i>
                </Link>
            </div>
            
            <div className="image-section">
                <img src={ordaImage} alt="Orda" className="login-image"/>
            </div>
            
            <div className="login-section">
                {isRegistering ? (
                        // Registration form
                        <div>
                            <h2>Register at ÖRDA</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Full Name" />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                                <button type="submit">Register</button>
                                <div className="extra-links">
                                    <div>Already have an account?</div>
                                    <div onClick={toggleMode} className="custom-link"> Sign in</div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <h2>Sign In to ÖRDA</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                <input type="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Password" />
                                <button type="submit">Login</button>
                                <div className="extra-links">
                                    <div>Don't have an account? </div>
                                    <div onClick={toggleMode} className="custom-link">Sign up</div>
                                    {/* <div>
                                        <div className="custom-link">Forgot password?</div>
                                    </div> */}
                                </div>              
                            </form>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Login;