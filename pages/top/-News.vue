<template>
  <div>
    <SrHead :title="title"/>
    <section class="section news-index">
      <div class="columns">
        <div v-for="n in news" :key="n.slug" class="column">
          <nuxt-link :to="'/news/'+ n.slug" class="article-card">
          <div class="card">
            <div class="card-image">
              <ImageLoader :file="n.img" />
            </div>
            <div class="card-content">
              <div class="columns">
                <div class="column is-8 news-title">{{ n.title }}</div>
                <div class="column is-4 news-date">{{ n.date }}</div>
              </div>
            </div>
          </div>
          </nuxt-link>
        </div>
      </div>
      <div class="container has-text-centered">
        <nuxt-link to="/news">
          <b-button rounded type="is-dark">View more</b-button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import SrHead from '@/components/common/SrHead.vue'
import ImageLoader from '~/components/common/ImageLoader.vue'

@Component({
  components: {
    SrHead,
    ImageLoader
  }
})
export default class TopNews extends Vue{
  get title (): object {
    return {titleEn: 'NEWS', titleJa: 'お知らせ'}
  }

  @Prop({ required: true })
  public news!: object
}
</script>

<style lang="scss" scoped>
.news-index {
  .news-title {
    font-size: 1.2rem;
  }
  .news-date {
    text-align: right;
    font-size: 1rem;
    color: dimgray;
  }
}
</style>
