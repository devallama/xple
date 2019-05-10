module.exports = {
    setupFiles: [
        "./src/js/tests/setup-tests.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    transform: {
        '^.+\\.jsx?$': "babel-jest"
    },
}