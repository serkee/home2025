<template>
  <div class="portfolio-wrapper">
    <!-- Hero Section -->
    <section class="hero-section section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-20 left-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            나의 <span class="text-accent-400">포트폴리오</span>
          </h1>
          <p class="text-xl md:text-2xl text-neutral-300 mb-8 animate-slide-up delay-300">
            다양한 프로젝트 경험과 기술 스택을 만나보세요
          </p>
          <div class="w-24 h-1 bg-accent-400 mx-auto rounded-full animate-slide-up delay-500"></div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section section-padding bg-neutral-50">
      <div class="container-custom">
        <!-- Filter Buttons -->
        <div class="filters-container">
          <div class="filters">
            <button
              :class="{ active: currentFilter === 'all' }"
              @click="filterItems('all')"
              class="filter-btn"
            >
              <span>All Projects</span>
              <div class="filter-indicator"></div>
            </button>
            <button
              :class="{ active: currentFilter === 'development' }"
              @click="filterItems('development')"
              class="filter-btn"
            >
              <span>Development</span>
              <div class="filter-indicator"></div>
            </button>
            <button
              :class="{ active: currentFilter === 'publishing' }"
              @click="filterItems('publishing')"
              class="filter-btn"
            >
              <span>Publishing</span>
              <div class="filter-indicator"></div>
            </button>
          </div>
        </div>

        <!-- Portfolio Grid -->
        <div class="portfolio-grid" ref="portfolioGrid">
          <div
            class="portfolio-item"
            v-for="project in filteredProjects"
            :key="project.id"
            :class="[`${project.class}`, `item-${project.id}`]"
          >
            <div class="portfolio-card group" @click.prevent="handleLinkClick(project.link)">
              <div class="portfolio-image">
                <img :src="project.thumbnail" :alt="project.title" />
                <div class="portfolio-overlay">
                  <div class="overlay-content">
                    <i class="fas fa-external-link-alt text-2xl mb-2"></i>
                    <span>View Project</span>
                  </div>
                </div>
              </div>
              <div class="portfolio-content">
                <h3 class="portfolio-title">{{ project.title }}</h3>
                <p class="portfolio-description">{{ project.description }}</p>
                <div class="portfolio-category">
                  <span class="category-badge" :class="project.class">
                    {{ project.class === 'development' ? '개발' : '퍼블리싱' }}
                  </span>
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
/* eslint-disable no-undef */
import { gsap } from "gsap";
import Isotope from "isotope-layout";

