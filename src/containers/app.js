import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/app';


const mapStateToProps = state => {
    return state;
};


export default withRouter(connect(
    mapStateToProps,
)(App));