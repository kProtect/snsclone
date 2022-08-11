import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="add">New Comment</Link>
                </li>
                <li>
                    <Link to="add">Donation</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

