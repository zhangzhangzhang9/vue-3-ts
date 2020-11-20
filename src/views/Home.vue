<template>
  <div>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { ColumnProps, UserProps } from '@/components/comProps'
const currentuser: UserProps = {
  isLogin: true,
  name: '张张'
}
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
]
export default defineComponent({
  name: 'column',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData,
      user: currentuser
    }
  }
})
</script>
