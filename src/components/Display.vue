<script setup lang="ts">

  const { data } = defineProps(['data']);

</script>

<template>
  <div class="display df fdc jcsb">
    <div class="display__current">
      <p>{{data.value}}</p>
    </div>
    <div class="display__result">
      <h1>{{data.result ?? ''}}</h1>
    </div>
  </div>
</template>

<style lang="scss">

  @import "../mixins";

  .display {
    padding: 50px 0 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    height: 200px;
    text-align: right;
    color: white;
    overflow: hidden;

    @include mobile {
      height: 150px;
      padding-top: 20px;
    }

    &__current {
      font-size: 24px;
      font-weight: 500;
    }

    &__result h1 {
      font-size: 48px;
      font-weight: 700;
    }
  }

</style>