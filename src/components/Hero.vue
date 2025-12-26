<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized: false };
    const i = document.createElement("script");
    i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
    i.onload = function() {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };
    (document.head || document.body).appendChild(i);
  }
});
</script>

<template>
  <section class="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
    <!-- Unicorn Studio Background (Gravity Distortion Effect) -->
    <div class="absolute inset-0 z-0 opacity-40 grayscale pointer-events-none">
      <div 
        data-us-project="QughP32lmrSikBjDdsnU" 
        class="w-full h-full"
        style="width: 100%; height: 100vh"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>

    <div class="relative z-10 w-full max-w-screen-2xl mx-auto scroll-observe revealed">
      <div class="line-reveal mb-6">
        <span class="text-[10px] font-black tracking-[0.6em] text-white/40 uppercase">WEB PUBLISHER & FRONTEND DEVELOPER</span>
      </div>
      
      <h1 class="text-[14vw] md:text-[11vw] font-black leading-[0.8] tracking-[-0.07em] uppercase m-0 animate-float">
        CREATIVE <br />
        <span class="text-transparent" style="-webkit-text-stroke: 1px white">WEB</span> <br />
        PUBLISHER.
      </h1>

      <div class="mt-20 flex flex-col md:flex-row items-end justify-between gap-12">
        <div class="max-w-md space-y-6">
          <p class="text-lg text-white/60 font-light leading-relaxed">
            사용자 경험을 최우선으로 생각하는 웹 퍼블리셔입니다. 반응형 웹, 인터랙티브 UI, 그리고 최신 웹 기술을 활용하여 창의적이고 완성도 높은 프로젝트를 구현합니다.
          </p>
          <div class="flex items-center gap-4 text-[10px] font-black tracking-widest text-emerald-500 uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Projects
          </div>
        </div>
        <div class="flex flex-col items-end gap-2">
          <div class="w-24 h-[1px] bg-white/20"></div>
          <span class="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30 italic">Building Web Experiences since 2010</span>
        </div>
      </div>
    </div>

    <!-- Floating UI Decoration -->
    <div class="absolute top-1/4 right-10 w-32 h-32 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-20 w-16 h-16 border border-white/10 rotate-45 animate-pulse pointer-events-none"></div>
  </section>
</template>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
