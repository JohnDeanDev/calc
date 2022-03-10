<script lang="ts" setup>

  const { data } = defineProps(['data']);

</script>

<template>

  <button @click="this.$emit(data?.emmit ?? 'clickButton', data?.action ?? {})">
    {{data.key ?? data?.action?.key}}
  </button>

</template>

<style lang="scss" scoped>

  button {
    width: 80px;
    height: 80px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .3s;
    border-radius: 50%;
    font-size: 24px;
    font-weight: 700;
    color: white;

    &:hover {
      background: rgba(255, 255, 255, .2);
    }
  }

</style>