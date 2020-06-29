const debug = require("debug")("jest-s3:teardown"),
    { promisify } = require("util");

module.exports = async function () {
    debug("Teardown s3rver");

    const closeAsync = promisify(global.__S3D__.close).bind(global.__S3D__);

    await closeAsync();
};
