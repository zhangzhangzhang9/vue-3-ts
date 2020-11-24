import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
router.beforeEach((to, from, next) => {
  console.log(to.meta);
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' });
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/');
  } else {
    next();
  }
});
