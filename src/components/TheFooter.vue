<script setup lang="ts">
import { Position, Link, Message } from "@element-plus/icons-vue";
</script>

<template>
  <footer class="footer">
      <a href="https://t.me/AntonMartynes" target="_blank">
        <el-button type="primary" :icon="Position" />
      </a>

      <a href="mailto:martynesharsiia.anton@gmail.com">
        <el-button type="primary" :icon="Message" />
      </a>

      <a href="https://www.linkedin.com/in/anton-martynes-harsiia-a02327265" target="_blank">
        <el-button type="primary" :icon="Link" />
      </a>
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
