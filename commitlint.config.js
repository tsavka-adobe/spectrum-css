module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"header-max-length": [0],
		"type-enum": [2, "always", ["patch"]],
	},
};
