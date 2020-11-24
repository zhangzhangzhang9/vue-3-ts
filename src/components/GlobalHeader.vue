<template>
  <nav class="navbar navbar-dark  bg-primary justify-between mb-4 px-4">
    <a class="navbar-brand"
       href="#">导航</a>
    <ul v-if="!user.isLogin"
        class="list-inline mb-0">
      <li class="list-inline-item">
        <a @click="goLogin"
           class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#"
           class="btn btn-outline-light  my-2">注册</a>
      </li>
    </ul>
    <ul v-else
        class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.name}`">
          <DropdownItem>
            <a @click="create"
               class="dropdown-item">新建文章</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#"
               class="dropdown-item">编辑资料</a>
          </DropdownItem>
          <DropdownItem>
            <a @click="logout"
               class="dropdown-item">退出登录</a>
          </DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { UserProps } from './comProps';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    const router = useRouter();
    const create = () => {
      router.push({ path: '/create' });
    };
    const goLogin = () => {
      router.push({ path: '/login' });
    };
    const logout = () => {
      router.push({ path: '/' });
    };
    return { create, goLogin, logout };
  }
});
</script>
