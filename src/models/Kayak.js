export const capacities = {
    'ONE' : 1,
    'TWO' : 2,
    'THREE' : 3
};
export const listHumans = [];

export default class Kayak {
    capacity = capacities.ONE;

    constructor(capacity,listHumans) {
        this.capacity = capacity;
        this.listHumans =  listHumans;
    }
};

