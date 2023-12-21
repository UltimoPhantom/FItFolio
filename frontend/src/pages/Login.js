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
		<div className='bbody'>

			<div className="mmain">
				<input type="checkbox" id="chk" aria-hidden="true" />

				<div className="signup">
					<form onSubmit={handleSignup}>
						<label className='labelStyle' htmlFor="chk" aria-hidden="true">Sign up</label>
						<input className='inputStyle' type="email" name="email" placeholder="Email" value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input className='inputStyle' type="password" name="pswd" placeholder="Password" value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className='buttonStlye'>Sign up</button>
					</form>
				</div>



				<div className="login">
					<form onSubmit={handleLogin}>
						<label className='labelStyle' htmlFor="chk" aria-hidden="true">Login</label>
						<input className='inputStyle' type="email" name="email" placeholder="Email" value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input className='inputStyle' type="password" name="pswd" placeholder="Password" value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className='buttonStlye'>Login</button>
					</form>
				</div>

			</div>
		</div>
	);
}

export default Login;
