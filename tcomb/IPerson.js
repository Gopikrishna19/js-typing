const t = require('tcomb');

const IPerson = t.struct({
  age: t.Number,
  name: t.String
}, 'IPerson');

module.exports = IPerson;
