import React, { useState } from 'react';
import '../assets/css/SignUpForm.css';

const SignUpForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
            return;
        }

        
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            return;
        }

        setPasswordError('');
        setConfirmPasswordError('');
        onClose();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="signup-form-background" onClick={onClose}>
            <div className="signup-form-container" onClick={stopPropagation}>
                <div className="close-btn" onClick={onClose}>X</div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                    {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

