
<script setup>
import { ref, computed, watch } from 'vue';

const projects = [
  { id: 999, title: "루트파인딩", category: "Vue, 파이어베이스", description: "반중력 경로 탐색 엔진", imageUrl: require("@/assets/images/contents/thumb_route.png"), link: "https://routefinding.kr/", type: "development" },
  { id: 998, title: "태강가설", category: "Vue, 파이어베이스", description: "건설 자재 관리 시스템", imageUrl: require("@/assets/images/contents/thumb_taekang.png"), link: "https://taekang.shop", type: "development" },
  { id: 1000, title: "러닝계산기", category: "Vue", description: "페이스 및 칼로리 연산 도구", imageUrl: require("@/assets/images/contents/thumb_run.jpg"), link: "https://calcul-f8059.web.app/", type: "development" },
  { id: 1, title: "메리츠 채용", category: "웹퍼블리싱", description: "인재 영입 플랫폼 구축", imageUrl: require("@/assets/images/contents/thumb_meritz.png"), link: "https://recruit.meritzfire.com/new/main.do", type: "publishing" },
  { id: 2, title: "에어인천 홈페이지 구축", category: "반응형 웹퍼블리싱", description: "항공 화물 서비스 포털", imageUrl: require("@/assets/images/contents/thumb_inc.png"), link: "https://www.air-incheon.com/", type: "publishing" },
  { id: 3, title: "삼성화재 다이렉트 착서비스 고도화", category: "웹퍼블리싱", description: "보험 서비스 UI 최적화", imageUrl: require("@/assets/images/contents/thumb_chac.png"), link: "https://play.google.com/store/apps/details?id=sam.myanycar.samsungFire&hl=ko&gl=US", type: "publishing" },
  { id: 4, title: "SK TVIEW", category: "웹퍼블리싱, UI스크립트", description: "영상 보안 솔루션 인터페이스", imageUrl: require("@/assets/images/contents/thumb_tview.png"), link: "", type: "publishing" },
  { id: 5, title: "산업은행 스마트뱅킹 큰글씨", category: "웹퍼블리싱", description: "금융 접근성 고도화", imageUrl: require("@/assets/images/contents/thumb_kdbbig.jpg"), link: "", type: "publishing" },
  { id: 6, title: "SK 브로드밴드 심플 CRM", category: "웹퍼블리싱", description: "고객 관리 시스템 UI", imageUrl: require("@/assets/images/contents/thumb_skcrm.jpg"), link: "", type: "publishing" },
  { id: 7, title: "SK 브로드밴드 API", category: "웹퍼블리싱, 모션", description: "개발자 포털 인터랙션", imageUrl: require("@/assets/images/contents/thumb_skapi.jpg"), link: "", type: "publishing" },
  { id: 8, title: "메가인포 반응형", category: "웹퍼블리싱, 모션", description: "기업 브랜딩 사이트", imageUrl: require("@/assets/images/contents/thumb_mega.png"), link: "http://mega-info.kr/", type: "publishing" },
  { id: 9, title: "EHS기술연구소 반응형", category: "웹퍼블리싱, 모션", description: "환경 안전 연구소 포털", imageUrl: require("@/assets/images/contents/thumb_ehs.jpg"), link: "", type: "publishing" },
  { id: 10, title: "경기대 이러닝 프론트 개발", category: "웹퍼블리싱", description: "교육 컨텐츠 UI 개발", imageUrl: require("@/assets/images/contents/thumb_car.png"), link: "", type: "publishing" },
  { id: 11, title: "디지털 증거관리시스템 CMS", category: "웹스퀘어", description: "증거 관리 보안 시스템", imageUrl: require("@/assets/images/contents/thumb_pol.jpg"), link: "", type: "publishing" },
  { id: 12, title: "FASOO CMS 시스템 프론트앤드", category: "react", description: "문서 보안 관리 시스템", imageUrl: require("@/assets/images/contents/thumb_fasoo.jpg"), link: "", type: "publishing" },
  { id: 13, title: "인터렉션 샘플 사이트1", category: "none reflash & ajax", description: "동적 데이터 인터랙션 실험", imageUrl: require("@/assets/images/contents/thumb_type1.jpg"), link: "", type: "publishing" },
  { id: 14, title: "인터렉션 샘플 사이트2", category: "fullpage & Parallax", description: "현대적 스크롤 모션 실험", imageUrl: require("@/assets/images/contents/thumb_type2.jpg"), link: "", type: "publishing" },
  { id: 15, title: "한국예탁결제원 전자증권 CMS", category: "웹스퀘어", description: "금융 자산 관리 시스템", imageUrl: require("@/assets/images/contents/thumb_elec.jpg"), link: "", type: "publishing" },
  { id: 16, title: "금호건설 전사 CMS", category: "웹스퀘어", description: "기업 자원 관리 시스템", imageUrl: require("@/assets/images/contents/thumb_gumho.jpg"), link: "", type: "publishing" },
  { id: 17, title: "SK C&C 기업블로그", category: "티스토리 반응형 퍼블리싱 & 디자인", description: "기업 기술 블로그 구축", imageUrl: require("@/assets/images/contents/thumb_skcc.jpg"), link: "http://skccblog.tistory.com", type: "publishing" },
  { id: 18, title: "KB매직카다이렉트", category: "UI스크립트, 퍼블리싱", description: "자동차 보험 다이렉트 구축", imageUrl: require("@/assets/images/contents/thumb_kbmg.jpg"), link: "http://www.kbmagiccardirect.co.kr", type: "publishing" },
  { id: 19, title: "탱그램 스마트로프", category: "반응형코딩", description: "IoT 헬스케어 제품 포털", imageUrl: require("@/assets/images/contents/thumb_tangram1.jpg"), link: "", type: "publishing" },
  { id: 20, title: "탱그램 홈페이지", category: "반응형코딩", description: "디자인 에이전시 웹사이트", imageUrl: require("@/assets/images/contents/thumb_tangram.jpg"), link: "", type: "publishing" },
  { id: 21, title: "시공미디어 교육컨텐츠", category: "html5, 모바일&pc 표준화", description: "디지털 교육 자산 개발", imageUrl: require("@/assets/images/contents/thumb_sigong.jpg"), link: "", type: "publishing" },
  { id: 22, title: "MP SYSTEM", category: "반응형코딩", description: "생산 관리 자동화 시스템", imageUrl: require("@/assets/images/contents/thumb_mp.jpg"), link: "", type: "publishing" },
  { id: 23, title: "강원진로교육원", category: "반응형/접근성/표준화", description: "교육 기관 공식 포털", imageUrl: require("@/assets/images/contents/thumb_jinro.jpg"), link: "http://jinro.gwe.go.kr/", type: "publishing" },
  { id: 24, title: "시티면세면", category: "표준화 코딩", description: "면세점 커머스 플랫폼", imageUrl: require("@/assets/images/contents/thumb_city.jpg"), link: "http://www.citydfs.com/page/main.php", type: "publishing" },
  { id: 25, title: "포스코건설 현장관리 하이브리드앱", category: "모바일코딩, jquery", description: "현장 안전 관리 시스템", imageUrl: require("@/assets/images/contents/thumb_posco.jpg"), link: "", type: "publishing" },
  { id: 26, title: "강원도 원격건강관리 시스템", category: "디자인 시안", description: "디지털 헬스케어 프로토타입", imageUrl: require("@/assets/images/contents/thumb_remote.jpg"), link: "", type: "publishing" },
  { id: 27, title: "배스넷", category: "xml, ajax, php, 그누보드", description: "커뮤니티 및 정보 포털", imageUrl: require("@/assets/images/contents/thumb_bas.jpg"), link: "http://bassnett.net/", type: "publishing" },
  { id: 31, title: "학교안전관련 이러닝", category: "UI디자인, 액션스크립트 3.0", description: "교육 시뮬레이션 인터페이스", imageUrl: require("@/assets/images/contents/thumb_safe.jpg"), link: "", type: "publishing" },
  { id: 32, title: "잡담 커뮤니티", category: "디자인, 표준코딩", description: "참여형 소통 플랫폼", imageUrl: require("@/assets/images/contents/thumb_job.jpg"), link: "", type: "publishing" },
  { id: 40, title: "크리미의원 신사점 모바일", category: "디자인, 코딩, 전체개발", description: "메디컬 뷰티 서비스 포털", imageUrl: require("@/assets/images/contents/thumb_yourcreamym.jpg"), link: "http://m.yourcreamy.com", type: "publishing" },
  { id: 47, title: "ATO-DAN/HXTRU", category: "카페24 쇼핑몰 솔루션", description: "패션 브랜딩 커머스 구축", imageUrl: require("@/assets/images/contents/thumb_nucleo.jpg"), link: "http://nucleo.co.kr/", type: "publishing" },
  { id: 59, title: "맥도날드 알바 채용사이트", category: "디자인, 코딩, 플래시", description: "대규모 인재 영입 시스템", imageUrl: require("@/assets/images/contents/thumb_mc.jpg"), link: "http://www.mcalba.co.kr/", type: "publishing" }
];

