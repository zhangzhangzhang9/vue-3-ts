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
  columnId?: number;
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
    user: { isLogin: false, name: '张张张', columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: '张张张'
      };
    },
    createPost(state, newPost) {
      state.columns.push(newPost);
    },
    logout(state) {
      state.user = {
        isLogin: false
      };
    }
  },
  getters: {
    getColumnById: state => (id: number) => {
      return state.columns.find(c => c.id === id);
    },
    getPostsByCid: state => (cid: number) => {
      return state.columns.filter(c => c.id === cid);
    }
  },
  actions: {},
  modules: {}
});
export default store;
