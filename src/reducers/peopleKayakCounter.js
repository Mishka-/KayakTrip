import {ADD_HUMAN, DEL_HUMAN, REGISTER_KAYAK, UNREGISTER_KAYAK, RESET_KAYAKS, PEOPLE_COUNT_TO_NEXT_PAGE} from '../actions/index'

const initialState = {
    peopleCounter: []
};

export default function peopleKayakCounter(state = initialState, action){

    switch (action.type) {
        case ADD_HUMAN: {

            const {human} = action;

            return { peopleCounter: [...state.peopleCounter, human] }
        }

        case DEL_HUMAN: {

            const {key} = action;
            return { peopleCounter: [ ...state.peopleCounter.slice(0, key), ...state.peopleCounter.slice(key + 1)] };
        }

        case PEOPLE_COUNT_TO_NEXT_PAGE:{
            const {humans} = action;
           

            Array.prototype.chunk = function ( n ) {
                if ( !this.length ) {
                    return [];
                }
                return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
            };
            

            return state;///temporary works blank!!!
        }

        case REGISTER_KAYAK: {

            const {kayak} = action;

            switch (kayak.capacity){

                case 1:{
                    if(kayak.capacity === state.peopleCounter.length){
                        return {peopleCounter:[...state.peopleCounter.slice(0,0)]};
                    }else{
                        return { peopleCounter: [ ...state.peopleCounter.slice(0, parseInt(kayak.capacity)), ...state.peopleCounter.slice(parseInt(kayak.capacity) + 1)] };
                    }
                }

                case 2:{
                    if(kayak.capacity > state.peopleCounter.length){
                        return { peopleCounter: [ ...state.peopleCounter.slice(0, 0), ...state.peopleCounter.slice(1)] };

                    }else if(kayak.capacity === state.peopleCounter.length){
                        return {peopleCounter:[...state.peopleCounter.slice(0,0)]};
                    }
                    else{
                        return { peopleCounter: [ ...state.peopleCounter.slice(1, parseInt(kayak.capacity)), ...state.peopleCounter.slice(parseInt(kayak.capacity) + 1)] };
                    }

                }

                case 3:{
                    if(kayak.capacity === state.peopleCounter.length){
                        return {peopleCounter:[...state.peopleCounter.slice(0,0)]};
                    }else{
                        return { peopleCounter: [ ...state.peopleCounter.slice(2, parseInt(kayak.capacity)), ...state.peopleCounter.slice(parseInt(kayak.capacity) + 1)] };
                    }
                }
            }


        }

        case UNREGISTER_KAYAK: {

            const {kayak} = action;
            switch (kayak.capacity){
                case 1:{
                    return { peopleCounter: [...state.peopleCounter, kayak.capacity] };
                }
                case 2:{
                    return { peopleCounter: [...state.peopleCounter, 1, 1] };
                }
                case 3:{
                    return { peopleCounter: [...state.peopleCounter, 1, 1, 1] };
                }
            }
        }

        case RESET_KAYAKS:{
            const {humans} = action;
           
        }

        default: {
            return state;
        }
    }

    return state;
}