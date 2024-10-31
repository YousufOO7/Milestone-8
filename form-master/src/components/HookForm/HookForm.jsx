import PropTypes from 'prop-types';
import useInputState from '../../Hook/useInputState';

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('')
    const emailState = useInputState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('hook data form:', emailState.value)
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name='name' /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

HookForm.propTypes = {
    props: PropTypes
};

export default HookForm;