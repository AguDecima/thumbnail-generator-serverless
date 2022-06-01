const UploadImageDomain = require('../domain/uploadImage');

module.exports.handler = async (event) => {
  return  UploadImageDomain(event);
};