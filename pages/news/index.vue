<template>
  <section>
    <SrHead :title="title" />
    <section class="section news-index">
      {{ page }}
      <div class="columns is-multiline">
        <div v-for="feed in feeds" :key="feed.id" class="column is-4">
          <nuxt-link :to="'/news/'+ feed.id" class="article-card">
          <div class="card">
            <div class="card-image">
              <ImageLoader :file="feed.ogimage.url" :alt="feed.title" :isUrl="true" />
            </div>
            <div class="card-content">
              <div class="column news-title">{{ feed.title }}</div>
              <div class="column news-date">{{ feed.publishedAt }}</div>
            </div>
          </div>
          </nuxt-link>
        </div>
      </div>
      <div container has-text-centered class="pagenation">
        <section>
          <b-pagination
          :total="totalCount"
          v-model="page"
          per-page="6"
          icon-prev='chevron-left'
          icon-next='chevron-right'
          :simple="true"
          >
            <template #previous="props">
              <b-pagination-button
                :page="props.page"
                tag="router-link"
                :to="`/news/page/${props.page.number}`"
              >
                <b-icon icon="chevron-left"></b-icon>
              </b-pagination-button>
            </template>
            <template #next="props">
              <b-pagination-button
                :page="props.page"
                tag="router-link"
                :to="`/news/page/${props.page.number}`"
              >
                <b-icon icon="chevron-right"></b-icon>
              </b-pagination-button>
            </template>
          </b-pagination>
        </section>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SrHead from '@/components/common/SrHead.vue'
import ImageLoader from '~/components/common/ImageLoader.vue'

@Component({
  components: {
    SrHead,
    ImageLoader
  }
})
export default class NewsIndex extends Vue{
  head() {
    return {
      title: 'NEWS | 福井のタトゥースタジオ「Serendip」'
    }
  }

  get title (): object {
    return {titleEn: 'NEWS', titleJa: 'お知らせ'}
  }

  async fetch() {
    const page = Number(this.$route.params.p || '1')
    this.page = page
    const limit = 6
    await this.$store.dispatch('microcms/fetchFeedsByPage', { limit, page })
    console.log(this.$store.state.microcms.cmsFeeds)
  }

  get totalCount (): number {
    return this.$store.state.microcms.totalCount
  }

  get feeds (): any {
    return this.$store.state.microcms.cmsFeeds
  }

  page = 1
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

  .pagenation {
    margin: 0 0 0 auto;
  }
}
</style>
