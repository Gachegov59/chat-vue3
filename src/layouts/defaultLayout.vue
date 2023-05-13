<template lang="pug">
.default-layout
    router-view
</template>

<script>
export default {
  name: "default-layout",
};
</script>

<style scoped>
.default-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>
