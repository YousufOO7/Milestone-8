import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title, body, id} = post;
    const navigate = useNavigate();

    const handelDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='space-y-2 border-2 border-yellow-600 p-4 rounded-lg flex flex-col'>
            <div className='flex-grow'>
            <h3 className="text-2xl font-bold">Title: {title}</h3>
            <p className="text-xl">{body}</p>
            </div>
            <Link to={`/post/${id}`}><button className='btn bg-blue-400 hover:bg-yellow-400 hover:text-white'>Post Details</button></Link>

            <button className='btn bg-blue-500' onClick={handelDetails}>Click Me!</button>
        </div>
    );
};

Post.propTypes = {
    props: PropTypes
};

export default Post;