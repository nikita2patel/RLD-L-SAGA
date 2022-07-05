import { legacy_createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer';
import { selectall } from './Saga/Saga';


const sagaMiddleware = createSagaMiddleware();
export  const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(selectall);