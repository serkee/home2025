<template>
  <div class="home-wrapper">
    <section class="home-section hero-section">
      <div class="container">
        <h1 ref="heroTitle">Welcome to My Portfolio</h1>
        <p ref="heroSubtitle">A responsive website built with Vue.js.</p>
      </div>
    </section>

    <section class="home-section about-section">
      <div class="container">
        <div class="content-row">
          <div class="text-content">
            <h2 ref="aboutTitle">About Me</h2>
            <p ref="aboutDesc">Passionate web developer with a focus on innovative design.</p>
          </div>
          <div class="image-content">
            <img ref="aboutImg" src="https://images.unsplash.com/photo-1506784897247-3e1eefd9a4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Developer workspace">
          </div>
        </div>
      </div>
    </section>

    <section class="home-section skills-section">
      <div class="container">
        <div class="content-row reverse">
          <div class="text-content">
            <h2 ref="skillsTitle">My Skills</h2>
            <p ref="skillsDesc">Expertise in Vue.js, React, and UI/UX design.</p>
          </div>
          <div class="image-content">
            <img ref="skillsImg" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Coding environment">
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
    // Hero Section
    gsap.from(this.$refs.heroTitle, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.heroTitle,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(this.$refs.heroSubtitle, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.2,
      scrollTrigger: {
        trigger: this.$refs.heroSubtitle,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // About Section
    gsap.from(this.$refs.aboutTitle, {
      opacity: 0,
      x: -100,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.aboutTitle,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(this.$refs.aboutDesc, {
      opacity: 0,
      x: -100,
      duration: 1.2,
      delay: 0.2,
      scrollTrigger: {
        trigger: this.$refs.aboutDesc,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(this.$refs.aboutImg, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.aboutImg,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Skills Section
    gsap.from(this.$refs.skillsTitle, {
      opacity: 0,
      x: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.skillsTitle,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(this.$refs.skillsDesc, {
      opacity: 0,
      x: 100,
      duration: 1.2,
      delay: 0.2,
      scrollTrigger: {
        trigger: this.$refs.skillsDesc,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(this.$refs.skillsImg, {
      opacity: 0,
      x: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.skillsImg,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  background: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

.home-section {
  padding: 5rem 0;
  text-align: center;

  &.hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506784897247-3e1eefd9a4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    color: #fff;
  }

  &.about-section,
  &.skills-section {
    background: #fff;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .content-row {
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 100%;

    &.reverse {
      flex-direction: row-reverse;
    }

    .text-content,
    .image-content {
      flex: 1;
    }

    .image-content {
      img {
        max-width: 100%;
        border-radius: 8px;
      }
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .content-row {
      flex-direction: column;
      gap: 1.5rem;

      &.reverse {
        flex-direction: column;
      }

      .image-content {
        img {
          max-width: 80%;
        }
      }
    }
  }
}
</style>