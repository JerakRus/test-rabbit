import { createAction } from 'redux-actions';
import axios from 'axios';

const apiServer = 'http://conquest.weekendads.ru';

export const authRequest = createAction('AUHTORIZATION_REQUEST');
export const authSuccess = createAction('AUHTORIZATION_SUCCESS');
export const authFailure = createAction('AUHTORIZATION_FAILURE');

export const auth = (authObj) => async (dispatch) => {
    dispatch(authRequest());
    try {
        const res = await axios.post(`${apiServer}/login_check`, authObj);
        dispatch(authSuccess(res.data));
        dispatch(load(res.data.token));// load list rabbits after auth
    } catch(e) {
        console.log(e);
        alert(`Не получилось войти.Не правильные логин или пароль!`);
        dispatch(authFailure());
    }
};

export const loadRequest = createAction('LOAD_RABBITS_REQUEST');
export const loadSuccess = createAction('LOAD_RABBITS_SUCCESS');
export const loadFailure = createAction('LOAD_RABBITS_FAILURE');

export const load = (token) => async (dispatch) => {
    dispatch(loadRequest());
    const options = {
        method: 'GET',
        url: `${apiServer}/rabbit/list`,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    try {
        const res = await axios(options);
        dispatch(loadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить кролликов, попробуйте обновить страницу и зайти еще раз! ${e}`);
        dispatch(loadFailure());
    }
};

export const createRequest = createAction('CREATE_RABBIT_REQUEST');
export const createSuccess = createAction('CREATE_RABBIT_SUCCESS');
export const createFailure = createAction('CREATE_RABBIT_FAILURE');

export const create = (token, rabbit) => async (dispatch) => {
    dispatch(createRequest());
    const options = {
        method: 'POST',
        url: `${apiServer}/rabbit`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'rabbit[name]=' + rabbit.name +
            '&rabbit[weight]=' + rabbit.weight,
    };
    try {
        const res = await axios(options);
        dispatch(createSuccess());
        dispatch(load(token)); // load list rabbits after create
    } catch(e) {
        console.log(e);
        alert(`Не получилось создать кролика, попробуйте обновить страницу и зайти еще раз! ${e}`);
        dispatch(createFailure());
    }
};

export const updateRequest = createAction('UPDATE_RABBIT_REQUEST');
export const updateSuccess = createAction('UPDATE_RABBIT_SUCCESS');
export const updateFailure = createAction('UPDATE_RABBIT_FAILURE');

export const update = (token, rabbit) => async (dispatch) => {
    dispatch(updateRequest());
    const options = {
        method: 'POST',
        url: `${apiServer}/rabbit/${rabbit.id}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'rabbit[name]=' + rabbit.name +
            '&rabbit[weight]=' + rabbit.weight,
    };
    try {
        const res = await axios(options);
        dispatch(updateSuccess());
        dispatch(load(token)); // load list rabbits after update
    } catch(e) {
        console.log(e);
        alert(`Не получилось изменить кролика, попробуйте обновить страницу и зайти еще раз! ${e}`);
        dispatch(updateFailure());
    }
};

export const deleteRequest = createAction('DELETE_RABBIT_REQUEST');
export const deleteSuccess = createAction('DELETE_RABBIT_SUCCESS');
export const deleteFailure = createAction('DELETE_RABBIT_FAILURE');

export const deleteRabbit = (token, rabbit) => async (dispatch) => {
    dispatch(deleteRequest());
    const options = {
        method: 'DELETE',
        url: `${apiServer}/rabbit/${rabbit.id}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'rabbit[name]=' + rabbit.name +
            '&rabbit[weight]=' + rabbit.weight,
    };
    try {
        const res = await axios(options);
        console.log(res);
        dispatch(deleteSuccess());
        dispatch(load(token));
    } catch(e) {
        console.log(e);
        alert(`Не получилось удалить кролика, попробуйте обновить страницу и зайти еще раз! ${e}`);
        dispatch(deleteFailure());
    }
};