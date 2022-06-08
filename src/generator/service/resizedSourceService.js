const { S3 } = require('../../common/s3')

const RESIZED_SOURCE_BUCKET = process.env.RESIZED_SOURCE_BUCKET
const SOURCE_BUCKET = process.env.SOURCE_BUCKET;

const uploadImage = async (body, filename, contentType) => {
    return await S3.write(body, filename, contentType, RESIZED_SOURCE_BUCKET, true)
}

const getObject = async (key) => {
    return S3.getObject(key, SOURCE_BUCKET)
}

module.exports = {
    uploadImage,
    getObject
};
