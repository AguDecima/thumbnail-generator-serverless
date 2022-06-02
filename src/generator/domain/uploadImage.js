const { uploadImage } = require('../service/originSourceService');
const { validateImageAllowed } = require('../util/validation');
const { Responses } = require('../../../common/response');

module.exports = async (body, context) => {

  try {
    validateImageAllowed(body.contentType, context.headers['content-length'])

    await uploadImage(
      body.content,
      body.filename,
      body.contentType)

    return Responses._200({ message: "Image Uploaded" })
  } catch (error) {
    console.log("ERROR", JSON.stringify(error));
    return Responses._Custom({ message: error.message }, error.code)
  };
};
