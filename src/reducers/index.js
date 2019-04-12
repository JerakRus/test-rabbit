import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import jwtDecode from 'jwt-decode';
import * as actions from '../actions';



const isAuth = handleActions({
    [actions.authRequest]() {
        return 'request';
    },
    [actions.authSuccess]() {
        return 'success';
    },
    [actions.authFailure]() {
        return 'failure';
    },
}, 'none');

const token = handleActions({
    [actions.authSuccess](state, { payload }) {
        return payload.token;
    }
}, '');

const decodeToken = handleActions({
    [actions.authSuccess](state, { payload }) {
        const decodeToken = jwtDecode(payload.token);
        return decodeToken;
    },

}, {} );

const isLoad = handleActions({
    [actions.loadRequest]() {
        return 'request';
    },
    [actions.loadSuccess]() {
        return 'success';
    },
    [actions.loadFailure]() {
        return 'failure';
    },
}, 'none');

const rabbits = handleActions({
    [actions.loadSuccess](state, { payload }) {
        return payload;
    },

}, []);


export default combineReducers({
    isAuth,
    isLoad,
    token,
    decodeToken,
    rabbits,
    form,
})