module.exports = {
	title: 'CV - Taavo-Taur Tammur',

	plugins: [
		'@goy/svg-icons'
	],

	postcss: {
		plugins: [
			require('postcss-import'),
			require('tailwindcss'),
			require('postcss-preset-env')({
				stage: 1
			}),
			// ctx.isProd exists about as reliably as snowman in desert
			...(process.argv[2] === 'build' ? [
				require('@fullhuman/postcss-purgecss')({
					content: [
						`./.vuepress/(components|theme)/**//*.*`,
						`./!(node_modules)/**//*.md`,
					],
					// Include any special characters you're using in this regular expression
					defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
				})
			] : [])
		]
	}
}
