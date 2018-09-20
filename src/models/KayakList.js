export default class KayakList {
    list = [];
    totalCapacity = 0;


    inc(kayak) {
        if (!this.list[kayak.capacity]) {
            this.list[kayak.capacity] = [];
        }
        this.list[kayak.capacity].push(kayak);

        //this.recalculateCapacity();
    }

    dec(kayak) {
        if (this.list[kayak.capacity]) {
            if (this.list[kayak.capacity].length > 0) {
               this.list[kayak.capacity].shift();
            }
            
        }
    }

    reset(){

    }

    getKayakCount(capacity) {
        
        if (!this.list[capacity]) {
            return 0;
        }
        return this.list[capacity].length;

    }

    recalculateCapacity() {
        let capacities = this.list.map(function (kayaks) {
            return kayaks.map(function (kayak) {
                return kayak.capacity ? parseInt(kayak.capacity) : 0;
            });
        });
        let linear = [].concat(...capacities);
        let capacity = linear.reduce(function (a, b) {
            if (!a) {
                a = 0;
            }
            return parseInt(a) + parseInt(b);
        }, 0);

        this.totalCapacity = capacity;
    }
};
