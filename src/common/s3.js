const AWS = require('aws-sdk');
const s3Client = new AWS.S3();

const S3 = {
    async write(data, fileName, contentType, bucket) {
        const params = {
            Bucket: bucket,
            Body: data,
            Key: fileName,
            ContentType: contentType
        };

        const newData = await s3Client.putObject(params).promise();

        if (!newData) {
            throw Error('there was an error writing the file');
        }

        return newData;
    },
};

module.exports = {
    S3
};
