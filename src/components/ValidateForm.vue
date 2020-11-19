<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area"
         @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit"
                class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import mitt from 'mitt';
export type ValidateFunc = () => boolean;
export const emitter = mitt();
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    const funcArr: ValidateFunc[] = [];
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit('form-submit', result);
    };
    const callback = (func: ValidateFunc | undefined) => {
      if (func) {
        funcArr.push(func);
      }
    };
    emitter.on<ValidateFunc>('form-item-created', callback);
    onUnmounted(() => {
      emitter.off<ValidateFunc>('form-item-created', callback);
    });

    return { submitForm };
  }
});
</script>
