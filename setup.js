const { resolve } = require("path"),
    cwd = require("cwd"),
    S3rver = require("s3rver"),
    debug = require("debug")("jest-s3:setup");

const defaultOptions = {
    port: 4569,
    address: "localhost",
    directory: "."
};

module.exports = async function () {
    const config = require(resolve(cwd(), "jest-s3-config.js")),
        s3rverOptions = typeof config === "function" ? await config() : config,
        s3rver = new S3rver(Object.assign(defaultOptions, s3rverOptions));

    // Set reference to s3rver in order to close the server during teardown.
    global.__S3D__ = s3rver;
};

// async function createBuckets(s3, buckets) {
//     return Promise.all(
//         buckets.map((bucket) => s3.createBucket({ Bucket: bucket }).promise())
//     );
// }
