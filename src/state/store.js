import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { userReducer } from './userApp';
import { userSagas } from './userAppSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: [sagaMiddleware],
});

function* rootSaga() {
    yield all([...userSagas]);
}

sagaMiddleware.run(rootSaga);
