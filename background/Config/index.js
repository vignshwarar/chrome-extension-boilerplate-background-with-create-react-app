/* If you have config based on development and production but here we have same endpoint for both */
const env = process.env.BUILD_ENV;
if(env === "prod"){
    module.exports = require('./prod');
}else {
    module.exports = require('./dev');
}
