const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
		css: {
			extract: false // Disable CSS extraction
		}
})
