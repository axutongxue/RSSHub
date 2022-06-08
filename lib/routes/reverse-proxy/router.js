module.exports = () => {
    const Router = require('@koa/router');
    const router = new Router();
    router.get('/reverse-proxy/:url', require('./index'));
    return router;
};
