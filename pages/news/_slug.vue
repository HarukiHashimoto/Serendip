<template>
  <section class="article section content">
    <section class="article-head">
      <ImageLoader :file="article.img" />
      <section class="section article-title">
        <p class="title">{{ article.title }}</p>
        <p class="subtitle">{{ article.date }}</p>
      </section>
    </section>
    <section class="article-content">
      <nuxt-content :document="article" />
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import ImageLoader from '~/components/common/ImageLoader.vue'

@Component({
  components: {
    ImageLoader
  }
})
export default class NewsPage extends Vue {
  async asyncData({ $content, params }: Context) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style lang="scss">
.article {
  > .article-head {
    border-style: none none solid none;
    border-width: 0.05rem;
    border-color: rgb(199, 199, 199);

    > .article-title {
      > .title {
        font-size: 1.5rem;
      }
      > .subtitle {
        font-size: 1.1rem;
      }
    }
  }
}
.nuxt-content {
  h1 {
    margin: 48px 0px 28px;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 8px 12px 8px 16px;
    border-left: 6px solid black;
  }

  h2 {
    border-left: 6px solid rgb(100, 100, 100);
    padding: 8px 12px 8px 16px;
    margin: 28px 0px 16px;
    font-size: 1.1rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.0rem;
    font-weight: bold;
  }

  h4, h5, h6 {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  em {

  }

  a {
    color: rgb(87, 87, 87);
    text-decoration: underline;
  }

  p {
    margin: 20px 0 10px;
  }

  code {

  }

  pre code {

  }
}
</style>
