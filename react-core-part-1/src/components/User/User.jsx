import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, phone, email, id} = user;
    return (
        <div className='space-y-2 border-2 border-yellow-600 p-4 rounded-lg'>
            <h2 className="text-2xl">Name: {name}</h2>
            <p> Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button className='btn bg-blue-400 hover:bg-yellow-400 hover:text-white'>Show Details</button></Link>
        </div>
    );
};

User.propTypes = {
    props: PropTypes
};

export default User;