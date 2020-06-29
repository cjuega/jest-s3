# jest-s3

> Jest preset to run a S3rver instance.

Inspired by [jest-dynamodb](https://github.com/shelfio/jest-dynamodb).

## Usage

1. Install:

    ```sh
    npm i --save jest-s3
    ```

2. Setup `jest.config.js`.

    ```js
    module.exports = {
        preset: "jest-s3",
    };
    ```

3. Setup `jest-s3-config.js`. It could be either an object or an async function that resolves to the options object. In particular, it support all [options](https://github.com/jamhall/s3rver#class-s3rver) for s3rver. The two snippets below are equivalent:

    ```js
    module.exports = {
        address: "localhost",
        port: 8008
    };
    ```

    ```js
    module.exports = async () => {
        return {
            address: "localhost",
            port: 8008
        };
    };
    ```

4. Enjoy :stuck_out_tongue_winking_eye:
