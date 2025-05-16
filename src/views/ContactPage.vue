<template>
  <section class="contact-section">
    <div class="container">
      <h1>Contact Us</h1>
      <div class="contact-info">
        <p>
          <strong>email:</strong>
          <a href="mailto:serkee@kakao.com">serkee@naver.com</a>
        </p>
        <p>
          <strong>phone:</strong>
          <a href="tel:+821035636294">+82 10-3563-6294</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // 데이터나 메서드가 필요 없으므로 빈 객체로 유지
};
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 3rem 0;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .contact-info {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    p {
      font-size: 1.2rem;
      margin: 0;

      strong {
        font-weight: bold;
        margin-right: 0.5rem;
      }

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    .contact-info {
      padding: 0 1rem;

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>