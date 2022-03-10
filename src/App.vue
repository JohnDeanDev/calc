<script setup lang="ts">

  import Calculator from "@components/Calculator.vue";

</script>

<template>

  <div class="wrapper df aic jcc">
    <Calculator />
  </div>

</template>

<style lang="scss">

  @import "global.scss";

  .wrapper {
    width: 100%;
    height: 100vh;
    background: darksalmon;
    font-family: "Courier New";
    overflow: hidden;
  }

  .df {
    display: flex;

    &.fdc {
      flex-direction: column;
    }

    &.aic {
      align-items: center;
    }

    &.jcc {
      justify-content: center;
    }

    &.jcsb {
      justify-content: space-between;
    }
  }

</style>
