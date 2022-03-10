<script lang="ts" setup>

  import { buttonsInterface } from "@config";

  import Button from "./Button.vue";
  import {key} from "@typeses/config";

  const emits = defineEmits(['clickButton']);

  const clickHandler = (action: key) => emits('clickButton', action);

</script>

<template>

  <div class="working">
    <div
        v-for="button in Object.values(buttonsInterface).sort((prev, next) => prev.position < next.position ? -1 : 1)"
        class="working--item df aic jcc"
    >
      <Button
        :data="button"
        @clearButton="this.$emit('clearButton')"
        @submitButton="this.$emit('submitButton')"
        @clickButton="clickHandler"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>

  @import "../mixins";

  .working {
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(5, 20%);

    @include mobile {
      height: 400px;
    }
  }

</style>
