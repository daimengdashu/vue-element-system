<template>
	<div>
		<table class="my-table">
			<thead>
				<tr>
					<th v-if="isNeedCheckbox">
						<input v-model="allChecked" @click="checkAll" type="checkbox">
					</th>
					<th v-for="headItem in headData" :key="headItem">{{ headItem }}</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(bodyItem, i) in bodyData" :key="bodyItem.name">
					<td v-if="isNeedCheckbox">
						<input ref="singleInput" @click="checkSingle" type="checkbox">
					</td>
					<td>{{i + 1}}</td>
					<td>{{ bodyItem.name }}</td>
					<td>{{ bodyItem.age }}</td>
					<td>{{ bodyItem.favort }}</td>
					<td>
						<span class="table-btn">修改</span>
						<span class="table-btn">删除</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'tableMsg',
	props: {
		headData: '',
		bodyData: '',
		isNeedCheckbox: false
	},
	data() {
		return {
			allChecked: false
		}
	},
	methods: {
		checkAll() {
			var _this = this
			let singleInput = this.$refs.singleInput
			singleInput.map(function(el, i) {
				if (_this.allChecked) {
					el.checked = false
				} else {
					el.checked = true
				}
			})
		},
		checkSingle() {
			let singleInput = this.$refs.singleInput
			let isAllCheck = singleInput.every(function (el, i) {
				return el.checked
			})
			if (isAllCheck) {
				this.allChecked = true
			} else {
				this.allChecked = false
			}
		}
	}
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.my-table {
	width: 100%;
	thead tr {
		background-color: lightgreen;
		th {
			text-align: left;
		}
	}
	tbody tr {
		background-color: #fff;
		.table-btn {
			cursor: pointer;
			color:blue;
		}
	}
	tbody tr:hover {
		background-color: lightgreen;
	}
	tr {
		height: 36px;
		line-height: 36px;
		border-bottom: 1px solid #ccc;
	}
}
</style>
