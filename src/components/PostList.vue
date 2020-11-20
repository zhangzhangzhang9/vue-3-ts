<template>
  <div class="post-list">
    <article v-for="post of list"
             :key="post.id"
             class="card mb-3 shadow">
      <div class="card-body">
        <h4>{{post.title}}</h4>
        <div class="row my-3 align-items-center">
          <div class="col-3"
               v-if="post.image">
            <img :src="post.image"
                 :alt="post.title"
                 class="rounded-lg">
          </div>
          <p :class="{'col-9':post.image}">{{post.content}}</p>
        </div>
        <span class="text-muted">{{post.createAt}}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
  name: 'PostList',
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>
    }
  }
});
</script>
