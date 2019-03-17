// Importar modulo Later.js:
const later = require('later');
// Usar zona horaria local:
later.date.localTime();


const EventEmitter = require('events');

class Programador extends EventEmitter {
    constructor(programador){
        super();
        later.date.localTime();

        programador.forEach(({temperatura,hora})=>{
            const sched = later.parse.text('at ' + hora);
            later.setInterval(()=>{this.emit(ideal,temperatura)}, sched);

        })

    }
}
exports = module.exports = Programador;