import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Create from '../components/create';
import { create } from '../actions';

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

const mapActionsToProps = {
    handler: create,
};

export default withRouter(connect(
    mapStateToProps,
    mapActionsToProps,
)(Create));