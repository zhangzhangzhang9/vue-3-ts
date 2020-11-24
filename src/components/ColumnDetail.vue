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
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import PostList from '@/components/PostList.vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '@/store/index.ts';
export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    console.log(route);
    const currentId = Number(route.query.id);
    const column = computed(() => store.getters.getColumnById(currentId));
    const list = computed(() => store.getters.getPostsByCid(currentId));
    return { column, list };
  }
});
</script>
