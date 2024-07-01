<template>
  hellooo
  {{ info.name }}
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
