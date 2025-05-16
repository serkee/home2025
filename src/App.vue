<template>
    <div id="app">
      <header>
        <div class="container">
          <div class="logo">My Portfolio</div>
          <nav :class="{ 'nav-open': isNavOpen }">
            <router-link to="/" @click="closeNav">Home</router-link>
            <router-link to="/services" @click="closeNav">Services</router-link>
            <router-link to="/portfolio" @click="closeNav">Portfolio</router-link>
            <router-link to="/contact" @click="closeNav">Contact</router-link>
          </nav>
          <div class="hamburger" @click="toggleNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <main>
        <router-view />
      </main>
      <footer>
        <div class="container">
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
  @import "@/assets/css/reset.css"; // Reset CSS 적용
$font-stack: "Roboto Mono", monospace;

  #app {
    font-family: $font-stack;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  header {
    background: $secondary-color;
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    nav {
      display: flex;
      gap: 1.5rem;

      a {
        color: white;
        text-decoration: none;
        font-size: 1rem;

        &.router-link-active {
          font-weight: bold;
          border-bottom: 2px solid white;
        }
      }

      @media (max-width: 768px) {
        display: none;
        &.nav-open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: $secondary-color;
          padding: 1rem;
          a {
            padding: 0.5rem 0;
          }
        }
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;

      span {
        width: 25px;
        height: 3px;
        background: white;
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }
  }

  main {
    min-height: calc(100vh - 120px);
    // padding: 2rem 0;
  }

  footer {
    background: $secondary-color;
    color: white;
    text-align: center;
    padding: 1rem 0;
    position: relative;
    bottom: 0;
    width: 100%;
    p{
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  </style>