export default class Storage {

    constructor() {
        this.mymap = new Map();
    }

    store(k, v) {
        if (typeof k === 'object') {
            var obj = k;
            for (var prop in obj) {
                this.mymap.set(prop, obj[prop]);
            }
        } else {
            this.mymap.set(k, v);
        }
    }

    get(k) {
        if (typeof k === 'undefined') {
            var obj = {};
            for (var [k, v] of this.mymap.entries()) {
                obj[k] = v;
            }
            return obj;
        }
        if (this.mymap.has(k)) {
            return this.mymap.get(k);
        }
    }
}
