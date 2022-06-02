const { uploadImage } = require('../service/bucketService');
const { validateImageAllowed } = require('../util/validation');

module.exports = async (body, context) => {

  try {
    validateImageAllowed(body.contentType, context.headers['content-length'])
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }

};
