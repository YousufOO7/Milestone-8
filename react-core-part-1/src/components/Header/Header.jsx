import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = props => {
    return (
        <div>
            <div className='mt-10'>
            <h1 className="text-4xl font-bold">Navbar</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact us</Link>
            </nav>
        </div>
    );
};

Header.propTypes = {
    props: PropTypes
};

export default Header;