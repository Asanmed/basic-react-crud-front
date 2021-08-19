import { call, put, takeLatest } from 'redux-saga/effects';

import {
    loadUsers,
    requestLoadUsers,
    requestUpdateUser,
    showErrorLoadUsers,
    showErrorPerms,
    requestAddUser,
    requestRemoveUser,
    showErrorProcessing,
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
    takeLatest(requestAddUser.type, addNewUser),
    takeLatest(requestRemoveUser.type, removeUser),
    takeLatest(requestUpdateUser.type, updateUser),
];
