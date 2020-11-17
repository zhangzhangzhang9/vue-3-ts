<template>
  <div class="container">
    <GlobalHeader :user="user" />
    <ColumnList :list="list"></ColumnList>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColumnProps, UserProps } from '@/components/comProps';
import ColumnList from '@/components/ColumnList.vue';
import GlobalHeader from '@/components/GlobalHeader.vue';

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
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      user: currentuser
    };
  }
});
</script>
<style>
</style>
