<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <nuxt-link to="/" >
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
      </nuxt-link>
        <p class="subtitle link">
          <a href="https://www.google.com/maps/place/%E3%80%92910-0023+%E7%A6%8F%E4%BA%95%E7%9C%8C%E7%A6%8F%E4%BA%95%E5%B8%82%E9%A0%86%E5%8C%96%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%91%EF%BC%99/@36.0671017,136.211182,17z/data=!3m1!4b1!4m5!3m4!1s0x5ff8bee56e115f53:0xbb11922397341d0e!8m2!3d36.0671017!4d136.2133707" target="_blank">
            〒910-0023 福井市順化2丁目26-19 elle.bld 201
          </a>
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.081916123602!2d136.21118201569635!3d36.06710601631882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8bf18f14ab3e7%3A0x99d48111e728614a!2sTATTOO%20STUDIO%20SERENDIP!5e0!3m2!1sja!2sjp!4v1643379026863!5m2!1sja!2sjp" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
