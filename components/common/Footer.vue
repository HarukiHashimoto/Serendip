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
          <a href="https://www.instagram.com/serendip.22" target="_blank" rel="noopener noreferrer" title="instagram">
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
