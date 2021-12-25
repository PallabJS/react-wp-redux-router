import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistedStore } from "./store";

const StoreProvider = (props) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading="">
                {props.children}
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;
