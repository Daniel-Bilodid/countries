<script>
import Header from "./components/Header.vue";
import Countries from "./components/Countries.vue";
export default {
  name: "App",
  components: {
    Header,
    Countries,
  },
};
</script>

<template>
  <div>
    <Header />
    <Countries />
  </div>
</template>
