<template>
  <ul>
    <li v-for="column of list" :key="column.id">
      <img :src="column.avatar" :alt="column.title">
      <p>{{column.description}}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ColumnProps } from './comProps'
export default defineComponent({
  name: "CulumnList",
  props:{
    list:{
      type: Array as PropType<ColumnProps[]>,
      required:true
    }
  },
  // setup(props){

  // }
});
</script>
