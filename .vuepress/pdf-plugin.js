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
						const browser = await puppeteer.launch()
						const browserPage = await browser.newPage()
						
						await browserPage.goto(`http://${host}:${port}/`, {waitUntil: 'networkidle2'})
						await browserPage.pdf({
							path: resolve(__dirname, 'dist', 'taavo-taur-tammur-cv.pdf'),
							format: 'A4'
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