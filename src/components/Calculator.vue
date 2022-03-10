<script setup lang="ts">
  // Vue
  import {onMounted, reactive} from "vue";

  // Components
  import Display from "./Display.vue";
  import Working from "./Working.vue";

  // Data
  import {buttons, buttonsSubmit, buttonsDelete} from "@config";
  import { keydown } from "@utils/dom";
  import { key } from "@typeses/config";

  const data = reactive({
    value: '',
    result: ''
  })

  const handlerKeydown = (action: key) => {
    if(action.checked(data.value)) data.value += action.value;
  }

  const changeSqrt = (value: string) => {
    const replaceDataSqrt = [...value.matchAll(/\√[0-9]{1,}/g)];

    for(const _sqrt of replaceDataSqrt) {
      const _key = _sqrt[0];
      const sqrt = +_key.replace('√', '') ?? 0;
      value = value.replace(_key, Math.sqrt(sqrt).toString())
    }

    return value;
  }

  const changePercent = (value: string) => {
    const replaceDataPercent = [...value.matchAll(/\%[0-9]{1,}/g)];

    for(const _percent of replaceDataPercent) {
      const _key = _percent[0];
      const percent = +_key.replace('%', '') ?? 0;
      const before = value.split(_key)[0];

      try {
        const data = eval(before.slice(0, before.length-1));
        value = value.replace(_key, (data/100*percent).toString())
      } catch {

      }
    }

    return value;
  }

  const handlerSubmit = () => {
    try {
      let value =
          data
              .value
              ?.replaceAll(',', '.') ?? data.value;

      value = changeSqrt(value);
      value = changePercent(value);

      const _result: number = eval(value);
      console.log('IS GO EVALS', _result)
      data.result = _result.toString().replaceAll('.', ',')
    } catch (e) {
      // console.log(e)
      data.result = 'ERROR';
    }
  }

  const handlerDelete = () => {
    data.value = Array.from(data.value).filter((_el, _index) => _index < data.value.length-1).join('');
  }

  const handlerClear = () => {
    data.value = data.result = '';
  }

  const handlerEmmitButton = (action: key) => handlerKeydown(action);

  onMounted(() => {
    keydown(buttons, handlerKeydown);
    keydown(buttonsSubmit, handlerSubmit);
    keydown(buttonsDelete, handlerDelete);
  });

</script>

<template>

  <div class="calculator">
    <div class="calculator--wrapper">
      <Display
        :data="data"
      />
      <Working
          @clearButton="handlerClear"
          @submitButton="handlerSubmit"
          @clickButton="handlerEmmitButton"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>

  @import "../global";
  @import "../mixins";

  .calculator {
    height: 850px;
    width: 600px;
    background: rgba(255, 255, 255, .2);
    border-radius: 12px;
    padding: 30px 20px;

    @include mobile {
      padding: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
    }

    &--wrapper {
      width: 100%;
      height: 100%;
      background: cornflowerblue;
      border-radius: 12px;
      padding: 30px;

      @include mobile {
        border-radius: 0;
      }
    }
  }

</style>