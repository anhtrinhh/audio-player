const __PATH = require("path");
module.exports = {
    //mode: "development",
    //devtool: "sourceMap",
    entry: "./src/js/audio-player.js",
    output: {
        filename: "audio-player.min.js",
        path: __PATH.resolve(__dirname, "dist/js"),
        library: '$',
        libraryTarget: 'umd'
    }
}