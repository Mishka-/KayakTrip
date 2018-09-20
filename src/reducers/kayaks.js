import {REGISTER_KAYAK, UNREGISTER_KAYAK, RESET_KAYAKS} from '../actions/index';
import KayakList from '../models/KayakList';

const initialState = {
    kayakList: new KayakList(),
};


export function kayaks(state = initialState, action) {

    switch (action.type) {
        case REGISTER_KAYAK: {
            const {kayak} = action;
            if (kayak !== undefined) {
                state.kayakList.inc(kayak);
            }

            return {...state};
        }
        case UNREGISTER_KAYAK: {
            const {kayak} = action;
            if (kayak !== undefined) {
                state.kayakList.dec(kayak);
            }
            return {...state};
        }

        case RESET_KAYAKS: {            

            return {...state};
            
        }
        default:
            return {...state};

    }
}


