<template>
  <div>
    <SrHead :title="title"/>
    <section class="section news-index">
      <div class="columns">
        <div v-for="feed in feeds" :key="feed.id" class="column">
          <a :href="'/news/'+ feed.id" class="article-card">
          <div class="card">
            <div class="card-image">
              <ImageLoader
                :file="feed.ogimage.url"
                :alt="feed.title"
                ratio="1by1"
                :isUrl="true" />
            </div>
            <div class="card-content">
              <div class="columns">
                <div class="column is-8 news-title">{{ feed.title }}</div>
                <div class="column is-4 news-date">{{ feed.publishedAt }}</div>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="container has-text-centered">
        <a href="/news">
          <b-button rounded type="is-dark">View more</b-button>
        </a>
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

  async fetch() {
    await this.$store.dispatch('microcms/fetchFeeds', 2)
  }

  get feeds (): object[] {
    return this.$store.state.microcms.cmsFeeds
  }
}
</script>

<style lang="scss" scoped>
.news-index {
  .news-title {
    font-size: size-4;
  }
  .news-date {
    text-align: right;
    font-size: size-6;
    color: dimgray;
  }
}
</style>
