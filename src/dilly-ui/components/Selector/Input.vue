<template>
  <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input type="text" class="input" :value="value" />
    <span class="iconfont icon-arrow-down"></span>
  </div>
</template>
<script>
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    value: String,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.selector-input {
  position: relative;
  width: 100%;
  height: 32px;
  .input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 3px;
    outline: none;
    transition: all 0.2s linear;

    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }

  .placeholder {
    left: 10px;
    top: 7px;
    color: #999;
    position: absolute;
    font-size: 13px;
  }

  .iconfont {
    right: 10px;
    top: 8px;
    color: #999;

    &.icon-search {
      font-size: 22px;
      top: 6px;
    }
  }
  span {
    position: absolute;
    top: 6px;
  }
}
</style>
