<template>
  <div class="selector" v-focus>
    <SelectorInput placeholder="请选择语言"/>
  </div>
</template>
<script>
import SelectorInput from "./Input";
import focus from "../../directives/focus";
export default {
  name: "Selector",
  components: {
    SelectorInput,
  },
  directives: {
    focus,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.selector {
  width: 200px;
}
</style>
