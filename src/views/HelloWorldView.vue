<template>
  <div class="hello-world">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "Hello Worlda",
    };
  },
});
</script>

<style lang="scss">
.hello-world {
  width: 100%;
  height: 200px;
  background: #ff0;
}
</style>
