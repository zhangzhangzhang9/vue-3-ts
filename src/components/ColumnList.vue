<template>
  <div class="row">
    <div v-for="column of columnList"
         :key="column.id"
         class="col-4 mb-4">
      <div class="card h-100 shadow-sm"
           style="width: 18rem;">
        <div class="card-body text-center">
          <img :src="column.avatar"
               :alt="column.title"
               class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="{name:'column',query:{id:column.id}}"
                       class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ColumnProps } from './comProps';
export default defineComponent({
  name: 'CulumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require('@/assets/default.jpg');
        }
        return column;
      });
    });
    return { columnList };
  }
});
</script>
