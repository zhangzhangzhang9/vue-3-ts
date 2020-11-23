<template>
  <div class="container">
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb3">
        <label for="exampleInputEmail1">邮箱地址</label>
        <ValidateInput v-model="emailRef.val"
                       :rules="emailRules"
                       type="text"
                       placeholder="请输入邮箱地址"></ValidateInput>
      </div>
      <div class="mb3">
        <label for="exampleInputPassword1">密码</label>
        <ValidateInput v-model="passwordVal"
                       :rules="passwordValRules"
                       type="password"
                       placeholder="请输入密码"></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-danger">测试</span>
      </template>
    </ValidateForm>
  </div>

</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';
import ValidateForm from '@/components/ValidateForm.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { GlobalDataProps } from '@/store/index.ts';
export default defineComponent({
  name: 'App',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const passwordVal = ref('');
    // const inputRef = ref<any>(null)

    const emailRef = reactive({
      val: '123@163.com',
      error: false,
      message: ''
    });
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true;
        emailRef.message = '不得为空';
      }
    };
    const onFormSubmit = (valid: boolean) => {
      if (valid) {
        store.commit('login');
        router.push({ path: '/' });
      }
    };
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮件地址不能为空' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ];
    const passwordValRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ];
    return {
      emailRef,
      validateEmail,
      emailRules,
      passwordVal,
      onFormSubmit,
      // inputRef,
      passwordValRules
    };
  }
});
</script>
<style>
</style>
