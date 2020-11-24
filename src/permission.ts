import store from './store/index';
import router from './router/index';

router.beforeEach((to, from, next) => {
  console.log(5, to.meta);
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'Login' });
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/');
  } else {
    next();
  }
});
