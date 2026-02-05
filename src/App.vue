<template>
  <div id="app-container">
    <LanguageSwitcher />
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import LanguageSwitcher from './components/LanguageSwitcher.vue';
</script>

<style>
body { margin: 0; background-color: #030712; }
.page-fade-enter-active, .page-fade-leave-active { transition: opacity 0.3s ease; }
.page-fade-enter-from, .page-fade-leave-to { opacity: 0; }
</style>