import { combineReducers } from 'redux';

import dataLoader from './DataLoader';
import csvFileLoader from './CsvFileLoader';

const rootReducer = combineReducers({
    dataLoader,
    csvFileLoader
});

export default rootReducer;
