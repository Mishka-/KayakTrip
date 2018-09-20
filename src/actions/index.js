export const ADD_HUMAN = 'ADD_HUMAN';
export const DEL_HUMAN = 'DEL_HUMAN';
export const REGISTER_KAYAK = 'REGISTER_KAYAK';
export const UNREGISTER_KAYAK = 'UNREGISTER_KAYAK';
export const RESET_KAYAKS = 'RESET_KAYAKS';
export const PEOPLE_COUNT_TO_NEXT_PAGE = "PEOPLE_COUNT_TO_NEXT_PAGE";

export function addHuman(human) {
    return {
        type: ADD_HUMAN,
        human
    }
}

export function delHuman(key) {
    return {
        type: DEL_HUMAN,
        key
    }
}

export function peopleCountToNextPage(humans){
    return {
        type: PEOPLE_COUNT_TO_NEXT_PAGE,
        humans
    }
}

export function registerKayak(kayak) {
    return {
        type: REGISTER_KAYAK,
        kayak,
    }
}

export function unRegisterKayak(kayak) {
    return {
        type: UNREGISTER_KAYAK,
        kayak,
    }
}

export function resetKayaks(){
    return{
        type: RESET_KAYAKS
    }
}