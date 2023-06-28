const { aliasWebpack, aliasJest } = require('react-app-alias')
const { alias } = require('react-app-rewire-alias');

const options = {}; // default is empty for most cases

module.exports.jest = aliasJest(options)

module.exports = aliasWebpack(options)

module.exports = function override(config) {
	const fallback = config.resolve.fallback || {};
	alias({
		'@root': 'src'
	})(config);
	return config;
};
