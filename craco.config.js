const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@Components": path.resolve(__dirname, "src/components"),
			"@Container": path.resolve(__dirname, "src/Container"),
			"@Pages": path.resolve(__dirname, "src/Pages"),
		},
	},
};
