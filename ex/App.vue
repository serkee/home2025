
<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import FeatureList from './components/FeatureList.vue';
import PortfolioGrid from './components/PortfolioGrid.vue';
import Footer from './components/Footer.vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-observe').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="bg-black text-white selection:bg-white selection:text-black min-h-screen">
    <Navbar />
    
    <main>
      <!-- SECTION: HOME -->
      <section id="home">
        <Hero />
      </section>

      <!-- SECTION: EXPERIMENT (Services) -->
      <section id="services" class="py-40 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-[#080808] relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>
        
        <div class="max-w-screen-2xl mx-auto relative z-10">
          <div class="flex flex-col md:flex-row justify-between items-baseline mb-24 pb-12 scroll-observe border-b border-white/5">
            <div class="line-reveal">
              <span class="text-[10px] font-black tracking-[0.6em] uppercase text-white/30">01 — RESEARCH DOMAINS</span>
            </div>
            <div class="line-reveal">
              <span class="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">The Physics of Code.</span>
            </div>
          </div>
          
          <div class="mb-32 max-w-4xl scroll-observe">
            <h2 class="text-4xl md:text-7xl font-black tracking-tight mb-8">
              LIFTING THE <br/>CONVENTIONAL.
            </h2>
            <p class="text-2xl md:text-3xl font-light text-white/50 leading-tight">
              우리는 웹의 <span class="text-white font-medium">물리적 한계</span>를 실험합니다. 인천 청라의 R&D 센터에서 개발되는 로컬 안티그라비티 아키텍처는 데이터의 무게를 없애고 사용자 경험을 가볍게 만듭니다.
            </p>
          </div>
          
          <FeatureList />
        </div>
      </section>

      <!-- SECTION: SPECIFICATIONS -->
      <section class="py-40 border-y border-white/5 bg-black">
        <div class="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div v-for="(stat, i) in [
              { l: 'GRAVITY INDEX', v: '0.04g' },
              { l: 'SYNC NODES', v: '128' },
              { l: 'LOCAL BASE', v: 'ICN-CR' },
              { l: 'UI DENSITY', v: 'LIGHT' }
            ]" :key="i" class="scroll-observe">
              <span class="text-[10px] font-black text-white/20 tracking-widest block mb-4 uppercase">{{ stat.l }}</span>
              <div class="text-4xl md:text-6xl font-black tracking-tighter">{{ stat.v }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: PROJECTS (Portfolio) -->
      <section id="portfolio" class="py-40 bg-[#f4f4f4]">
        <div class="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 mb-32 scroll-observe text-black">
          <div class="line-reveal">
            <span class="text-[10px] font-black tracking-[0.5em] uppercase text-black/20">02 — CORE DEPLOYMENTS</span>
          </div>
          <div class="line-reveal mt-4">
            <span class="text-3xl md:text-7xl font-black tracking-tighter uppercase text-black">Active Experiments.</span>
          </div>
        </div>
        
        <div class="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <PortfolioGrid />
        </div>
      </section>

      <!-- SECTION: CONTACT -->
      <section id="contact-top" class="py-60 px-6 bg-white text-black relative overflow-hidden">
        <div class="max-w-screen-2xl mx-auto text-center scroll-observe relative z-10">
          <div class="line-reveal mb-8">
            <span class="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase">JOIN THE <br/>ELEVATION.</span>
          </div>
          <p class="max-w-2xl mx-auto text-xl font-medium text-black/60 mb-16">
            중력이 사라진 곳에서 새로운 가능성을 탐구하세요. 인천 청라 반중력 프로젝트팀은 언제나 새로운 파트너를 환영합니다.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:hello@antigravity.io" class="px-12 py-6 bg-black text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center">
              실험실 문의하기
            </a>
            <button class="px-12 py-6 border-2 border-black text-black font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              프로젝트 제안서
            </button>
          </div>
        </div>
        <!-- Abstract Decoration -->
        <div class="absolute -bottom-20 -left-20 w-80 h-80 border-[1px] border-black/5 rounded-full pointer-events-none"></div>
      </section>
    </main>

    <Footer />
  </div>
</template>
