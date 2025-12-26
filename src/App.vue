
<script setup>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import FeatureList from './components/FeatureList.vue';
import PortfolioGrid from './components/PortfolioGrid.vue';
import Footer from './components/Footer.vue';
import CustomCursor from './components/CustomCursor.vue';

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
    <CustomCursor />
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
              <span class="text-[10px] font-black tracking-[0.6em] uppercase text-white/30">01 — CORE SKILLS</span>
            </div>
            <div class="line-reveal">
              <span class="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">Crafting Digital Experiences.</span>
            </div>
          </div>
          
          <div class="mb-32 max-w-4xl scroll-observe">
            <h2 class="text-4xl md:text-7xl font-black tracking-tight mb-8">
              BUILDING THE <br/>FUTURE WEB.
            </h2>
            <p class="text-2xl md:text-3xl font-light text-white/50 leading-tight">
              고품질의 <span class="text-white font-medium">웹 표준과 접근성</span>을 기반으로, 사용자 친화적인 인터페이스와 최적화된 퍼포먼스를 제공합니다.
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
            <span class="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase">LET'S CREATE <br/>TOGETHER.</span>
          </div>
          <p class="max-w-2xl mx-auto text-xl font-medium text-black/60 mb-16">
            함께 일할 기회를 찾고 계신가요? 새로운 프로젝트에 대한 문의나 협업 제안을 언제든지 환영합니다.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:serkee@naver.com" class="px-12 py-6 bg-black text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center">
              프로젝트 문의하기
            </a>
            <button class="px-12 py-6 border-2 border-black text-black font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              이력서 보기
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