import PropTypes from 'prop-types';
import { useState } from 'react';

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const changeName = e => {
        setName(e.target.value);
    }

    const changeEmail = e => {
        setEmail(e.target.value);
    }

    const changePassword = e => {
        setPassword(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Please set your password more then 6 character or longer')
            return
        }
        else{
            setError('')
        }
        console.log(name, email, password);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input onChange={changeName} type="text" name='name' />
                <br />
                <input onChange={changeEmail} type="email" name="email" id="" />
                <br />
                <input onChange={changePassword} type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

StatefulForm.propTypes = {
    props: PropTypes
};

export default StatefulForm;