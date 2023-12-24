import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
	const { user } = useAuthContext()

	return (
		<div className="App" style={{ backgroundColor: 'black' }}>
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route
							path='/'
							element={ user ? <Home /> : <Navigate to="/login" />}
						/>
						<Route
							path='/login'
							element={ !user ? <Login /> : <Navigate to="/" />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>

	);
}

export default App;
