const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('randomName', (age, name)=>{
  console.log(`name: ${name}, age: ${age}`);
})

customEmitter.on('randomName', (a, b)=>{
  console.log(`data ${a} ${b}`);
})

customEmitter.emit('randomName', 28, 'marco')