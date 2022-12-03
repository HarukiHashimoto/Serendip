<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <a href="/" >
        <div class="hero is-small">
          <div class="hero-body">
            <p class="title lato-bold">
              Serendip
            </p>
            <p class="subtitle">
              福井のタトゥースタジオ
            </p>
          </div>
        </div>
      </a>
        <p class="subtitle link">
          <a href="https://goo.gl/maps/dyYYaSTaX3qLoySs6" target="_blank">
            〒918-8026 福井県福井市渕4丁目1208アウラWEST
          </a>
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.979816038253!2d136.18068271581805!3d36.04519848011106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8b93857413b09%3A0x18ee228d9ef34cc!2z44CSOTE4LTgwMjYg56aP5LqV55yM56aP5LqV5biC5riV77yU5LiB55uu77yR77yS77yQ77yYIOOCouOCpuODqVdFU1Q!5e0!3m2!1sja!2sjp!4v1670068003877!5m2!1sja!2sjp" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="links columns is-mobile">
        <div class="column is-4 lato">
          <router-link class="link" to="/">
            HOME
          </router-link>
        </div>
        <div class="column is-4 lato">
          <router-link class="link" to="about">
            ABOUT
          </router-link>
        </div>
        <div class="column is-4 lato">
          <router-link class="link" to="contact">
            CONTACT
          </router-link>
        </div>
      </div>
      <div class="ex-links columns is-mobile">
        <div class="column is-3" />
        <div class="column is-3">
          <a class="link-icon" href="https://tatoostudioserendip.stores.jp" target="_blank" rel="noopener noreferrer" title="store">
            <b-icon
              icon="store"
              class="store-icon"
            />
          </a>
        </div>
        <div class="column is-3 insta-icon">
          <a href="https://www.instagram.com/tattoostudioserendip" target="_blank" rel="noopener noreferrer" title="instagram">
            <img src="@/assets/images/common/instagram.svg" alt="instagram">
          </a>
        </div>
        <div class="column is-3" />
      </div>
      <div class="copyright">
        <p class="lato">copyright © Serendip</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: black;
  padding: 1rem;
  padding-bottom: 0;
  color: white;

  .subtitle {
    font-size: 0.5rem;
    color: white;
  }

  .title {
    color: white;
  }

  .link {
    font-size: 0.8rem;
    color: white;
    text-decoration:underline;
  }

  a:link, a:visited {
    color: white;
  }

  .ex-links {
    .link-icon {
      color: white;
      font-size: 32px;
    }

    .insta-icon {
      display:block;
      margin: auto;

      a {
        width: 32px;
        height: 32px;
        display: block;
        margin: auto;

        img {
          vertical-align: middle;
        }
      }
    }
  }

  .copyright {
    font-size: 0.7rem;
  }
}
</style>
