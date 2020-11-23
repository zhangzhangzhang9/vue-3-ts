<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.image"
             :alt="column.title"
             class="rounded-circle border border-light w-75 my-3">
      </div>
      <div class="col-9">
        <h4 class="card-title">{{column.title}}</h4>
        <p class="card-text text-left">{{column.content}}</p>
      </div>
    </div>
    <PostList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import PostList from '@/components/PostList.vue';
// import { PostProps } from '@/components/comProps';
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  columnId: number | string;
}
const testData: PostProps[] = [
  {
    id: 1,
    columnId: 1,
    content: '分享100%原创干货，致力于帮助EHS人成长.',
    image:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路',
    createAt: '2020-11-20'
  },
  {
    id: 2,
    columnId: 2,
    content: '分享100%原创干货，致力于帮助EHS人成长.',
    image:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路',
    createAt: '2020-11-20'
  },
  {
    id: 3,
    columnId: 3,
    content: '分享100%原创干货，致力于帮助EHS人成长.',
    image:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路',
    createAt: '2020-11-20'
  }
];
export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup() {
    const route = useRoute();
    console.log(route);
    const currentId = Number(route.query.id);
    const column: PostProps | undefined = testData.find(
      (v) => v.id === currentId
    );
    const list: PostProps[] = testData.filter((v) => v.columnId === currentId);
    return { column, list };
  }
});
</script>
