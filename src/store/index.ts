import { createStore } from 'vuex';
import {
  testData,
  testPosts,
  PostProps,
  ColumnProps
} from '@/utils/testData.ts';
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  columns: PostProps[];
  posts: ColumnProps[];
  user: UserProps;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: '张张张' };
    }
  },
  actions: {},
  modules: {}
});
export default store;
