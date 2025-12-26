
<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  type: 'RESEARCH' | 'DEPLOYMENT';
  floatDelay: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Gravity Core UI',
    category: 'Vue 3, Three.js',
    type: 'RESEARCH',
    description: '반중력 엔진의 실시간 데이터를 시각화하는 대시보드 시스템.',
    imageUrl: 'https://images.unsplash.com/photo-1551632432-c73581c61976?auto=format&fit=crop&q=80&w=1000',
    year: '2024',
    floatDelay: '0s'
  },
  {
    id: '02',
    title: 'Cheongra Hub',
    category: 'Node.js, WebSockets',
    type: 'DEPLOYMENT',
    description: '인천 서구 지역의 자기장 네트워크 최적화 플랫폼.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000',
    year: '2024',
    floatDelay: '1s'
  },
  {
    id: '03',
    title: 'Weightless Runner',
    category: 'Physics Engine',
    type: 'RESEARCH',
    description: '무중력 환경에서의 사용자 움직임을 예측하는 알고리즘.',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000',
    year: '2024',
    floatDelay: '0.5s'
  },
  {
    id: '04',
    title: 'Quantum Portal',
    category: 'Web3, GLSL',
    type: 'DEPLOYMENT',
    description: '데이터 전송 시 중력 간섭을 최소화하는 하이퍼 전송 게이트.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    year: '2023',
    floatDelay: '1.5s'
  }
];
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24">
    <div 
      v-for="project in projects"
      :key="project.id" 
      class="project-card group bg-white rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_100px_rgba(0,0,0,0.1)] transition-all duration-700 scroll-observe"
      :style="{ animationDelay: project.floatDelay }"
    >
      <div class="relative aspect-[16/10] overflow-hidden bg-black">
        <img 
          :src="project.imageUrl" 
          :alt="project.title"
          class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
        />
        
        <div class="absolute top-6 left-6 z-10">
           <span class="px-4 py-1.5 bg-black/50 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-black tracking-widest uppercase">
             {{ project.type }}
           </span>
        </div>

        <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <h4 class="text-white text-4xl font-black mb-4 tracking-tighter uppercase">{{ project.title }}</h4>
           <p class="text-white/60 text-sm max-w-xs">{{ project.description }}</p>
        </div>
      </div>
      
      <div class="p-10 text-black flex justify-between items-center">
        <div>
          <h3 class="text-2xl font-black mb-1 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {{ project.category }} — {{ project.year }}
          </p>
        </div>
        <div class="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black transition-all duration-500 group-hover:rotate-45">
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" class="group-hover:stroke-white stroke-black transition-colors">
            <path d="M1 13L13 1M13 1H4M13 1V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  animation: float-card 8s ease-in-out infinite;
}

@keyframes float-card {
  0%, 100% { transform: translateY(0) rotate(0); }
  33% { transform: translateY(-15px) rotate(1deg); }
  66% { transform: translateY(-5px) rotate(-0.5deg); }
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    animation: none;
  }
}
</style>
