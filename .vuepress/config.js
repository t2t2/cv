const {resolve} = require('path')

module.exports = {
	title: 'CV - Taavo-Taur Tammur',

	plugins: [
		'@goy/svg-icons',
		['@vuepress/medium-zoom', {
			selector: '.images-gallery img',
			options: {
				background: '#2d3748',
				margin: 16
			}
		}],
		require('./pdf-plugin')
	],

	postcss: {
		plugins: [
			require('postcss-import'),
			require('tailwindcss'),
			require('postcss-preset-env')({
				stage: 1
			}),
			// ctx.isProd exists about as reliably as a snowman in a desert
			...(process.argv[2] === 'build' ? [
				require('@fullhuman/postcss-purgecss')({
					content: [
						resolve(__dirname, '..', './.vuepress/{components,theme}/**/*.{md,vue}'),
						resolve(__dirname, '..', './!(node_modules)/**/*.md'),
						resolve(__dirname, '..', './*.md')
					],
					// Include any special characters you're using in this regular expression
					defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
					whitelistPatterns: [
						/^(html|body|h\d|p$|ul|li$|div|ol|table|td$|th$|thead|tbody|main|input|button|form|md-|hljs)/,
						/^content__/,
						/^(icon|outbound)/
					]
				})
			] : [])
		]
	}
}
