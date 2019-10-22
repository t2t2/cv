<template>
	<ul class="print:list-disc print:list-outside">
		<job-details
			v-for="job in jobs"
			:key="job.key"
			:job="job"
		/>
	</ul>
</template>

<script>
const JOB_PAGE_REGEX = /^\/jobs\/\w+.html$/

export default {
	computed: {
		jobs() {
			return this.$site.pages.filter(({regularPath}) => JOB_PAGE_REGEX.test(regularPath))
				.sort((a, b) => String(a.frontmatter.start).localeCompare(b.frontmatter.start))
		}
	}
}
</script>