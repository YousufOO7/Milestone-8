import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = props => {

    const posts = useLoaderData()

    return (
        <div  className='mt-10'>
             <h2 className="text-3xl font-bold">Our Posts: {posts.length}</h2>
             <div className='mt-2 grid grid-cols-3 gap-5 w-10/12 mx-auto'>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
             </div>
        </div>
    );
};

Posts.propTypes = {
    props: PropTypes
};

export default Posts;