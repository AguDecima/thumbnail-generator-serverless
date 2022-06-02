const UploadImageDomain = require('../domain/uploadImage');
const multipart = require('aws-lambda-multipart-parser');

module.exports.handler = async (event) => {
// const handler = async (event) => {

  // event = require('../test/eventPayload.json');

  let { headers, requestContext, body } = event
  const decodedFile = Buffer.from(body.replace(/^data:image\/\w+;base64,/, ""), "base64");
  event.body = decodedFile.toString()
  //TODO: validar que viene image en el body
  body = {
    ...multipart.parse(event, true).image,
    content: decodedFile
  }

  console.log("BODY", body);

  return UploadImageDomain(body, {headers, requestContext})
};

// handler()
