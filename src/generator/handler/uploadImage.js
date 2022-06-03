const UploadImageDomain = require('../domain/uploadImage');
const multipart = require('aws-lambda-multipart-parser');

module.exports.handler = async (event) => {

  let { headers, requestContext, body } = event
  const decodedFile = Buffer.from(body.replace(/^data:image\/\w+;base64,/, ""), "base64");
  event.body = decodedFile.toString()

  body = {
    ...multipart.parse(event, true).image,
    content: decodedFile
  }

  return UploadImageDomain(body, { headers, requestContext })
};
