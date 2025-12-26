
<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    category: 'VUE.JS / REACT',
    desc: '퍼포먼스에 최적화된 복잡한 사용자 인터페이스의 고급 아키텍처 설계 및 구현.'
  },
  {
    num: '02',
    title: 'Digital Publishing',
    category: 'CONTENT STRATEGY',
    desc: '대규모 트래픽을 처리하는 편집 플랫폼 및 현대적인 포트폴리오를 위한 엔드투엔드 퍼블리싱 시스템.'
  },
  {
    num: '03',
    title: 'Interaction Design',
    category: 'EXPERIENCE',
    desc: '정적인 디자인과 디지털 현실 사이의 간극을 좁히는 유연하고 감각적인 인터랙션 구현.'
  },
  {
    num: '04',
    title: 'Fullstack Solutions',
    category: 'NODE.JS / TS',
    desc: '현대적이고 반응성이 뛰어난 웹 환경을 지원하는 확장 가능한 백엔드 시스템 구축 전문가.'
  }
];
</script>

<template>
  <div id="services-list" class="flex flex-col">
    <div 
      v-for="(s, i) in services"
      :key="i" 
      class="group interactive relative py-12 md:py-20 border-b border-white/10 flex flex-col md:flex-row items-baseline justify-between hover:px-8 transition-all duration-500"
    >
      <div class="flex items-baseline gap-8 mb-4 md:mb-0">
        <span class="text-xs font-black text-white/30 group-hover:text-white transition-colors">{{ s.num }}</span>
        <h3 class="text-4xl md:text-7xl font-black tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
          {{ s.title }}
        </h3>
      </div>
      
      <div class="flex items-center gap-12 md:w-1/3">
         <div class="hidden lg:block">
            <span class="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2 block">{{ s.category }}</span>
            <p class="text-sm text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {{ s.desc }}
            </p>
         </div>
         <ArrowRight class="text-white/20 group-hover:text-white group-hover:rotate-[-45deg] transition-all" :size="32" />
      </div>
    </div>
  </div>
</template>
