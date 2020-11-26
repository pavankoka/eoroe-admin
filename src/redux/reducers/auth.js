// const actionTypes = require('redux/actions/auth');
import authActions from 'redux/actions/auth';
// import { actionTypes } from 'redux/actions/auth';

export const defaultState = {
    user: 'pavan koka',
};

// eslint-disable-next-line complexity
function reducer(state = defaultState, { type, payload = {} }) {
    const {
        actionTypes
    } = authActions;

    switch (type) {
        case actionTypes.GET_USER_DETAIL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

export default reducer;