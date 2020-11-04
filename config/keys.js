//keys.js - figure what to return Prod? Dev?

if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}
else{
    module.exports = require('./dev')
}