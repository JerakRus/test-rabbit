import { connect } from 'react-redux';
import Home from '../components/home';

const mapStateToProps = state => {
    return {
        username: state.decodeToken.username,
    };
};

export default connect(
    mapStateToProps,
)(Home);