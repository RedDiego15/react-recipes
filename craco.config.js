const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(
				__dirname,
				"src/"
			),
			"@components": path.resolve(
				__dirname,
				"src/components"
			),
			"@container": path.resolve(
				__dirname,
				"src/Container"
			),
			"@pages": path.resolve(
				__dirname,
				"src/Pages"
			),
		},
	},
};
