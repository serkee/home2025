<template>
  <div class="home-wrapper">
    <!-- Hero Section -->
    <section class="hero-section h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20 parallax-overlay"></div>
      <div class="absolute inset-0 bg-[url('~@/assets/images/contents/thumb_cover.png')] bg-cover bg-center opacity-20 parallax-bg"></div>

      <!-- Animated background elements -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-24 h-24 bg-accent-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div class="container-custom relative z-10 h-full flex items-center justify-center">
        <div class="max-w-4xl text-center">
          <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to My
            <span class="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p ref="heroSubtitle" class="text-xl md:text-2xl text-neutral-300 mb-8 animate-slide-up delay-300">
            17년차 퍼블리셔 강석희입니다. 풀스텍 개발자가 되기 위하여 오늘도 노력하고 있습니다.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <router-link to="/portfolio" class="btn-primary">
              포트폴리오
            </router-link>
            <router-link to="/contact" class="btn-outline">
              연락하기
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="text-content order-2 lg:order-1">
            <h2 ref="aboutTitle" class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 animate-slide-in-left">
              About <span class="text-accent-600">Me</span>
            </h2>
            <p ref="aboutDesc" class="text-lg text-neutral-600 mb-6 leading-relaxed animate-slide-in-left delay-200">
              현대적인 웹 기술에 대한 전문 지식을 갖춘 열정적인 웹 개발자입니다.
              아름답고 기능적이며 사용자 중심의 디지털 경험을 만들어
              실질적인 문제를 해결합니다.
            </p>
            <div class="flex flex-wrap gap-3 animate-slide-in-left delay-400">
              <span class="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                17년차
              </span>
              <span class="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                퍼블리셔
              </span>
              <span class="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                디자인
              </span>
              <span class="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                프론트앤드
              </span>
            </div>
          </div>
          <div class="image-content order-1 lg:order-2">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-accent-400 to-accent-600 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
              <img
                ref="aboutImg"
                src="@/assets/images/contents/home1.png"
                alt="Developer workspace"
                class="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl animate-fade-in"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="image-content">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl opacity-20 blur-lg animate-pulse delay-500"></div>
              <img
                ref="skillsImg"
                src="@/assets/images/contents/home2.png"
                alt="Coding environment"
                class="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl animate-fade-in"
              >
            </div>
          </div>
          <div class="text-content">
            <h2 ref="skillsTitle" class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 animate-slide-in-right">
              My <span class="text-accent-600">Skills</span>
            </h2>
            <p ref="skillsDesc" class="text-lg text-neutral-600 mb-8 leading-relaxed animate-slide-in-right delay-200">
              최신 웹 기술을 활용한 현대적인 웹 애플리케이션 제작을 전문으로 합니다.
              프론트엔드와 백엔드 개발 전반에 걸친 전문성을 바탕으로
              원활한 사용자 경험을 보장합니다.
            </p>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 gap-4 animate-slide-in-right delay-400">
              <div class="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                <div class="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span class="text-accent-600 font-bold text-sm">V</span>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900">Vue.js</h3>
                  <p class="text-sm text-neutral-500">Advanced</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                <div class="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span class="text-accent-600 font-bold text-sm">P</span>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900">퍼블리싱</h3>
                  <p class="text-sm text-neutral-500">Expert</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                <div class="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span class="text-accent-600 font-bold text-sm">D</span>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900">디자인</h3>
                  <p class="text-sm text-neutral-500">Advanced</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                <div class="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span class="text-accent-600 font-bold text-sm">N</span>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900">Node.js</h3>
                  <p class="text-sm text-neutral-500">Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    // 페이지 로드 후 약간의 지연을 두고 애니메이션 시작
    this.$nextTick(() => {
      setTimeout(() => {
        this.initializeAnimations();
        this.initializeParallax();
      }, 100);
    });
  },

  methods: {
    initializeAnimations() {
      // Hero Section Parallax (선택사항)
      gsap.to(".hero-section", {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero Section - 즉시 실행
      gsap.fromTo(this.$refs.heroTitle,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2 }
      );

      gsap.fromTo(this.$refs.heroSubtitle,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
      );

      // About Section - ScrollTrigger 유지하되 초기 표시 보장
      gsap.set([this.$refs.aboutTitle, this.$refs.aboutDesc, this.$refs.aboutImg], {
        opacity: 0,
        x: -100,
        scale: 0.8
      });

      gsap.to(this.$refs.aboutTitle, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: this.$refs.aboutTitle,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(this.$refs.aboutDesc, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: this.$refs.aboutDesc,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(this.$refs.aboutImg, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: this.$refs.aboutImg,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Skills Section - ScrollTrigger 유지하되 초기 표시 보장
      gsap.set([this.$refs.skillsTitle, this.$refs.skillsDesc, this.$refs.skillsImg], {
        opacity: 0,
        x: 100,
        scale: 0.8
      });

      gsap.to(this.$refs.skillsTitle, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: this.$refs.skillsTitle,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(this.$refs.skillsDesc, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: this.$refs.skillsDesc,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(this.$refs.skillsImg, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: this.$refs.skillsImg,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },

    initializeParallax() {
      // Hero 섹션 배경 패럴럭스 효과
      gsap.to('.parallax-bg', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // 배경 오버레이도 살짝 움직이게
      gsap.to('.parallax-overlay', {
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
  },
};
</script>

<style scoped>
/* Animation delays */
.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Custom button styles */
.btn-primary {
  @apply inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl;
  @apply bg-accent-600 text-white hover:bg-accent-700 no-underline;
  @apply transform hover:scale-105 transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2;
  @apply shadow-lg hover:shadow-xl;
}

.btn-outline {
  @apply inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl;
  @apply border-2 border-white/30 bg-transparent text-white hover:bg-white/10 no-underline;
  @apply transform hover:scale-105 transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2;
  @apply backdrop-blur-sm;
}

/* Parallax effects */
.parallax-bg {
  will-change: transform;
}

.parallax-overlay {
  will-change: opacity;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-section h1 {
    @apply text-4xl;
  }

  .btn-primary,
  .btn-outline {
    @apply px-6 py-3 text-sm;
  }
}
</style>