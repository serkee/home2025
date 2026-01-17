<template>
  <Motion
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.5 }"
    class="min-h-screen w-full flex flex-col md:flex-row bg-gray-950 text-gray-100"
  >
    <Motion
      :initial="{ y: 50, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ delay: 0.2, type: 'spring', stiffness: 100 }"
      class="flex-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-gray-800 overflow-hidden"
      @click="router.push('/list/dev')"
    >
      <div class="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
      <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-tighter group-hover:text-gray-900 transition-colors duration-500">
          개발
        </h1>
      </div>
      <div class="absolute bottom-10 left-10 z-10">
        <span class="font-body text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
          Development<br/>Portfolio
        </span>
      </div>
    </Motion>

    <Motion
      :initial="{ y: 50, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ delay: 0.4, type: 'spring', stiffness: 100 }"
      class="flex-1 relative group cursor-pointer overflow-hidden"
      @click="router.push('/list/pub')"
    >
      <div class="absolute inset-0 bg-gray-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
      <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-tighter group-hover:text-gray-900 transition-colors duration-500">
          퍼블리싱
        </h1>
      </div>
      <div class="absolute bottom-10 right-10 text-right z-10">
        <span class="font-body text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
          Publishing<br/>Portfolio
        </span>
      </div>
    </Motion>
  </Motion>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Motion } from "@motionone/vue";

const router = useRouter();
</script>