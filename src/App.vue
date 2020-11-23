<template>
  <div class="container">
    <GlobalHeader :user="user" />
    <router-view />
    <Footer />
  </div>

</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from '@/components/GlobalHeader.vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '@/store/index.ts';

import Footer from '@/views/Footer.vue';
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Footer
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const currentUser = computed(() => store.state.user);
    return {
      user: currentUser
    };
  }
});
</script>
<style>
</style>
