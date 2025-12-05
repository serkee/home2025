<template>
    <section class="visual-section">
      <div class="container">
        <h2>Visuals</h2>
        <div class="gallery">
          <div v-for="(image, index) in images" :key="index" class="gallery-item">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: require('@/assets/images/contents/thumb_aifa.jpg'), alt: 'aifa' },
          { src: require('@/assets/images/contents/thumb_airic.png'), alt: 'airic' },
          { src: require('@/assets/images/contents/thumb_ato.jpg'), alt: 'ato' },
          { src: require('@/assets/images/contents/thumb_bas.jpg'), alt: 'bas' },
          { src: require('@/assets/images/contents/thumb_beestle.jpg'), alt: 'beestle' },
          { src: require('@/assets/images/contents/thumb_car.png'), alt: 'car' },
          { src: require('@/assets/images/contents/thumb_chac.png'), alt: 'chac' },
          { src: require('@/assets/images/contents/thumb_city.jpg'), alt: 'city' },
        ]
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';
  
  .visual-section {
    padding: 4rem 0;
    background-color: $white-color;
    text-align: center;
  
    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: $primary-color;
    }
  
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
  
      .gallery-item {
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
  
        &:hover {
          transform: scale(1.05);
        }
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  </style>
  