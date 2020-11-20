<template>
  <div class="container">
    <GlobalHeader :user="user" />
    <router-view />
    <Footer />
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProps } from '@/components/comProps'
import GlobalHeader from '@/components/GlobalHeader.vue'

import Footer from '@/views/Footer.vue'
const currentuser: UserProps = {
  isLogin: false,
  name: '张张'
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Footer
  },
  setup() {
    return {
      user: currentuser
    }
  }
})
</script>
<style>
</style>
