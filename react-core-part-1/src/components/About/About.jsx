import PropTypes from 'prop-types';

const About = props => {
    return (
        <div className='my-20'>
            <h4 className="text-2xl">About us</h4>
            <p className="text-xl">Everything you want to know</p>
        </div>
    );
};

About.propTypes = {
    props: PropTypes
};

export default About;