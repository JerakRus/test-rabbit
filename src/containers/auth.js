import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import Auth from '../components/auth';
import { auth } from '../actions';

const mapStateToProps = state => {
    return {};
};

const mapActionsToProps = {
    auth,
};

export default withRouter(connect(
    mapStateToProps,
    mapActionsToProps,
)(Auth));