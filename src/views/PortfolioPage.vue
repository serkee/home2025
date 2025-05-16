<template>
  <section class="portfolio-section">
    <div class="container">
      <h1>Portfolio</h1>
      <div class="filters">
        <button :class="{ active: currentFilter === 'all' }" @click="filterItems('all')">All</button>
        <button :class="{ active: currentFilter === 'development' }" @click="filterItems('development')">개발</button>
        <button :class="{ active: currentFilter === 'publishing' }" @click="filterItems('publishing')">퍼블리싱</button>
      </div>
      <div class="portfolio-grid" ref="portfolioGrid">
        <div
          class="portfolio-item"
          v-for="project in projects"
          :key="project.id"
          :class="[`${project.class}`, `item-${project.id}`]"
        >
          <a @click.prevent="handleLinkClick(project.link)" target="_blank">
            <img :src="project.thumbnail" :alt="project.title" />
            <span class="overlay">
              <strong>{{ project.title }}</strong>
              <em>{{ project.description }}</em>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
      projects: [
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
          link: "https://routefinding.kr/",
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
    },
  },
  mounted() {
    this.$nextTick(() => {
      const grid = this.$refs.portfolioGrid;
      this.iso = new Isotope(grid, {
        itemSelector: ".portfolio-item",
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".portfolio-item",
          gutter: 20,
        },
        percentPosition: true,
      });

      // 이미지 로드가 완료된 후 Isotope 레이아웃 갱신
      imagesLoaded(grid).on("progress", () => {
        this.iso.layout();
      });

      // 초기 필터 설정
      this.filterItems("all");
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio-section {
  padding: 3rem 0;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;

    button {
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #fff;
      cursor: pointer;

      &:hover {
        background: #f0f0f0;
      }

      &.active {
        background: #007bff;
        color: white;
        border-color: #007bff;
      }
    }
  }

  .portfolio-grid {
    margin: 0 auto;
    max-width: 1300px;
  }

  .portfolio-item {
    width: 100%;
    margin-bottom: 1.5rem;

    a {
      display: flex;
      min-height: 100px;
      align-items: center;
      text-decoration: none;
      position: relative;
      border: 1px solid #eee;
      border-radius: 10px;
      overflow: hidden;
      padding: 10px;
      cursor: pointer;
      background: #fff;
    }

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    .overlay {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 0 10px;
      box-sizing: border-box;

      strong {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-align: center;
        letter-spacing: -0.5px;
        line-height: 1.3;
        white-space: normal;
      }

      em {
        font-size: 0.8rem;
        text-align: center;
        white-space: normal;
        line-height: 1.3;
      }
    }

    &:hover .overlay {
      display: flex;
    }
  }

  @media (min-width: 1025px) {
    .portfolio-item {
      width: calc(20% - 1.2rem);
    }
  }

  @media (max-width: 1024px) {
    .portfolio-item {
      width: calc(33.33% - 1.33rem);
    }

    h1 {
      font-size: 2rem;
    }

    .overlay strong {
      font-size: 1.2rem;
    }

    .overlay em {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .portfolio-item {
      width: 100%;
    }

    .overlay strong {
      font-size: 1rem;
    }

    .overlay em {
      font-size: 0.8rem;
    }
  }
}
</style>