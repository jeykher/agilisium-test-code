import { combineReducers, configureStore } from '@reduxjs/toolkit';

import songReducer from '@Song/infrastructure/redux/reducers/song.reducer';

const rootReducer = combineReducers({
    songState: songReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;