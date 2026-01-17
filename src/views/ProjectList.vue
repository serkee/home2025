<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 relative selection:bg-gray-100 selection:text-gray-900">
    
    <Motion
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      class="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference"
    >
      <button @click="router.push('/')" class="flex items-center gap-2 group">
        <div class="p-2 rounded-full border border-gray-500 group-hover:bg-gray-100 group-hover:border-gray-100 transition-all duration-300">
          <ArrowLeft class="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
        </div>
        <span class="font-display text-xl tracking-wide text-gray-300 group-hover:text-white transition-colors">
          HOME
        </span>
      </button>
      
      <div class="text-right">
        <span class="block font-display text-2xl md:text-3xl text-gray-100 uppercase">
          {{ title }}
        </span>
        <span class="block font-body text-xs text-gray-500 mt-1">
          Total {{ filteredProjects.length }} Projects
        </span>
      </div>
    </Motion>

    <main class="pt-40 md:pt-60 pb-20">
      <div class="container mx-auto px-6 mb-20">
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.2 }"
          class="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter text-gray-800"
        >
          {{ subtitle }}
        </Motion>
      </div>

      <div class="w-full">
        <ProjectItem 
          v-for="(project, index) in filteredProjects" 
          :key="project.id" 
          :project="project" 
          :index="index" 
        />
      </div>
      
      <div v-if="filteredProjects.length === 0" class="container mx-auto px-6 py-20 text-center text-gray-500 font-body">
        프로젝트가 준비중입니다.
      </div>
    </main>

    <footer class="py-10 text-center text-gray-600 font-body text-sm">
      &copy; {{ new Date().getFullYear() }} Gray Tone Portfolio. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Motion } from "@motionone/vue";
import { ArrowLeft } from 'lucide-vue-next';
import ProjectItem from '../components/ProjectItem.vue';
import { PROJECTS } from '../constants.js';

const route = useRoute();
const router = useRouter();

onMounted(() => { window.scrollTo(0, 0); });

const category = computed(() => route.params.category);
const validCategory = computed(() => (category.value === 'pub' ? 'pub' : 'dev'));
const filteredProjects = computed(() => PROJECTS.filter(p => p.category === validCategory.value));
const title = computed(() => (validCategory.value === 'dev' ? 'Development' : 'Publishing'));
const subtitle = computed(() => (validCategory.value === 'dev' ? '개발 포트폴리오' : '퍼블리싱 포트폴리오'));
</script>