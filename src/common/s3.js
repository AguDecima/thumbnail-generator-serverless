const AWS = require('aws-sdk');
const s3Client = new AWS.S3();

const S3 = {
    async write(data, fileName, contentType, bucket, acl = false) {
        const params = {
            Bucket: bucket,
            Body: data,
            Key: fileName,
            ContentType: contentType,
            ...(acl) ? { ACL: 'public-read' } : {}
        };

        const newData = await s3Client.putObject(params).promise();

        if (!newData) throw { code: 400, message: "there was an error writing the file" }

        return newData;
    },
    async getObject(key, bucket) {
        const params = {
            Bucket: bucket,
            Key: key,
        };

        const data = await s3Client.getObject(params).promise();

        if (!data) throw { code: 400, message: "there was an error getting the file" }

        return data;
    }
};

module.exports = {
    S3
};
