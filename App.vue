<template>
  <div id="page-body" class="container">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import { reactive } from 'vue';


export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    // vuex存储全局用户信息
    const user = reactive({});

    user.is_authorized = true;
  }
}
</script>

<style scoped>
</style>
