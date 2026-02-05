<template>
  <div class="fixed top-6 right-6 z-[100] flex gap-2 bg-gray-900/50 backdrop-blur-md p-1 rounded-full border border-gray-800">
    <button 
      @click="i18n.setLocale('ko')"
      :class="[
        'px-3 py-1 text-xs font-body rounded-full transition-all duration-300',
        i18n.locale === 'ko' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-100'
      ]"
    >
      KR
    </button>
    <button 
      @click="i18n.setLocale('en')"
      :class="[
        'px-3 py-1 text-xs font-body rounded-full transition-all duration-300',
        i18n.locale === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-100'
      ]"
    >
      EN
    </button>
  </div>
</template>

<script setup>
import { i18n } from '../i18n';
</script>
