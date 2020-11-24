<template>
  <div class="validate-input-container pb-3">
    <input v-if="tag!=='textarea'"
           class="form-control"
           :class="{'is-invalid':inputRef.error}"
           :value="inputRef.val"
           @input="updateVal"
           @blur="validateInput"
           v-bind="$attrs" />
    <textarea v-else
              class="form-control"
              :class="{'is-invalid':inputRef.error}"
              :value="inputRef.val"
              @input="updateVal"
              @blur="validateInput"
              v-bind="$attrs" />
    <div class="invalid-feedback"
         v-if="inputRef.error">
      {{inputRef.message}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from 'vue';
import { emitter, ValidateFunc } from './ValidateForm.vue';
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RulesProp = RuleProp[];
export type TagType = 'input' | 'textarea';
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  setup(props, context) {
    console.log(32, context.attrs);
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    });
    const updateVal = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit('update:modelValue', targetValue);
    };
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== '';
              break;
            case 'email':
              passed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    };
    onMounted(() => {
      emitter.emit<ValidateFunc>('form-item-created', validateInput);
    });
    return { inputRef, validateInput, updateVal };
  }
});
</script>
