import React, { FC } from 'react';
import { StyledLoginForm } from './LoginForm.style';
import { FiMail, FiLock } from 'react-icons/fi'; // Using react-icons for email and lock icons

type LoginFormProps = 'object'

export const LoginForm: FC<LoginFormProps> = () => {

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Login form submitted'); // Log form submission
	};

	return (
		// Form structure and styling applied from StyledLoginForm
		<StyledLoginForm data-testid="LoginForm" onSubmit={handleSubmit}>

			{/* Heading for the login form */}
			<h2>Welcome back!</h2>

			{/* Email input field with an icon */}
			<div className="input-container">
				<FiMail className="icon" /> {/* Email icon */}
				<input
					type="email"
					placeholder="Email address"
					required
				/>
			</div>

			{/* Password input field with an icon */}
			<div className="input-container">
				<FiLock className="icon" /> {/* Password icon */}
				<input
					type="password"
					placeholder="Password"
					required
				/>
			</div>

			{/* Submit button for logging in */}
			<button type="submit">Log In</button>

			{/* Links for sign up and forgot password */}
			<div className="links">
				<a href="#">Sign up</a>
				<a href="#">Forgot password?</a>
			</div>
		</StyledLoginForm>
	);
};
