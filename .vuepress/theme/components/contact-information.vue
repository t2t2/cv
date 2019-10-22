<template>
	<div class="flex flex-wrap mt-2 p-2 print:p-0 bg-darken-200 print:bg-transparent justify-between">
		<a
			v-for="(method, i) in methods"
			:key="i"
			:href="method.href"
			class="p-2 flex-initial"
		>
			<p class="text-sm uppercase">
				<vp-icon
					v-if="method.icon"
					:name="method.icon"
					class="text-xs inline-block"
				/> {{ method.label }}
			</p>
			<p class="text-lg">{{ method.value }}</p>
		</a>
	</div>
</template>

<script>
export default {
	computed: {
		methods() {
			return [
				{icon: 'email', label: 'Email', value: 'taavot@gmail.com', href: 'mailto:taavot@gmail.com'},
				{icon: 'discord', label: 'Discord', value: 't2t2#2222', href: 'javascript:void(0)'},
				{icon: 'twitter', label: 'Twitter', value: 't2t2', href: 'https://twitter.com/t2t2'},
				{icon: 'github', label: 'Github', value: 't2t2', href: 'https://github.com/t2t2'},
				{icon: 'skype', label: 'Skype', value: 'taavot', href: 'skype:taavot'},
				{icon: 'linkedin', label: 'LinkedIn', value: '/in/t2t2', href: 'https://www.linkedin.com/in/t2t2/'}
			]
		}
	}
}
</script>