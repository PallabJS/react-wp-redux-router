import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthSlice from "./Auth/AuthSlice";

const rootReducer = combineReducers({
    auth: AuthSlice,
});

const persistedReducer = persistReducer({ key: "root", storage: storage }, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // devTools: true,
    middleware: [],
});

const persistedStore = persistStore(store);

export { store, persistedStore };
