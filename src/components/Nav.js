import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <nav>
          <Tabs size='md' variant='enclosed'>
           <TabList >
              <Tab><Link to="/">Home</Link></Tab>
              <Tab><Link to="add">New Comment</Link></Tab>
            </TabList>
            </Tabs>     
<<<<<<< HEAD
=======
            <ul >
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="add">New Comment</Link>
                </li>
                <li>
                    <Link to="add">Donation</Link>
                </li>
            </ul>
>>>>>>> ab0ccb25dbad9f7ad23325d8a3126f74b8cd14f1
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

