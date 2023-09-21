const EventEmitter = require('events')
//console.log(EventEmitter);

/* retorna una class function

[Function: EventEmitter] {
  once: [AsyncFunction: once],
  on: [Function: on],
  getEventListeners: [Function: getEventListeners],
  getMaxListeners: [Function: getMaxListeners],
  EventEmitter: [Circular *1],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  EventEmitterAsyncResource: [Getter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  setMaxListeners: [Function (anonymous)],
  init: [Function (anonymous)],
  listenerCount: [Function (anonymous)]
} */

const emisorEventos = new EventEmitter()

emisorEventos.on('compra',  ()=>{
  console.log('Se realizo una compra.');
});