export default {
  data() {
    return {
      projects: [
        {
          id: 1001,
          title: "가설재 장터",
          description: "vue, supabase 풀스텍",
          thumbnail: require("@/assets/images/contents/thumb_market.png"),
          link: "",
          class: "development",
        },
        {
          id: 999,
          title: "루트파인딩",
          description: "Vue, 파이어베이스",
          thumbnail: require("@/assets/images/contents/thumb_route.png"),
          link: "https://routefinding.kr/",
          class: "development",
        },{
          id: 998,
          title: "태강가설",
          description: "Vue, 파이어베이스",
          thumbnail: require("@/assets/images/contents/thumb_taekang.png"),
          link: "https://taekang.shop",
          class: "development",
        },{
          id: 1000,
          title: "러닝계산기",
          description: "Vue",
          thumbnail: require("@/assets/images/contents/thumb_run.jpg"),
          link: "https://calcul-f8059.web.app/",
          class: "development",
        },{
          id: 1,
          title: "메리츠 채용",
          description: "웹퍼블리싱",
          thumbnail: require("@/assets/images/contents/thumb_meritz.png"),
          link: "https://recruit.meritzfire.com/new/main.do",
          class: "publishing",
        },
        {
          id: 2,
          title: "에어인천 홈페이지 구축",
          description: "반응형 웹퍼블리싱",
          thumbnail: require("@/assets/images/contents/thumb_inc.png"),
          link: "https://www.air-incheon.com/",
          class: "publishing",
        },
        {
          id: 3,
          title: "삼성화재 다이렉트 착서비스 고도화",
          description: "웹퍼블리싱",
          thumbnail: require("@/assets/images/contents/thumb_chac.png"),
          link: "https://play.google.com/store/apps/details?id=sam.myanycar.samsungFire&hl=ko&gl=US",
          class: "publishing",
        },
        {
          id: 4,
          title: "SK TVIEW",
          description: "웹퍼블리싱, UI스크립트",
          thumbnail: require("@/assets/images/contents/thumb_tview.png"),
          link: "",
          class: "publishing",
        },
        {
          id: 5,
          title: "산업은행 스마트뱅킹 큰글씨",
          description: "웹퍼블리싱",
          thumbnail: require("@/assets/images/contents/thumb_kdbbig.jpg"),
          link: "",
          class: "publishing",
        },
        {
          id: 6,
          title: "SK 브로드밴드 심플 CRM",
          description: "웹퍼블리싱",
          thumbnail: require("@/assets/images/contents/thumb_skcrm.jpg"),
          class: "publishing",
        },
        {
          id: 7,
          title: "SK 브로드밴드 API",
          description: "웹퍼블리싱, 모션",
          thumbnail: require("@/assets/images/contents/thumb_skapi.jpg"),
          class: "publishing",
        },
        {
          id: 8,
          title: "메가인포 반응형",
          description: "웹퍼블리싱, 모션",
          thumbnail: require("@/assets/images/contents/thumb_mega.png"),
          link: "http://mega-info.kr/",
          class: "publishing",
        },
        {
          id: 9,
          title: "EHS기술연구소 반응형",
          description: "웹퍼블리싱, 모션",
          thumbnail: require("@/assets/images/contents/thumb_ehs.jpg"),
          class: "publishing",
        },
        {
          id: 10,
          title: "경기대 이러닝 프론트 개발",
          description: "웹퍼블리싱",
          thumbnail: require("@/assets/images/contents/thumb_car.png"),
          class: "publishing",
        },
        {
          id: 11,
          title: "디지털 증거관리시스템 CMS",
          description: "웹스퀘어",
          thumbnail: require("@/assets/images/contents/thumb_pol.jpg"),
          link: "javascript:alert('보안 및 내부시스템이라 작업물 공개가 안됩니다. ㅜㅜ')",
          class: "publishing",
        },
        {
          id: 12,
          title: "FASOO CMS 시스템 프론트앤드",
          description: "react",
          thumbnail: require("@/assets/images/contents/thumb_fasoo.jpg"),
          class: "publishing",
        },
        {
          id: 13,
          title: "인터렉션 샘플 사이트1",
          description: "none reflash & ajax",
          thumbnail: require("@/assets/images/contents/thumb_type1.jpg"),
          class: "publishing",
        },
        {
          id: 14,
          title: "인터렉션 샘플 사이트2",
          description: "fullpage & Parallax",
          thumbnail: require("@/assets/images/contents/thumb_type2.jpg"),
          class: "publishing",
        },
        {
          id: 15,
          title: "한국예탁결제원 전자증권 CMS",
          description: "웹스퀘어",
          thumbnail: require("@/assets/images/contents/thumb_elec.jpg"),
          link: "javascript:alert('보안 및 내부시스템이라 작업물 공개가 안됩니다. ㅜㅜ')",
          class: "publishing",
        },
        {
          id: 16,
          title: "금호건설 전사 CMS",
          description: "웹스퀘어",
          thumbnail: require("@/assets/images/contents/thumb_gumho.jpg"),
          link: "javascript:alert('보안 및 내부시스템이라 작업물 공개가 안됩니다. ㅜㅜ')",
          class: "publishing",
        },
        {
          id: 17,
          title: "SK C&C 기업블로그",
          description: "티스토리 반응형 퍼블리싱 & 디자인",
          thumbnail: require("@/assets/images/contents/thumb_skcc.jpg"),
          link: "http://skccblog.tistory.com",
          class: "publishing",
        },
        {
          id: 18,
          title: "KB매직카다이렉트",
          description: "UI스크립트, 퍼블리싱 5개월",
          thumbnail: require("@/assets/images/contents/thumb_kbmg.jpg"),
          link: "http://www.kbmagiccardirect.co.kr",
          class: "publishing",
        },
        {
          id: 19,
          title: "탱그램 스마트로프",
          description: "반응형코딩",
          thumbnail: require("@/assets/images/contents/thumb_tangram1.jpg"),
          class: "publishing",
        },
        {
          id: 20,
          title: "탱그램 홈페이지",
          description: "반응형코딩",
          thumbnail: require("@/assets/images/contents/thumb_tangram.jpg"),
          class: "publishing",
        },
        {
          id: 21,
          title: "시공미디어 교육컨텐츠",
          description: "html5, 모바일&pc 표준화코딩",
          thumbnail: require("@/assets/images/contents/thumb_sigong.jpg"),
          class: "publishing",
        },
        {
          id: 22,
          title: "MP SYSTEM",
          description: "반응형코딩",
          thumbnail: require("@/assets/images/contents/thumb_mp.jpg"),
          class: "publishing",
        },
        {
          id: 23,
          title: "강원진로교육원",
          description: "반응형/접근성/표준화 코딩",
          thumbnail: require("@/assets/images/contents/thumb_jinro.jpg"),
          link: "http://jinro.gwe.go.kr/",
          class: "publishing",
        },
        {
          id: 24,
          title: "시티면세면",
          description: "표준화 코딩",
          thumbnail: require("@/assets/images/contents/thumb_city.jpg"),
          link: "http://www.citydfs.com/page/main.php",
          class: "publishing",
        },
        {
          id: 25,
          title: "포스코건설 현장관리 하이브리드앱",
          description: "모바일코딩,jquery",
          thumbnail: require("@/assets/images/contents/thumb_posco.jpg"),
          class: "publishing",
        },
        {
          id: 26,
          title: "강원도 원격건강관리 시스템",
          description: "디자인 시안",
          thumbnail: require("@/assets/images/contents/thumb_remote.jpg"),
          class: "publishing",
        },
        {
          id: 27,
          title: "배스넷",
          description: "xml, ajax, , php폼메일, 그누보드 사용",
          thumbnail: require("@/assets/images/contents/thumb_bas.jpg"),
          link: "http://bassnett.net/",
          class: "publishing",
        },
        {
          id: 28,
          title: "끼니앱 시안",
          description: "음식주문앱 시안 디자인 입니다.",
          thumbnail: require("@/assets/images/contents/thumb_gginii.jpg"),
          class: "publishing",
        },
        {
          id: 29,
          title: "지아레티 브랜드 사이트",
          description: "시안작업 B안",
          thumbnail: require("@/assets/images/contents/thumb_giarettiB.jpg"),
          class: "publishing",
        },
        {
          id: 30,
          title: "지아레티 브랜드 사이트",
          description: "시안작업 A안",
          thumbnail: require("@/assets/images/contents/thumb_giarettiA.jpg"),
          class: "publishing",
        },
        {
          id: 31,
          title: "학교안전관련 이러닝",
          description: "UI디자인, 프로토/차시 개발, 액션스크립트 3.0",
          thumbnail: require("@/assets/images/contents/thumb_safe.jpg"),
          class: "publishing",
        },
        {
          id: 32,
          title: "잡담 커뮤니티",
          description: "디자인, 표준코딩",
          thumbnail: require("@/assets/images/contents/thumb_job.jpg"),
          class: "publishing",
        },
        {
          id: 33,
          title: "넷아스 홈페이지",
          description: "디자인, 표준화 코딩, 그누보드",
          thumbnail: require("@/assets/images/contents/thumb_nettars.jpg"),
          class: "publishing",
        },
        {
          id: 34,
          title: "모조 에스핀",
          description: "반응형 사이트 표준화 코딩, 갤러리 Ajax&xml 연동",
          thumbnail: require("@/assets/images/contents/thumb_mojo.jpg"),
          class: "publishing",
        },
        {
          id: 35,
          title: "타입이스트",
          description: "표준화코딩, 제이쿼리효과, 갤러리 Ajax&xml 연동",
          thumbnail: require("@/assets/images/contents/thumb_type.jpg"),
          class: "publishing",
        },
        {
          id: 36,
          title: "듀엘",
          description: "제이쿼리효과, 갤러리 Ajax&xml 연동",
          thumbnail: require("@/assets/images/contents/thumb_dewl.jpg"),
          class: "publishing",
        },
        {
          id: 37,
          title: "퀴즈퀴즈 우드맨",
          description: "액션스크립트 3.0 작업 진행했습니다.",
          thumbnail: require("@/assets/images/contents/thumb_wood.jpg"),
          class: "publishing",
        },
        {
          id: 38,
          title: "유아용 게임",
          description:
            "5단계 난이도로 구성된 유아용 게임입니다.액션스크립트 3.0 작업 진행했습니다.",
          thumbnail: require("@/assets/images/contents/thumb_game.jpg"),
          link: "game/index.html",
          class: "publishing",
        },
        {
          id: 39,
          title: "위더스평생교육원",
          description:
            "이러닝 프로토타입 개발. xml, ajax, 실버스트림 기술을 이용해 차시개발 자동화시스템을 구축하여 공수를 획기적으로 줄였습니다.",
          thumbnail: require("@/assets/images/contents/thumb_we.jpg"),
          link: "http://exam.edu2080.co.kr/LMS_sample/1316/01-1/01.php",
          class: "publishing",
        },
        {
          id: 40,
          title: "크리미의원 신사점 모바일",
          description: "디자인, 코딩, 프로그램전체 작업진행했습니다.",
          thumbnail: require("@/assets/images/contents/thumb_yourcreamym.jpg"),
          link: "http://m.yourcreamy.com",
          class: "publishing",
        },
        {
          id: 41,
          title: "이안소프트 시안",
          description:
            "시안작업 완료하고 후이즈몰을 이용하여 구축진행중입니다.",
          thumbnail: require("@/assets/images/contents/thumb_iaan.jpg"),
          link: "iaan/main.html",
          class: "publishing",
        },
        {
          id: 47,
          title: "ATO-DAN/HXTRU",
          description: "카페24 스마트 쇼핑몰 솔루션을 이용한 표준코딩입니다.",
          thumbnail: require("@/assets/images/contents/thumb_nucleo.jpg"),
          link: "http://nucleo.co.kr/",
          class: "publishing",
        },
        {
          id: 51,
          title: "드림아이에듀",
          description: "제이쿼리 부분 작업 진행했습니다.",
          thumbnail: require("@/assets/images/contents/thumb_dreami.jpg"),
          link: "http://www.dreamiedu.com/",
          class: "publishing",
        },
        {
          id: 52,
          title: "우리경영아카데미 표준화 작업",
          description:
            "기존 사이트에서 크로스브라우징 처리 및 플래시부분을 제이쿼리교체하는 작업을 진행했습니다.",
          thumbnail: require("@/assets/images/contents/thumb_aifa.jpg"),
          link: "http://uricpa.com/",
          class: "publishing",
        },
        {
          id: 59,
          title: "맥도날드 알바 채용사이트",
          description: "디자인, 코딩, 플래시 작업진행했습니다.",
          thumbnail: require("@/assets/images/contents/thumb_mc.jpg"),
          link: "http://www.mcalba.co.kr/",
          class: "publishing",
        },
      ],
      iso: null, // Isotope 인스턴스를 저장
      currentFilter: 'all', // 현재 선택된 필터를 추적
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => project.class === this.currentFilter);
    },
  },
  methods: {
    handleLinkClick(link) {
      if (!link) {
        alert("준비중입니다.");
      } else if (link.startsWith("javascript:")) {
        eval(link.replace("javascript:", ""));
      } else {
        window.open(link, "_blank");
      }
    },
    animatePortfolioItems() {
      // 기본적으로 보이도록 설정 - 애니메이션 효과는 최소화
      const items = this.$refs.portfolioGrid?.querySelectorAll('.portfolio-item');
      if (!items) return;

      // 부드러운 등장 효과 (선택사항)
      gsap.fromTo(items,
        {
          opacity: 0.7,
          y: 10
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        }
      );
    },

    filterItems(filter) {
      if (!this.iso) {
        console.error("Isotope 인스턴스가 초기화되지 않았습니다.");
        return;
      }
      this.currentFilter = filter; // 현재 필터 상태 업데이트
      let filterValue = "*";
      if (filter === "development") filterValue = ".development";
      else if (filter === "publishing") filterValue = ".publishing";
      console.log(`Filtering with: ${filterValue}`);
      this.iso.arrange({ filter: filterValue });

      // 필터링 후 애니메이션
      this.$nextTick(() => {
        setTimeout(() => {
          this.animatePortfolioItems();
        }, 50);
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      const grid = this.$refs.portfolioGrid;

      // Isotope 초기화 - 최적화된 Masonry 설정
      this.iso = new Isotope(grid, {
        itemSelector: ".portfolio-item",
        masonry: {
          columnWidth: '.portfolio-item',
          gutter: 20,
          fitWidth: true
        },
        percentPosition: true
      });

      // 이미지 로드가 완료된 후 레이아웃 갱신
      imagesLoaded(grid, () => {
        this.iso.layout();
      });

      // 초기 필터 설정
      this.filterItems("all");

      // 애니메이션 실행
      setTimeout(() => {
        this.animatePortfolioItems();
      }, 100);
    });
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

/* Filters Container */
.filters-container {
  @apply text-center mb-12;
}

.filters {
  @apply inline-flex bg-white rounded-2xl p-2 shadow-lg border border-neutral-200;
}

.filter-btn {
  @apply relative px-6 py-3 rounded-xl font-medium transition-all duration-300;
  @apply text-neutral-600 hover:text-neutral-900 cursor-pointer;
  @apply flex flex-col items-center gap-1 min-w-[120px];
}

.filter-btn.active {
  @apply text-accent-600 bg-accent-50;
}

.filter-indicator {
  @apply w-0 h-0.5 bg-accent-500 rounded-full transition-all duration-300;
  transform: scaleX(0);
}

.filter-btn.active .filter-indicator {
  @apply w-full;
  transform: scaleX(1);
}

/* Portfolio Grid */
.portfolio-grid {
  max-width: 1400px;
  margin: 0 auto;
}

/* Portfolio Item */
.portfolio-item {
  width: 280px;
  margin-bottom: 20px;
}

/* Responsive Layout */
@media (max-width: 640px) {
  .portfolio-item {
    width: 250px;
  }
}

@media (min-width: 1024px) {
  .portfolio-item {
    width: 300px;
  }
}

.portfolio-card {
  @apply bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden;
  @apply transform transition-all duration-300 hover:scale-105 hover:shadow-2xl;
  @apply cursor-pointer;
}

.portfolio-image {
  @apply relative overflow-hidden;
}

.portfolio-image img {
  @apply w-full object-cover transition-transform duration-500;
  @apply group-hover:scale-110;
}

.portfolio-overlay {
  @apply absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100;
  @apply transition-opacity duration-300 flex items-center justify-center;
}

.overlay-content {
  @apply text-white text-center;
  i {
    @apply text-2xl mb-2 block transform transition-transform duration-300;
    @apply group-hover:scale-110;
  }
  span {
    @apply font-medium;
  }
}

.portfolio-content {
  @apply p-6;
}

.portfolio-title {
  @apply text-lg font-bold text-neutral-900 mb-2;
  @apply line-clamp-2 leading-tight;
}

.portfolio-description {
  @apply text-sm text-neutral-600 mb-3 leading-relaxed;
  @apply line-clamp-2;
}

.portfolio-category {
  @apply flex justify-end;
}

.category-badge {
  @apply px-3 py-1 rounded-full text-xs font-medium;
  @apply bg-neutral-100 text-neutral-700;
}

.category-badge.development {
  @apply bg-accent-100 text-accent-700;
}

.category-badge.publishing {
  @apply bg-primary-100 text-primary-700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section h1 {
    @apply text-3xl;
  }

  .hero-section p {
    @apply text-lg;
  }

  .portfolio-grid {
    @apply columns-1 gap-4;
  }

  .portfolio-card {
    @apply mx-2;
  }

  .portfolio-content {
    @apply p-4;
  }

  .filters {
    @apply flex-col gap-1 p-1;
  }

  .filter-btn {
    @apply px-4 py-2 min-w-[100px];
  }
}

@media (max-width: 640px) {
  .portfolio-title {
    @apply text-base;
  }
}
</style>