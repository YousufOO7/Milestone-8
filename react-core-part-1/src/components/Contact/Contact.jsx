import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <div className='my-20'>
            <h4 className="text-2xl">Contact us</h4>
            <p className="text-xl">We are one call away</p>
        </div>
    );
};

Contact.propTypes = {
    props: PropTypes
};

export default Contact;