import PropTypes from 'prop-types';
import {  useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = props => {

    const users = useLoaderData();

    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold">Our Users: {users.length}</h2>
            <div className='mt-2 grid grid-cols-3 gap-5 w-10/12 mx-auto'>
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    );
};

Users.propTypes = {
    props: PropTypes
};

export default Users;