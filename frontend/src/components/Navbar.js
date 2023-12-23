import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
      logout()
    }

    return (
        <header style={{ backgroundColor: '#0e1a18', padding: '3px' }}>
          <div className="container">
            <Link to="/">
              <h1 style={{ color: '#f4f9f9' }}>Workout Buddy</h1>
            </Link>
          <nav>

            {user && <div style={{ color: '#f4f9f9' }}>
              <button onClick={handleClick}>Logout</button>
            </div>}

            {!user && <div>
              <Link to='/login' style={{ color: '#f4f9f9' }}>Login</Link>
            </div>}
          </nav>
          </div>
        </header>
      );
}

export default Navbar;