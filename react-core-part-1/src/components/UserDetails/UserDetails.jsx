import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const UserDetails = props => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div className='mt-10'>
            <h2 className="text-2xl font-bold">User Details: {name}</h2>
        </div>
    );
};

UserDetails.propTypes = {
    props: PropTypes
};

export default UserDetails;