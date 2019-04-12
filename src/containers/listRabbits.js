import { connect } from 'react-redux';
import ListRabbits from '../components/listRabbits';
import { deleteRabbit } from '../actions';

const mapStateToProps = state => {
    return {
        rabbits: state.rabbits,
        token:state.token,
    };
};

const mapActionsToSTate = {
    delete: deleteRabbit,
};

export default connect(
    mapStateToProps,
    mapActionsToSTate,
)(ListRabbits);