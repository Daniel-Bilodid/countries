<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<template>
  <main>
    <Header />
    <router-view></router-view>
  </main>
</template>
