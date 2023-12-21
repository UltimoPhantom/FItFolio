import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header style={{ backgroundColor: '#0e1a18', padding: '3px' }}>
          <div className="container">
            <Link to="/">
              <h1 style={{ color: '#f4f9f9' }}>Workout Buddy</h1>
            </Link>
          <nav>
            <div>
              <Link to='/login' style={{ color: '#f4f9f9' }}>Login</Link>
            </div>
          </nav>
          </div>
        </header>
      );
}

export default Navbar;