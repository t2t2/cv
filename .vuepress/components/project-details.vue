<template>
	<div>
		<div class="flex mb-2">
			<div class="flex-1">
				<h4 class="text-xl">
					<a
						v-if="project.frontmatter.url"
						:href="project.frontmatter.url"
						class="text-gray-400 print:text-black hover:underline"
					>
						{{ project.title }}
					</a>
					<template v-else>
						{{ project.title }}
					</template>
				</h4>
			</div>
		</div>

		<ul
			v-if="project.frontmatter.tags"
			class="text-xs leading-none -mt-1 print:-mt-3"
		>
			<li
				v-for="(tag, i) in project.frontmatter.tags"
				:key="i"
				class="px-2 py-1 print:p-0 inline-block bg-blue-800 print:bg-transparent print:text-gray-600 mr-2 mt-1"
			># {{ tag }}</li>
		</ul>

		<p
			v-if="project.frontmatter.url"
			class="hidden print:block text-xs"
		>{{ project.frontmatter.url }}</p>

		<Content
			:page-key="project.key"
			slot-key="snippet"
			class="mt-2 print:hidden"
		/>

		<!--
		<Content
			:page-key="project.key"
			slot-key="images"
			class="print:hidden mt-4 project-gallery"
		/>
		-->
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			required: true
		}
	}
}
</script>

<style>
.project-gallery {
	@apply .bg-blue-700;

	& > p {
		@apply .flex .overflow-x-scroll;
	}
	& > p > img {
		@apply .flex-1 m-2 max-w-sm;
		max-height: 300px;
	}
}
</style>