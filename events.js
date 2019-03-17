class EventEmitter{
    constructor(){
        this.listener={};

    }

    

    emit(eventName,...args){
        if (this.listener[eventName]) {
            this.listener[eventName].forEach(cb=> cb(...args));
        }
    }

    on(eventName,cb){
        this.listener[eventName]= this.listener[eventName]|| [];
        this.listener[eventName].push(cb);

    }
}
exports = module.exports = EventEmitter;

//exportamos la clase