const { uploadImage } = require('../service/originSourceService');
const { validateImageAllowed } = require('../util/validation');
const { Responses } = require('../../common/response');

module.exports = async (body, context) => {

  try {
    validateImageAllowed(body.contentType, context.headers['content-length'])

    await uploadImage(
      body.content,
      body.filename,
      body.contentType)

    const bucketUrl = `https://${process.env.SOURCE_BUCKET}.s3.amazonaws.com`

    return Responses._200(
      { 
        message: "Image uploaded, you can see the images in the following links",
        urls: [
          `${bucketUrl}/400x300/${body.filename}`,
          `${bucketUrl}/160x120/${body.filename}`,
          `${bucketUrl}/120x120/${body.filename}`
        ] 
      })
  } catch (error) {
    console.log("ERROR", JSON.stringify(error));
    return Responses._Custom({ message: error.message }, error.code)
  };
};
