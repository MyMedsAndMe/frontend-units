export default class Storage {

  constructor(){
  	this.m = new Map();
  }

  store(key, value) {
  	if(typeof key === 'object'){
  		var obj = key;
  		for (var prop in obj){
  			this.m.set(prop, obj[prop]);
  		}
  	}else{
  		this.m.set(key, value);
  	}
  }

  get(key) {
  	if(typeof key === 'undefined'){
  		var obj = {};
  		for (var [key, value] of this.m.entries()) {
			  obj[key] = value;
			}
			return obj;
  	}
  	if(this.m.has(key)) {
  		return this.m.get(key);
  	}
  }

}
