<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      message: 'hello world'
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
@width: 400px;
div {
  width: @width;
  height: 300px;
  color:#000;
  background-color: yellow;
  position: relative;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
}
</style>
