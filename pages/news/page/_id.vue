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
              <div class="news-title">{{ a.title }}</div>
              <div class="news-date">{{ a.date }}</div>
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
            simple="true"
            per-page="6"
            icon-prev='chevron-left'
            icon-next='chevron-right'
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
import { Context } from '@nuxt/types'
import SrHead from '@/components/common/SrHead.vue'
import ImageLoader from '~/components/common/ImageLoader.vue'
import { $content } from '@nuxt/content'

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

  // パラメータが数字以外の時/newsにリダイレクト
  validate({ redirect, params }: any) {
      if(/[0-9]+/.test(params.id)) return true;
      return redirect('/news')
  }

  // 記事取得
  articles = []  //初期化
  count = 0
  async asyncData({ redirect, store, $content, params, error }: Context) {
    // ページ数を超えたリクエストはリダイレクト
    const count = await $content('articles').only('title').fetch()
    const current = Number(params.id)
    const indexPerPage = 6
    if(current > Math.ceil( count.length / indexPerPage )) redirect('/news')
    if(current <= 0) redirect('/news')

    const from = indexPerPage * (current - 1)
    const to = indexPerPage * current

    const articles = await $content('articles')
    .only(['title', 'slug', 'date', 'img'])
    .sortBy('date', 'desc')
    .skip(from)
    .limit(to)
    .fetch()
    return { articles, count: count.length, current  }
  }

  get firstArticles() {
    const fa = this.articles.filter((element, index) => index < 3)
    return fa
  }

  get secondArticles() {
    const sa = this.articles.filter((element, index) => index >= 3)
    return sa
  }

  get max() {
    return Math.ceil( this.count / 6 )
  }
  get num() {
    let tmp = [];
    const current = Number(this.$route.params.id)
    for(let n = 1; n <= this.max; n++){
      if(n == 1 || n == this.max){
        tmp.push({ pg: true,num: n });
        continue;
      }
      if((current - 2 <= n) && (n <= current + 2)){
        tmp.push({ pg: true,num: n })
        continue;
      }
      if((current - 2 - 1 == n) || (n == current + 2 + 1) ){
        tmp.push({ pg: false,num: "..." })
        continue;
      }
    }
    return tmp;
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
