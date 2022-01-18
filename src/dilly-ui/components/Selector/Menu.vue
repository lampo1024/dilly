<template>
  <div class="selector-menu">
    <div
      class="menu-item"
      v-for="(item, index) of data"
      :key="index"
      @click="setItemValue(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props, ctx) {
    const setItemValue = (item) => {
      ctx.emit("setItemValue", item);
    };
    return {
      setItemValue,
    };
  },
};
</script>
<style lang="scss" scoped>
.selector-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 32px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(171, 177, 228);
  border-radius: 3px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;

  .menu-item {
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #666;
    margin: 0;
    vertical-align: middle;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: #74a0f0;
    }
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
}
</style>
