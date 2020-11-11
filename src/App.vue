<template>
  <div class="container">
    <ColumnList :list="list"></ColumnList>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ColumnProps } from '@/components/comProps'
import ColumnList from '@/components/ColumnList.vue'
const testData: ColumnProps[] = [
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
  },
  {
    id: 1,
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    title: 'EHS之路'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>
<style>
</style>
