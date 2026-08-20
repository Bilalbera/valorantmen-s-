const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

async function getUploadUrl(fileName, fileType) {
  return s3.getSignedUrlPromise("putObject", {
    Bucket: process.env.AWS_BUCKET,
    Key: `videos/${Date.now()}-${fileName}`,
    ContentType: fileType,
    Expires: 300
  });
}

module.exports = { getUploadUrl };
