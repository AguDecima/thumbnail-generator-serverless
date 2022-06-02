const { S3 } = require('../../../common/s3');
const SOURCE_BUCKET = process.env.SOURCE_BUCKET;

const uploadImage = async (body, filename, contentType) => {
    return await S3.write(body, filename, contentType, SOURCE_BUCKET)
}

module.exports = {
    uploadImage
};


