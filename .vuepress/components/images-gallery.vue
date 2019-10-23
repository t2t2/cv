<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Images'
		}
	},
	render() {
		return (
			<div class="mt-4">
				<p class="inline-block w-auto px-4 pt-2 bg-blue-800">{this.title}</p>
				<div class="images-gallery flex overflow-x-auto px-2 py-4 bg-blue-800">
					{this.$scopedSlots.default().map(node => node.tag === 'img' ? <div class="flex-none px-2 w-64">{node}</div> : node)}
				</div>
			</div>
		)
	}
}
</script>
