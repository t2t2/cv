<template>
	<div class="min-h-screen bg-gray-900 print:bg-white bg-pattern text-gray-200 print:text-gray-900">
		<div class="container mx-auto px-4 py-4 print:p-4">
			<div class="flex items-center">
				<div class="flex-grow">
					<h1 class="text-5xl">
						Taavo-Taur Tammur
					</h1>
				</div>
				<div>
					<a class="print:hidden" href="/taavo-taur-tammur-cv.pdf" title="PDF generated just like if you were to print this page!">
						<vp-icon class="inline-block" name="download" /> PDF
					</a>
					<a href="https://cv.t2t2.eu" class="hidden print:block text-right">
						<p class="text-sm">Interactive version available at</p>
						<p class="text-lg">cv.t2t2.eu</p>
					</a>
				</div>
			</div>
			<ContactInformation />

			<div class="mt-8 print:mt-2 mb-8 print:mb-0">
				<Content />
			</div>
		</div>
	</div>
</template>

<script>
import ContactInformation from './components/contact-information'

export default {
	components: {
		ContactInformation
	}
}
</script>

<style lang="css" src="./styles/theme.css" />