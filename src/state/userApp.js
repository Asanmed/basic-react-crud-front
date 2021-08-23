import { createSlice } from '@reduxjs/toolkit';
import { UiState } from '../utils/UiState';

const userSlice = createSlice({
    name: 'users',

    initialState: {
        users: [],
        selectedUser: {},
        uiState: UiState.None,
        loggedUser: {},
    },

    reducers: {
        loadUsers(state, action) {
            state.users = action.payload;
            state.uiState = UiState.Ready;
        },

        loadUserDetails(state, action) {
            state.selectedUser = action.payload;
            state.uiState = UiState.Ready;
        },

        setLoggedUser(state, action) {
            state.loggedUser = action.payload;
        },

        requestlogIn(state) {
            state.uiState = UiState.Loading;
        },

        requestLoadUsers: (state) => {
            state.uiState = UiState.Loading;
        },

        requestLoadSingleUser: (state) => {
            state.uiState = UiState.Loading;
        },

        requestAddUser: (state) => {
            state.uiState = UiState.Processing;
        },

        requestUpdateUser: (state) => {
            state.uiState = UiState.Processing;
        },

        showErrorLoadUsers: (state) => {
            state.uiState = UiState.ErrorLoading;
        },

        showErrorProcessing: (state) => {
            state.uiState = UiState.ErrorProcessing;
        },

        showErrorLogin: (state) => {
            state.uiState = UiState.ErrorLogin;
        },

        showErrorPerms: (state) => {
            state.uiState = UiState.ErrorPerms;
        },

        requestRemoveUser: (state) => {
            state.uiState = UiState.Processing;
        },

        restoreReadyState: (state) => {
            state.uiState = UiState.Ready;
        },
    },
});

export const userReducer = userSlice.reducer;

export const {
    loadUsers,
    loadUserDetails,
    setLoggedUser,
    requestlogIn,
    requestLoadUsers,
    requestLoadSingleUser,
    requestUpdateUser,
    requestAddUser,
    showErrorLoadUsers,
    showErrorProcessing,
    showErrorLogin,
    showErrorPerms,
    requestRemoveUser,
    restoreReadyState,
} = userSlice.actions;

export const selectUsers = (state) => state.users.users;

export const selectUserDetails = (state) => state.users.selectedUser;

export const selectLoggedUser = (state) => state.users.loggedUser;

export const selectUiState = (state) => state.users.uiState;
