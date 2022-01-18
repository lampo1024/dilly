<template>
  <div class="selector" v-focus>
    <SelectorInput
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <SelectorMenu
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    />
  </div>
</template>
<script>
import SelectorInput from "./Input";
import SelectorMenu from "./Menu";
import focus from "../../directives/focus";
import { reactive, toRefs } from "@vue/reactivity";
export default {
  name: "Selector",
  components: {
    SelectorInput,
    SelectorMenu,
  },
  directives: {
    focus,
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    data: {
      type: Array,
    },
  },
  setup(props, ctx) {
    const state = reactive({
      inputValue: "",
      searchValue: "",
    });
    const setItemValue = (item) => {
      state.inputValue = item.text;
      const _item = {
        text: item.text,
        value: item.value,
      };
      ctx.emit("onSelected", _item);
    };

    const searchOptions = (value) => {
      state.searchValue = value;
    };
    return {
      ...toRefs(state),
      setItemValue,
      searchOptions,
    };
  },
};
</script>
<style lang="scss" scoped>
.selector {
  position: relative;
  width: 300px;
}
</style>
