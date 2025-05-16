<template>
    <section class="services-section">
      <div class="container">
        <h1>Services</h1>
        <div class="services-grid">
          <div class="service-item" v-for="service in services" :key="service.id">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, title: 'Web Publishing', description: 'Modern, responsive web publishing.' },
          { id: 2, title: 'Development', description: 'Custom web development solutions.' },
        ],
      };
    },
  };
  </script>

  <style lang="scss" scoped>
  .services-section {
    padding: 3rem 0;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .service-item {
      background: #f5f5f5;
      padding: 1.5rem;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      flex-direction: column;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        color: #666;
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  }
  </style>