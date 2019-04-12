import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Create from '../components/create';
import { update } from '../actions';

const mapStateToProps = (state, router) => {
    const { id } = router.match.params;
    return {
        token: state.token,
        initialValues: state.rabbits.find(r => r.id === Number(id)),
    };
};

const mapActionsToProps = {
    handler: update,
};

export default withRouter(connect(
    mapStateToProps,
    mapActionsToProps,
)(Create));