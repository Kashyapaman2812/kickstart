const routes = require('next-routes')();
//'/campaign/:address' here ':address' implies wildcard or dynamic text
routes
    .add('/campaign/new','/campaign/new')
    .add('/campaign/:address','/campaign/show')
    .add('/campaign/:address/requests','/campaign/requests/index')
    .add('/campaign/:address/requests/new' , '/campaign/requests/new')

module.exports = routes;