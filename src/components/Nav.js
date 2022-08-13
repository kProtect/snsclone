import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <nav>
            <ul >
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="add">New Comment</Link>
                </li>
            </ul>
            {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </nav>
    );
};

export default Nav;