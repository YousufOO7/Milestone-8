import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = props => {
    return (
        <div>
            <div className='mt-10'>
            <h1 className="text-4xl font-bold">Navbar</h1>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

Header.propTypes = {
    props: PropTypes
};

export default Header;