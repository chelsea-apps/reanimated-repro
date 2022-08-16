module.exports = {
    plugins: [
        "import-glob",
        ["module:react-native-dotenv"],
        "@babel/plugin-transform-named-capturing-groups-regex",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        "react-native-reanimated/plugin"
    ],
    presets: ["module:metro-react-native-babel-preset"]
}
