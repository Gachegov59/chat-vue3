<template lang="pug">
//.chat-page
  chat-menu
  chat-view
</template>

<script>
export default {
  name: "chatPage",
};
</script>

<style lang="scss">
.chat-page {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
</style>
