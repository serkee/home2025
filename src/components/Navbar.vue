
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-[100] transition-all duration-700',
    scrolled ? 'py-6 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-12 bg-transparent'
  ]">
    <div class="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-8 h-8 bg-white flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
           <div class="w-4 h-4 border-2 border-black rotate-45"></div>
        </div>
        <span class="text-xl font-black tracking-tighter uppercase">MY PORTFOLIO</span>
      </a>

      <div class="hidden md:flex items-center gap-12">
        <a 
          v-for="link in links"
          :key="link.name" 
          :href="link.href"
          class="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors relative group"
        >
          {{ link.name }}
          <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
        </a>
      </div>
    </div>
  </nav>
</template>
