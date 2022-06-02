const { uploadImage } = require('../service/originSourceService');
const { validateImageAllowed } = require('../util/validation');

module.exports = async (body, context) => {

  try {
    validateImageAllowed(body.contentType, context.headers['content-length'])

    const response = await uploadImage(
      body.content,
      body.filename,
      body.contentType)
    console.log("RESPONSE", response);
    return {
      statusCode: 200,
      headers: { "content-type": "text/json" },
      body: JSON.stringify({
        message: "Image uploaded"
      })
    };
  } catch (error) {
    console.log("ERROR", JSON.stringify(error));
    return {
      statusCode: error.code,
      headers: { "content-type": "text/json" },
      body: JSON.stringify({
        error: error.message
      })
    };
  }

};
