<template>
  <Selector
    :data="menu.data"
    placeholder="请选择语言"
    @onSelected="handleItemSelected"
  />
  <p>Selected item: {{ menu.selected || json }}</p>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const menu = reactive({
      data: [
        {
          value: 1,
          text: "C#",
        },
        {
          value: 2,
          text: "Vue.js",
        },
        {
          value: 3,
          text: "React.js",
        },
      ],
      selected: {},
    });
    const handleItemSelected = (item) => {
      menu.selected = item;
    };
    return {
      menu,
      handleItemSelected,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
