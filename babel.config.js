module.exports = {
	plugins: [
		'import-glob',
		['module:react-native-dotenv'],
		'react-native-reanimated/plugin',
		'@babel/plugin-transform-named-capturing-groups-regex',
		['@babel/plugin-proposal-decorators', { legacy: true }],
	],
	presets: ['module:metro-react-native-babel-preset'],
};
