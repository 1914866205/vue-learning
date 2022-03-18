<template>
	<view class="content">
		<uni-list>
			<uni-list-item v-for="(item,index) in list" :key="index" 
			:title="item.title" 
			:note="item.content"
			:thumb="item.thumbnail" thumb-size="lg" 
			:rightText="item.author">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			uni.request({
				url: 'http://localhost:8080/api/v1/articles/all',
				method: 'GET',
				success: (res) => {
					console.log(res.data.data);
					this.list = res.data.data;
				}
			});
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.uni-list-item {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
