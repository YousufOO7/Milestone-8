import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = props => {
    return (
        <div className='text-center'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    props: PropTypes
};

export default Home;