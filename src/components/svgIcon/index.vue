<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClass"></use>
  </svg>
</template>
<script type="text/javascript">
export default {
  name: 'icon-svg',
  props: {
    svgName: {
      type: 'string'
    },
    iconName: {
      type: 'string',
      required: true
    }
  },
  computed: {
    svgClass() {
      if (this.svgName) {
        return 'svg-icon ' + this.svgName
      } else {
        return 'svg-icon'
      }
    },
    iconClass() {
      return `#icon-${this.iconName}`
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
