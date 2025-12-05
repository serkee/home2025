<template>
  <div class="contact-wrapper">
    <!-- Hero Section -->
    <section class="hero-section section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-20 right-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            연락<span class="text-accent-400">하기</span>
          </h1>
          <p class="text-xl md:text-2xl text-neutral-300 mb-8 animate-slide-up delay-300">
            프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요
          </p>
          <div class="w-24 h-1 bg-accent-400 mx-auto rounded-full animate-slide-up delay-500"></div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="contact-grid">
            <!-- Email Card -->
            <div class="contact-card group">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-content">
                <h3 class="contact-title">Email</h3>
                <p class="contact-description">프로젝트 문의 및 협업 제안</p>
                <a href="mailto:serkee@kakao.com" class="contact-link">
                  serkee@naver.com
                </a>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="contact-card group">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-content">
                <h3 class="contact-title">Phone</h3>
                <p class="contact-description">빠른 상담 및 문의</p>
                <a href="tel:+821035636294" class="contact-link">
                  +82 10-3563-6294
                </a>
              </div>
            </div>

            <!-- Social Links Card -->
            <div class="contact-card group">
              <div class="contact-icon">
                <i class="fas fa-globe"></i>
              </div>
              <div class="contact-content">
                <h3 class="contact-title">Online</h3>
                <p class="contact-description">포트폴리오 및 프로젝트 보기</p>
                <div class="social-links">
                  <a href="#" class="social-link" title="GitHub">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#" class="social-link" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#" class="social-link" title="Portfolio">
                    <i class="fas fa-briefcase"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="additional-info">
            <div class="info-card">
              <h3 class="info-title">Available for</h3>
              <ul class="info-list">
                <li>프론트엔드 개발 프로젝트</li>
                <li>UI/UX 디자인 컨설팅</li>
                <li>웹 퍼블리싱 작업</li>
                <li>기술 교육 및 멘토링</li>
              </ul>
            </div>

            <div class="info-card">
              <h3 class="info-title">Response Time</h3>
              <p class="info-text">
                일반 문의: 24시간 이내<br>
                긴급 프로젝트: 2-4시간 이내
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // 데이터나 메서드가 필요 없으므로 빈 객체로 유지
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

/* Contact Grid */
.contact-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12;
}

/* Contact Card */
.contact-card {
  @apply bg-white rounded-2xl p-8 shadow-lg border border-neutral-200;
  @apply text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl;
}

.contact-icon {
  @apply w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6;
  @apply text-accent-600 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-200;
}

.contact-content {
  @apply space-y-3;
}

.contact-title {
  @apply text-xl font-bold text-neutral-900;
}

.contact-description {
  @apply text-neutral-600 text-sm leading-relaxed;
}

.contact-link {
  @apply inline-block text-accent-600 font-semibold hover:text-accent-700;
  @apply transition-colors duration-200 underline decoration-2 underline-offset-2;
  @apply hover:decoration-accent-400;
}

/* Social Links */
.social-links {
  @apply flex justify-center gap-4 mt-4;
}

.social-link {
  @apply w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center;
  @apply text-neutral-600 hover:text-accent-600 hover:bg-accent-50;
  @apply transition-all duration-200 transform hover:scale-110;
}

/* Additional Info */
.additional-info {
  @apply grid md:grid-cols-2 gap-6;
}

.info-card {
  @apply bg-white rounded-2xl p-6 shadow-lg border border-neutral-200;
}

.info-title {
  @apply text-lg font-bold text-neutral-900 mb-3;
}

.info-list {
  @apply space-y-2;
}

.info-list li {
  @apply text-neutral-600 flex items-center;
}

.info-list li::before {
  content: '✓';
  @apply text-accent-500 mr-3 font-bold;
}

.info-text {
  @apply text-neutral-600 leading-relaxed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section h1 {
    @apply text-3xl;
  }

  .hero-section p {
    @apply text-lg;
  }

  .contact-grid {
    @apply grid-cols-1 gap-4;
  }

  .contact-card {
    @apply p-6;
  }

  .additional-info {
    @apply grid-cols-1;
  }
}

@media (max-width: 640px) {
  .contact-icon {
    @apply w-14 h-14 text-xl;
  }

  .social-link {
    @apply w-9 h-9;
  }
}
</style>