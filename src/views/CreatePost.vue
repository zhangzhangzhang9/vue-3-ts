<template>
  <div class="container">
    <h2 for="exampleInputEmail1">新建文章</h2>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb3">
        <label for="exampleInputEmail1">文章标题:</label>
        <ValidateInput v-model="titleRef"
                       :rules="titleRules"
                       type="text"
                       placeholder="请输入文章标题"></ValidateInput>
      </div>
      <div class="mb3">
        <label for="exampleInputPassword1">文章详情:</label>
        <ValidateInput tag="textarea"
                       rows="10"
                       v-model="contentVal"
                       :rules="contentValRules"
                       placeholder="请输入文章详情"></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-primary">发布文章</span>
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
import { PostProps } from '@/utils/testData.ts';
export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const contentVal = ref('');
    const titleRef = ref('');
    const onFormSubmit = (valid: boolean) => {
      if (valid) {
        const { columnId } = store.state.user;
        if (columnId) {
          const newPost: PostProps = {
            id: 1,
            columnId,
            content: contentVal.value,
            image:
              'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
            title: titleRef.value,
            createAt: new Date().toLocaleString()
          };
          store.commit('createPost', newPost);
          router.push({ name: 'column', query: { id: columnId } });
        }
      }
    };
    const titleRules: RulesProp = [{ type: 'required', message: '不能为空' }];
    const contentValRules: RulesProp = [
      { type: 'required', message: '不能为空' }
    ];
    return {
      titleRef,
      titleRules,
      contentVal,
      onFormSubmit,
      contentValRules
    };
  }
});
</script>
<style>
</style>
