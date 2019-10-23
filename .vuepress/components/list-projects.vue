<template>
	<ul class="print:list-disc print:list-outside print:pl-6">
		<project-details
			v-for="project in projects"
			:key="project.key"
			:project="project"
			class="mt-4 print:mt-2"
		/>
	</ul>
</template>

<script>
const JOB_PAGE_REGEX = /^\/projects\/[\w-_]+.html$/

export default {
	computed: {
		projects() {
			return this.$site.pages.filter(({regularPath}) => JOB_PAGE_REGEX.test(regularPath))
				.sort((a, b) => String(a.frontmatter.activity).localeCompare(b.frontmatter.activity) * -1)
		}
	}
}
</script>