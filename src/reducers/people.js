import {ADD_HUMAN, DEL_HUMAN} from '../actions/index'

const initialState = {
    peopleList: []
};

export function people(state = initialState, action) {

    switch (action.type) {
        case ADD_HUMAN: {
            const {human} = action;

            return { peopleList: [...state.peopleList, human] }
        }
        case DEL_HUMAN: {
            const {key} = action;

            return {peopleList: [ ...state.peopleList.slice(0, key), ...state.peopleList.slice(key + 1)]};
        }
        default: {
            return state;
        }
    }
}

