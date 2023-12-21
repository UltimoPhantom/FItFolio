// Login.js

import React from 'react';
import './Login.css'; // Make sure to import your CSS file
import { useState } from 'react';

function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignup = async (e) => {
		e.preventDefault();
		console.log(email, password)
		setEmail('')
		setPassword('')
		alert("working!")
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		console.log(email, password)
		setEmail('')
		setPassword('')
		alert("working!")
	};


	return (
		<div className="main">
			<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form  onSubmit={handleSignup}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="email" name="email" placeholder="Email" value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input type="password" name="pswd" placeholder="Password" value={password}
							onChange={(e) => setPassword(e.target.value)}
					/>
					<button className='loginButtons'>Sign up</button>
				</form>
			</div>



			<div className="login">
				<form  onSubmit={handleLogin}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input type="password" name="pswd" placeholder="Password" value={password}
							onChange={(e) => setPassword(e.target.value)}
					/>
					<button className='loginButtons'>Login</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
