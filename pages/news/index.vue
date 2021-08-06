<template>
  <section>
    <SrHead :title="title" />
    <section class="section news-index">
      <div class="columns is-multiline">
        <div v-for="a in articles" :key="a.slug" class="column is-4">
          <nuxt-link :to="'/news/'+ a.slug" class="article-card">
          <div class="card">
            <div class="card-image">
              <ImageLoader :file="a.img" :alt="a.alt" />
            </div>
            <div class="card-content">
              <div class="column news-title">{{ a.title }}</div>
              <div class="column news-date">{{ a.date }}</div>
            </div>
          </div>
          </nuxt-link>
        </div>
      </div>
      <div container has-text-centered class="pagenation">
        <section>
          <b-pagination
          :total="count"
          v-model="current"
          per-page="6"
          icon-prev='chevron-left'
          icon-next='chevron-right'
          simple="true"
          >
            <template #previous="props">
              <b-pagination-button
                :page="props.page"
                disabled
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
import { Context } from '@nuxt/types'
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

  // 記事取得
  articles = []  //初期化
  current = 1
  async asyncData({ $content, params, error }: Context) {
    const count = await $content('articles').only('title').fetch()
    const indexPerPage = 6
    const articles = await $content('articles')
    .only(['title', 'slug', 'date', 'img'])
    .sortBy('date', 'desc')
    .skip(0)
    .limit(indexPerPage)
    .fetch()
    return { articles, count: count.length }
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

  .pagenation {
    margin: 0 0 0 auto;
  }
}
</style>
