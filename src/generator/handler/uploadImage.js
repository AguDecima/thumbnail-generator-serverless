const UploadImageDomain = require('../domain/uploadImage');
const multpart = require('aws-lambda-multipart-parser');

module.exports.handler = async (event) => {

  const body = multpart.parse(event, false)
  if(!body.image) throw new Error("error pa")
  const { headers, requestContext } = JSON.parse(JSON.stringify(event))

  return  UploadImageDomain(body.image, {headers, requestContext});
};