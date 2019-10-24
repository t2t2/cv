<template>
	<li>
		<div class="print:break-inside-avoid">
			<div class="flex mb-2">
				<div class="flex-1">
					<h4 class="text-xl">
						<a
							v-if="project.frontmatter.url"
							:href="project.frontmatter.url"
						>
							{{ project.title }}
						</a>
						<template v-else>
							{{ project.title }}
						</template>
					</h4>
				</div>
				<a
					v-if="project.frontmatter.github"
					:href="`https://github.com/${project.frontmatter.github}`"
					class="flex items-center"
				>
					<vp-icon
						name="github"
						class="mr-1"
					/>
					<span>{{ project.frontmatter.github }}</span>
				</a>
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

			<div class="mt-2 print:hidden">
				<Content
					:page-key="project.key"
					slot-key="snippet"
				/>

				<Content
					:page-key="project.key"
					slot-key="images"
				/>
			</div>
		</div>
	</li>
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
