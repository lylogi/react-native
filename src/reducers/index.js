import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    stateReconciler: autoMergeLevel2,
  };
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});
  
export default rootReducer;