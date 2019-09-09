const LOAD_DATA = 'DataLoader/LOAD_DATA';

export const loadData = (datas) => ({ type: LOAD_DATA, payload: datas });

const initialState = {
    datas: []
};

const dataLoader = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return { 
                ...state, 
                datas: action.payload 
            };
        default:
            return state;
    }
};

export default dataLoader;
