<template>
  <div class="main">
    <div class="title">
      您当前所在的位置：
      <span>系统管理</span>
      <span> > </span>
      <span class="active">组织管理</span>
    </div>
    <div class="contain">
      <div class="contain-left">left</div>
      <div class="contain-right">right</div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: ''
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    flex-grow: 50px;
  	width: 100%;
    margin-top: 2px;
    padding-left: 2px;
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    .active {
    	color: blue;
    }
  }

  .contain {
    flex: 1;
    display:flex;

    .contain-left {
	    flex-basis: 200px;
      margin: 10px;
      padding: 10px;
      box-sizing: border-box;
      background-color: #fff;
    }

    .contain-right {
    	flex: 3;
      padding: 10px;
      box-sizing: border-box;
      margin: 10px 10px 10px 0;
      background-color: #fff;
    }
  }

}

</style>
