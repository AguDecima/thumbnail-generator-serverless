const AuthorizerDomain = require('../domain/authorizer');

module.exports.handler = async (event, context, callback) => {
    return AuthorizerDomain(event, context, callback)
};
