<template>
  <div>
    <ColumnDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColumnDetail from '@/components/ColumnDetail.vue';
export default defineComponent({
  name: 'column',
  components: { ColumnDetail },
  setup() {
    return {};
  }
});
</script>
