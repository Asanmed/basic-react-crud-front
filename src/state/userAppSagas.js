import { call, put, takeLatest } from 'redux-saga/effects';

import {
    loadUsers,
    requestLoadUsers,
    requestLoadSingleUser,
    loadUserDetails,
    requestUpdateUser,
    showErrorLoadUsers,
    showErrorPerms,
    requestAddUser,
    requestRemoveUser,
    showErrorProcessing,
    showErrorLogin,
} from './userApp';

import UserListService from '../services/UserServices';

function* fetchUsers(action) {
    try {
        const response = yield call(UserListService.getUsers, action.payload);
        yield put(loadUsers(response.data));
    } catch (error) {
        yield put(showErrorLoadUsers());
    }
}

function* fetchSingleUser(action) {
    try {
        const response = yield call(
            UserListService.getUserData,
            action.payload
        );
        yield put(loadUserDetails(response.data.user));
    } catch (error) {
        if (!error.response) {
            yield put(showErrorLoadUsers());
            return;
        } else if (error.response.status === 401) {
            yield put(showErrorLogin());
        }
    }
}

function* removeUser(action) {
    try {
        yield call(UserListService.deleteUser, action.payload);

        yield put(requestLoadUsers());
    } catch (error) {
        if (!error.response) {
            yield put(showErrorProcessing());
            return;
        } else if (error.response.status === 401) {
            yield put(showErrorPerms());
        }
    }
}

function* updateUser(action) {
    try {
        yield call(UserListService.updateUser, action.payload);

        yield put(requestLoadUsers());
    } catch (error) {
        if (!error.response) {
            yield put(showErrorProcessing());
            return;
        } else if (error.response.status === 401) {
            yield put(showErrorPerms());
        }
    }
}

function* addNewUser(action) {
    try {
        yield call(UserListService.createUser, action.payload);

        yield put(requestLoadUsers());
    } catch (error) {
        if (!error.response) {
            yield put(showErrorProcessing());
            return;
        } else if (error.response.status === 401) {
            yield put(showErrorPerms());
        }
    }
}

export const userSagas = [
    takeLatest(requestLoadUsers.type, fetchUsers),
    takeLatest(requestLoadSingleUser.type, fetchSingleUser),
    takeLatest(requestAddUser.type, addNewUser),
    takeLatest(requestRemoveUser.type, removeUser),
    takeLatest(requestUpdateUser.type, updateUser),
];
