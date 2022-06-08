const jwt = require('jsonwebtoken');
const { generatePolicy } = require('../helper/policies');

module.exports = async (event, context, callback) => {

    const { headers, routeArn } = event

    if (!headers.authorization) {
        return callback("Unauthorized")
    }

    const tokenParts = headers.authorization.split(' ');
    const tokenValue = tokenParts[1];

    if (!(tokenParts[0].toLowerCase() === 'bearer' && tokenValue)) {
        return callback("Unauthorized")
    }

    const cert = process.env.CERT_VALUE.replace(/\\n/g, "\n")

    try {
        jwt.verify(tokenValue, cert , (verifyError, decoded) => {
            if (verifyError) return callback('Unauthorized')
            return callback(null, generatePolicy(decoded.sub, 'Allow', routeArn))
        });
    } catch (err) {
        return callback('Unauthorized')
    }

};
