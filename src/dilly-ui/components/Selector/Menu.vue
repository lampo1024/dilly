<template>
  <div class="selector-menu">
    <div
      class="menu-item"
      v-for="(item, index) of searchData"
      :key="index"
      @click="setItemValue(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    searchValue: String,
  },
  setup(props, ctx) {
    const searchData = ref([]);
    const setItemValue = (item) => {
      ctx.emit("setItemValue", item);
    };

    onMounted(() => {
      searchData.value = props.data;
    });

    watch(
      () => {
        return props.searchValue;
      },
      (value) => {
        filterData(value);
      }
    );

    const filterData = (value) => {
      searchData.value = props.data.filter((item) => {
        return item.text.toLowerCase().includes(props.searchValue.toLowerCase());
      });
    };

    return {
      setItemValue,
      searchData,
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
