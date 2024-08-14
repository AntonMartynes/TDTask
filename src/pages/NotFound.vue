<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDashboard = () => {
  return router.replace("/dashboard")
}
</script>

<template>
  <div class="wrapper">
    <h1>Ooooop, wrong link</h1>
    <el-button  type="primary" @click="goToDashboard">Go to dashboard</el-button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.main {
  flex: 1;
}
</style>