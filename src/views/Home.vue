<template>
  <div>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '@/store/index.ts';
import ColumnList from '@/components/ColumnList.vue';
export default defineComponent({
  name: 'column',
  components: {
    ColumnList
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const list = computed(() => store.state.posts);
    return {
      list
    };
  }
});
</script>
