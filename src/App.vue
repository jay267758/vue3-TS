<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- <IndexTs /> -->
  <Login v-if="!tokenState.token"/>
  <UserLayout v-else />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import useToken from '@/pinia/token';
// import HelloWorld from './components/HelloWorld.vue';
// import IndexTs from './views/DemoTs/DemoStore.vue'
import UserLayout from './layouts/UserLayout.vue'
import Login from './views/Login/Index.vue'

const tokenState = useToken();

defineComponent({
  name: 'App',
  components: {
    // HelloWorld
    // IndexTs
    UserLayout,
    Login
  }
});
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
