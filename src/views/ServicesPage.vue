<template>
  <div class="services-wrapper">
    <!-- Hero Section -->
    <section class="hero-section section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-20 right-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            제공하는 <span class="text-accent-400">서비스</span>
          </h1>
          <p class="text-xl md:text-2xl text-neutral-300 mb-8 animate-slide-up delay-300">
            성능과 사용자 중심 디자인에 중점을 두어 고품질 디지털 경험을 만들어냅니다
          </p>
          <div class="w-24 h-1 bg-accent-400 mx-auto rounded-full animate-slide-up delay-500"></div>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="services-section section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="services-grid">
          <div class="service-card group" v-for="service in services" :key="service.id" ref="serviceItems">
            <div class="service-icon-wrapper">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
            <div class="service-hover-overlay">
              <div class="service-hover-content">
                <i :class="service.icon"></i>
                <span>자세히 보기</span>
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
  data() {
    return {
      services: [
        { 
          id: 1, 
          icon: 'fas fa-code', 
          title: 'Frontend Development', 
          description: 'Vue.js, React와 같은 현대적인 프레임워크를 활용하여 아름답고 반응성이 뛰어나며 고성능의 사용자 인터페이스를 구축합니다.' 
        },
        { 
          id: 2, 
          icon: 'fas fa-pencil-ruler', 
          title: 'UI/UX Design', 
          description: '와이어프레임, 프로토타이핑, 사용자 중심 디자인 원칙을 통해 직관적이고 매력적인 사용자 경험을 창출합니다.' 
        },
        { 
          id: 3, 
          icon: 'fas fa-tachometer-alt', 
          title: 'Web Performance', 
          description: '원활한 사용자 경험을 위해 웹사이트 속도와 효율성을 최적화하여 더 높은 참여율과 전환율로 이끌어냅니다.' 
        },
        { 
          id: 4, 
          icon: 'fas fa-cogs', 
          title: 'API Integration', 
          description: '타사 서비스, 결제 게이트웨이 및 기타 API와 웹 애플리케이션을 연결하여 기능을 확장합니다.' 
        },
      ],
    };
  },
  mounted() {
    // 페이지 로드 후 약간의 지연을 두고 애니메이션 실행
    setTimeout(() => {
      this.animateServices();
    }, 100);
  },
  methods: {
    animateServices() {
      this.$nextTick(() => {
        if (!this.$refs.serviceItems) return;
        gsap.to(this.$refs.serviceItems, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        });
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

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Service Card */
.service-card {
  @apply relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-200;
  @apply transform transition-all duration-300 hover:scale-105 hover:shadow-2xl;
  @apply overflow-hidden cursor-pointer opacity-0;
}

.service-icon-wrapper {
  @apply flex justify-center mb-6;
}

.service-icon {
  @apply w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center;
  @apply text-accent-600 text-3xl transition-all duration-300 group-hover:scale-110;
}

.service-content {
  @apply text-center;
}

.service-title {
  @apply text-xl font-bold text-neutral-900 mb-4 transition-colors duration-300;
  @apply group-hover:text-accent-600;
}

.service-description {
  @apply text-neutral-600 leading-relaxed;
}

/* Hover Overlay */
.service-hover-overlay {
  @apply absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600;
  @apply opacity-0 group-hover:opacity-100 transition-opacity duration-300;
  @apply flex items-center justify-center;
}

.service-hover-content {
  @apply text-white text-center;
  i {
    @apply text-4xl mb-2 block;
  }
  span {
    @apply font-medium;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section h1 {
    @apply text-3xl;
  }

  .hero-section p {
    @apply text-lg;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    @apply p-6;
  }

  .service-title {
    @apply text-lg;
  }
}

@media (max-width: 640px) {
  .service-card {
    @apply p-5;
  }

  .service-icon {
    @apply w-14 h-14 text-2xl;
  }
}
</style>