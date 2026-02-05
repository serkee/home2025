import { reactive } from 'vue';

// 초기 로케일 설정: 로컬 스토리지에 있으면 가져오고, 없으면 한국어('ko')를 기본값으로 함
const savedLocale = localStorage.getItem('locale') || 'ko';

export const i18n = reactive({
    locale: savedLocale,
    t(key) {
        const translations = {
            ko: {
                home: '홈',
                dev: '개발',
                pub: '퍼블리싱',
                devPortfolio: '개발<br/>포트폴리오',
                pubPortfolio: '퍼블리싱<br/>포트폴리오',
                devPortfolioTitle: '개발 포트폴리오',
                pubPortfolioTitle: '퍼블리싱 포트폴리오',
                devFull: 'Development',
                pubFull: 'Publishing',
                totalProjects: '총 {count}개의 프로젝트',
                comingSoon: '프로젝트가 준비중입니다.',
                allRights: 'Gray Tone Portfolio. All rights reserved.'
            },
            en: {
                home: 'HOME',
                dev: 'DEV',
                pub: 'PUB',
                devPortfolio: 'Development<br/>Portfolio',
                pubPortfolio: 'Publishing<br/>Portfolio',
                devPortfolioTitle: 'Development Portfolio',
                pubPortfolioTitle: 'Publishing Portfolio',
                devFull: 'Development',
                pubFull: 'Publishing',
                totalProjects: 'Total {count} Projects',
                comingSoon: 'Projects are coming soon.',
                allRights: 'Gray Tone Portfolio. All rights reserved.'
            }
        };

        const text = translations[this.locale]?.[key] || key;
        return text;
    },
    setLocale(lang) {
        this.locale = lang;
        localStorage.setItem('locale', lang);
    }
});
