<template>
    <div id="app">
      <header>
        <div class="container-custom">
          <router-link to="/" class="logo">My Portfolio</router-link>
          <nav>
            <router-link to="/" @click="closeNav">Home</router-link>
            <router-link to="/services" @click="closeNav">Services</router-link>
            <router-link to="/portfolio" @click="closeNav">Portfolio</router-link>
            <router-link to="/contact" @click="closeNav">Contact</router-link>
          </nav>
          <div class="hamburger" :class="{ active: isNavOpen }" @click="toggleNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <!-- Mobile Navigation Overlay -->
      <div class="nav-overlay" :class="{ active: isNavOpen }">
        <div class="nav-content">
          <router-link to="/" @click="closeNav">Home</router-link>
          <router-link to="/services" @click="closeNav">Services</router-link>
          <router-link to="/portfolio" @click="closeNav">Portfolio</router-link>
          <router-link to="/contact" @click="closeNav">Contact</router-link>
        </div>
      </div>

      <main>
        <router-view />
      </main>
      <footer>
        <div class="container-custom">
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        isNavOpen: false,
      };
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen;
      },
      closeNav() {
        this.isNavOpen = false;
      },
    },
  };
  </script>

  <style lang="scss">
  @import "@/assets/css/reset.css";
  @import "@/assets/styles/variables.scss";

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    @apply sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200;
    box-shadow: $shadow-sm;

    .container-custom {
      @apply flex items-center justify-between h-16;
    }

    .logo {
      @apply text-xl font-semibold text-neutral-900 tracking-tight no-underline;
      background: linear-gradient(135deg, $accent-color, #16a34a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    nav {
      @apply hidden md:flex items-center space-x-8;

      a {
        @apply text-neutral-600 hover:text-neutral-900 font-medium transition-all duration-200 relative;
        @apply px-3 py-2 rounded-md;

        &.router-link-active,
        &:hover {
          @apply text-accent-600 bg-accent-50;
        }

        &::after {
          content: '';
          @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-500 transition-all duration-200;
          transform: translateX(-50%);
        }

        &.router-link-active::after,
        &:hover::after {
          @apply w-full;
        }
      }
    }

    .hamburger {
      @apply md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg;
      @apply bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200;
      @apply cursor-pointer;

      span {
        @apply w-5 h-0.5 bg-neutral-600 transition-all duration-200;
        &:nth-child(1) {
          transform: rotate(0deg) translateY(0);
        }
        &:nth-child(2) {
          transform: scaleX(1);
        }
        &:nth-child(3) {
          transform: rotate(0deg) translateY(0);
        }
      }

      &.active span {
        &:nth-child(1) {
          transform: rotate(45deg) translateY(6px);
        }
        &:nth-child(2) {
          transform: scaleX(0);
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translateY(-6px);
        }
      }
    }
  }

  // Mobile navigation overlay
  .nav-overlay {
    @apply fixed inset-0 z-40 md:hidden;
    @apply bg-white/95 backdrop-blur-sm;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.active {
      transform: translateX(0);
    }

    .nav-content {
      @apply flex flex-col items-center justify-center h-full space-y-8;

      a {
        @apply text-2xl font-medium text-neutral-700 hover:text-accent-600;
        @apply transition-colors duration-200;
      }
    }
  }

  main {
    @apply flex-1;
  }

  footer {
    @apply bg-neutral-50 border-t border-neutral-200;
    .container-custom {
      @apply py-8 text-center;
    }
    p {
      @apply text-neutral-600 text-sm;
    }
  }

  // Animation classes for mobile menu
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .slide-in-right {
    animation: slideInRight 0.3s ease-out;
  }
  </style>