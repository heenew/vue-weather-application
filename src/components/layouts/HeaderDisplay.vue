<template>
  <header class="header">
    <h2>Weather Application</h2>
    <p>{{ username }}님 반갑습니다!</p>
  </header>
</template>

<script>
export default {
  name: "HeaderDisplay",
  data() {
    return {
      username: "heewoo",
    };
  },
  methods: {},
};
</script>

<style scoped>
.header {
  background: linear-gradient(45deg, #4b79a1, #283e51);
  display: flex;
  /* 양 옆으로 붙게됨 */
  justify-content: space-between;
  /* 위 아래로 정중앙 */
  align-items: center;
  padding: 1em;
}
.header h2 {
  color: #fff;
}
.header p {
  font-size: 12px;
  color: #fff;
}
</style>
