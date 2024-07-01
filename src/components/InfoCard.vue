<template>name: {{ info.name }}</template>

<script>
export default {
  name: "InfoCard",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>
