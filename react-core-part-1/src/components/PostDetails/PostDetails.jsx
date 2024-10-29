import PropTypes from 'prop-types';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = props => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {title} = post;

    const handelBackPosts = () => {
        navigate(-1)
    }

    return (
        <div className='mt-10'>
            <h2 className="text-2xl font-semibold">Title: {title}</h2>

            <button onClick={handelBackPosts} className='btn bg-blue-700 mt-10'>Back To Posts</button>
        </div>
    );
};

PostDetails.propTypes = {
    props: PropTypes
};

export default PostDetails;