const currentFilter = ref('all');
const visibleCount = ref(4);

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return projects;
  return projects.filter(p => p.type === currentFilter.value);
});

const paginatedProjects = computed(() => {
  return filteredProjects.value.slice(0, visibleCount.value);
});

const hasMore = computed(() => {
  return visibleCount.value < filteredProjects.value.length;
});

const loadMore = () => {
  visibleCount.value += 4;
};

const setFilter = (filter) => {
  currentFilter.value = filter;
  visibleCount.value = 4; // Reset count when filter changes
};

// Also reset count if filtering logic changes
watch(currentFilter, () => {
  visibleCount.value = 4;
});
</script>

<template>
  <div class="mb-16 flex flex-wrap gap-4">
    <button 
      v-for="f in ['all', 'development', 'publishing']" 
      :key="f"
      @click="setFilter(f)"
      :class="[
        'px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300',
        currentFilter === f ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
      ]"
    >
      {{ f }}
    </button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[600px]">
    <a 
      v-for="(project, index) in paginatedProjects"
      :key="project.id" 
      :href="project.link || '#'"
      :target="project.link ? '_blank' : '_self'"
      class="project-card group bg-white rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_100px_rgba(0,0,0,0.1)] transition-all duration-700 scroll-observe revealed"
      :style="{ animationDelay: (index % 4) * 0.1 + 's' }"
    >
      <div class="relative aspect-[16/10] overflow-hidden bg-black">
        <img 
          :src="project.imageUrl" 
          :alt="project.title"
          class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
        />
        
        <div class="absolute top-6 left-6 z-10">
           <span class="px-4 py-1.5 bg-black/50 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-black tracking-widest uppercase">
             {{ project.type }}
           </span>
        </div>

        <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <h4 class="text-white text-3xl font-black mb-4 tracking-tighter uppercase">{{ project.title }}</h4>
           <p class="text-white/60 text-xs max-w-xs">{{ project.description }}</p>
        </div>
      </div>
      
      <div class="p-8 text-black flex justify-between items-center">
        <div>
          <h3 class="text-xl font-black mb-1 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {{ project.category }}
          </p>
        </div>
        <div class="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black transition-all duration-500 group-hover:rotate-45">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" class="group-hover:stroke-white stroke-black transition-colors">
            <path d="M1 13L13 1M13 1H4M13 1V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  </div>

  <div v-if="hasMore" class="mt-24 flex justify-center">
    <button 
      @click="loadMore"
      class="group relative px-12 py-6 bg-black text-white font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95"
    >
      <span class="relative z-10">LOAD MORE PROJECTS</span>
      <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      <span class="absolute inset-0 flex items-center justify-center text-black font-black text-xs uppercase tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
        ELEVATE MORE
      </span>
    </button>
  </div>
</template>

<style scoped>
.project-card {
  animation: float-card 8s ease-in-out infinite;
}

@keyframes float-card {
  0%, 100% { transform: translateY(0) rotate(0); }
  33% { transform: translateY(-12px) rotate(0.8deg); }
  66% { transform: translateY(-4px) rotate(-0.4deg); }
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    animation: none;
  }
}

.scroll-observe {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.scroll-observe.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
