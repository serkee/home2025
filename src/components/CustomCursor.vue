
<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const cursorOuter = ref(null);
const cursorInner = ref(null);

onMounted(() => {
  const outer = cursorOuter.value;
  const inner = cursorInner.value;

  // Initial position off-screen
  gsap.set([outer, inner], { xPercent: -50, yPercent: -50 });

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    // Fast movement for the inner dot
    gsap.to(inner, {
      x: clientX,
      y: clientY,
      duration: 0.1,
      ease: 'power2.out'
    });

    // Lagged movement for the outer ring for an "organic" feel
    gsap.to(outer, {
      x: clientX,
      y: clientY,
      duration: 0.5,
      ease: 'power3.out'
    });
  });

  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    gsap.to([outer, inner], { opacity: 0, duration: 0.3 });
  });

  document.addEventListener('mouseenter', () => {
    gsap.to([outer, inner], { opacity: 1, duration: 0.3 });
  });

  // Scale effect on links and buttons
  const handleHover = (isHovering) => {
    gsap.to(outer, {
      scale: isHovering ? 2 : 1,
      backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
      duration: 0.3
    });
    gsap.to(inner, {
      scale: isHovering ? 0.5 : 1,
      duration: 0.3
    });
  };

  const interactiveElements = document.querySelectorAll('a, button, .project-card, .filter-btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => handleHover(true));
    el.addEventListener('mouseleave', () => handleHover(false));
  });
});
</script>

<template>
  <div class="cursor-container fixed inset-0 pointer-events-none z-[9999] hidden lg:block mix-blend-difference">
    <!-- Outer Ring -->
    <div 
      ref="cursorOuter" 
      class="absolute w-10 h-10 border border-white rounded-full"
    ></div>
    <!-- Inner Dot -->
    <div 
      ref="cursorInner" 
      class="absolute w-1.5 h-1.5 bg-white rounded-full"
    ></div>
  </div>
</template>

<style>
/* Global style to hide default cursor when follower is active */
@media (min-width: 1024px) {
  html, body, a, button, .project-card, .filter-btn {
    cursor: none !important;
  }
}
</style>

<style scoped>
.cursor-container {
  pointer-events: none;
}
</style>
