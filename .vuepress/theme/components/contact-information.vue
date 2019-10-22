<template>
	<div>
		<div class="flex flex-wrap mt-2 p-2 print:p-0 bg-darken-300 print:bg-transparent justify-between">
			<a
				v-for="(method, i) in methods"
				:key="i"
				:href="method.href"
				class="text-gray-200 print:text-black hover:underline p-2 flex-initial"
				target="_blank"
			>
				<p class="text-sm uppercase hover:no-underline">
					<vp-icon
						v-if="method.icon"
						:name="method.icon"
						class="text-xs inline-block"
					/> {{ method.label }}
				</p>
				<p class="text-lg">
					<span v-if="method.prefix" class="text-gray-500">{{ method.prefix }}</span>{{ method.value }}
				</p>
			</a>
		</div>
		<p class="text-xs m-1 print:-mt-1">Ordered by how likely I'll read</p>
	</div>
</template>

<script>
export default {
	computed: {
		methods() {
			return [
				{icon: 'email', label: 'Email', prefix: '', value: 'taavot@gmail.com', href: 'mailto:taavot@gmail.com'},
				{icon: 'discord', label: 'Discord', prefix: '', value: 't2t2#2222', href: 'javascript:void(0)'},
				{icon: 'twitter', label: 'Twitter', prefix: '@', value: 't2t2', href: 'https://twitter.com/t2t2'},
				{icon: 'github', label: 'Github', prefix: '', value: 't2t2', href: 'https://github.com/t2t2'},
				{icon: 'skype', label: 'Skype', prefix: '', value: 'taavot', href: 'skype:taavot'},
				{icon: 'linkedin', label: 'LinkedIn', prefix: '/in/', value: 't2t2', href: 'https://www.linkedin.com/in/t2t2/'}
			]
		}
	}
}
</script>