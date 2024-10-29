import PropTypes from 'prop-types';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = props => {

    const navigation = useNavigation();

    return (
        <div className='text-center'>
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <p className="text-5xl mt-10 font-bold">Page Is Loading</p> :
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    props: PropTypes
};

export default Home;