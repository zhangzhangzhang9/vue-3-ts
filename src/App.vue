<template>
  <div class="container">
    <GlobalHeader :user="user" />
    <Footer/>
    <!-- <ColumnList :list="list"></ColumnList>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb3">
        <label for="exampleInputEmail1">邮箱地址</label>
        <ValidateInput v-model="emailRef.val"
                       :rules="emailRules"
                       type="text"
                       ref="inputRef"
                       placeholder="请输入邮箱地址"></ValidateInput>
      </div>
      <div class="mb3">
        <label for="exampleInputPassword1">密码</label>
        <ValidateInput v-model="emailVal"
                       type="password"
                       placeholder="请输入密码"></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-danger">测试</span>
      </template>
    </ValidateForm> -->
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColumnProps, UserProps } from '@/components/comProps';
// import ColumnList from '@/components/ColumnList.vue';
import GlobalHeader from '@/components/GlobalHeader.vue';
// import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';
// import ValidateForm from '@/components/ValidateForm.vue';
import Footer from '@/views/Footer.vue';
const currentuser: UserProps = {
  isLogin: true,
  name: '张张'
};
console.log(currentuser);
const testData: ColumnProps[] = [
  {
    id: 1,
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    title: 'EHS之路'
  },
  {
    id: 1,
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    title: 'EHS之路'
  },
  {
    id: 1,
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    title: 'EHS之路'
  },
  {
    id: 1,
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    title: 'EHS之路'
  }
];
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    // ValidateInput,
    // ValidateForm,
    Footer
  },
  setup() {
    const emailVal = ref('123');
    const inputRef = ref<any>(null);
    // const emailRules: RulesProp = [
    //   { type: 'required', message: '电子邮件地址不能为空' },
    //   { type: 'email', message: '请输入正确的邮箱地址' }
    // ];
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
      console.log(2, valid);
    };
    return {
      list: testData,
      user: currentuser,
      emailRef,
      validateEmail,
      // emailRules,
      emailVal,
      onFormSubmit,
      inputRef
    };
  }
});
</script>
<style>
</style>
