const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const SOURCE_BUCKET = process.env.SOURCE_BUCKET;

const uploadImage = async({name, contentType, body}) => {
    const params = {
        Bucket: SOURCE_BUCKET,
        Key: `origin-source/${name}.${contentType.split("/")[1]}`,
        Body: body,
        ContentType: contentType,
    };
    console.log(params);
    // return await s3.upload(params).promise();
}

module.exports = {
    uploadImage
};


