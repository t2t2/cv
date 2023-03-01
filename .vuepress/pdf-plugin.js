// Based on https://github.com/ulivz/vuepress-plugin-export
// But only needed for one page, so simplified it
const {resolve} = require('path')

const {dev} = require('vuepress')

module.exports = (opts = {}, ctx) => ({
	name: 'pdf',
	extendCli(cli) {
		cli
			.command('gen-pdf', 'Generate PDF version')
			.action(async () => {
				try {
					const puppeteer = require('puppeteer')

					const nCtx = await dev({
						sourceDir: resolve(__dirname, '..'),
						host: '127.0.0.1',
						clearScreen: false
					})
					const {host, port} = nCtx.devProcess

					try {
						console.log('Launching browser...');
						const browser = await puppeteer.launch()
						const browserPage = await browser.newPage()

						console.log('Loading page...');
						await browserPage.goto(`http://${host}:${port}/`, {waitUntil: 'networkidle2'})
						console.log('Generating pdf...');
						await browserPage.pdf({
							path: resolve(__dirname, 'dist', 'taavo-taur-tammur-cv.pdf'),
							format: 'A4',
							margin: {
								top: '1cm',
								right: '1cm',
								bottom: '1cm',
								left: '1cm'
							}
						})
					} finally {
						nCtx.devProcess.server.close()
						process.exit(0)
					}
				} catch (error) {
					console.error(error)
					throw error
				}
			})
	}
})