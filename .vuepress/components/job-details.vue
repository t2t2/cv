<template>
	<li class="mt-2">
		<div class="flex">
			<Content
				:page-key="job.key"
				slot-key="logo"
				class="job-logo mr-2 print:hidden"
			/>
			<div class="flex-1 overflow-hidden">
				<div>
					<h3 class="inline-block text-3xl print:text-2xl leading-none">
						<a
							:href="job.frontmatter.url"
							target="_blank"
						>{{ job.title }}</a>
					</h3>
					<span>
						({{ job.frontmatter.role }},
						{{ job.frontmatter.start }}
						<template v-if="job.frontmatter.end"> - {{ job.frontmatter.end }}</template>)
					</span>
				</div>
				<p class="hidden print:block text-sm">{{ job.frontmatter.url }}</p>

				<ul>
					<project-details
						v-for="project in projects"
						:key="project.key"
						:project="project"
						class="mt-4 print:mt-2"
					/>
				</ul>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		job: {
			type: Object,
			required: true
		}
	},
	computed: {
		projects({job}) {
			const regularPathStart = job.regularPath.replace('.html', '/projects/')

			return this.$site.pages.filter(({regularPath}) => regularPath.startsWith(regularPathStart))
				.sort((a, b) => a.frontmatter.order - b.frontmatter.order)
		}
	}
}
</script>

<style>
.job-logo > p {
	@apply .block .w-8;
}
</style>
