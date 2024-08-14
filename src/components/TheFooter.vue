<script setup lang="ts">
import { Position } from "@element-plus/icons-vue";
</script>

<template>
  <footer class="footer">
    <div class="heaer__btns">
      <el-button type="primary" :icon="Position" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 48px;
  padding: 20px 40px;
  box-shadow: var(--el-box-shadow-light);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 16px;
}
</style>
