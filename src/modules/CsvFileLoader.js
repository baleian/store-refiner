import Papa from 'papaparse';

import { loadData } from './DataLoader';

const SET_FILES = 'CsvFileLoader/SET_FILES';
const SET_CONFIG = 'CsvFileLoader/SET_CONFIG';

const initialState = {
    files: [],
    config: {
        header: true,
        skipEmptyLines: true
    }
};

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setConfig = (update) => ({ type: SET_CONFIG, payload: update });

export const load = (columns) => (dispatch, getState) => {
    const { files, config } = getState().csvFileLoader;
    Papa.parse(files[0], {
        ...config,
        complete: (results) => {
            results.data.forEach(data => {
                columns.forEach(col => {
                    data[col.dataField] = data[col.dataField] || '';
                });
            });
            dispatch(loadData(results.data));
        }
    });
};

const csvFileLoader = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILES:
            return { 
                ...state,
                files: action.payload
            };
        case SET_CONFIG:
            return { 
                ...state,
                config: {
                    ...state.config,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};

export default csvFileLoader;
