import { Link } from "react-router-dom";
import  "../css/Nav1.css"

const Nav = () => {
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
        </nav>
    );
};

export default Nav;