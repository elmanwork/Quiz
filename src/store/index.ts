import { applyMiddleware, compose, Middleware, StoreEnhancer, createStore, Reducer } from "redux";
import storage from "redux-persist/es/storage";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root.reducer";
import { createLogger } from 'redux-logger';
import { rootSaga } from "./root.saga";
import { StateType } from "typesafe-actions";
import { IStateStore } from "types";

const getComposer = (): (<R>(a: R) => R) => {
    if (window !== undefined && window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    } else {
        return compose;
    }
}

const getMiddlewareEnhancer = (...middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        return applyMiddleware(...middleware, createLogger({ collapsed: true }))
    } else {
        return applyMiddleware(...middleware);
    }
}

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = getComposer();
const middlewareEnhancer = getMiddlewareEnhancer(sagaMiddleware);
const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistRootReducer, composeEnhancers(middlewareEnhancer));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

type RootState = StateType<Reducer<IStateStore>>;

export { persistor, store, RootState }