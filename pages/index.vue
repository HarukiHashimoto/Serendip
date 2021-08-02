<template>
  <div id="page">
    <div id="header-image">
      <b-carousel :indicator="false">
        <b-carousel-item class="main-image-box" v-for="(item, i) in 5" :key="i">
          <b-image class="image main-image" ratio="6by4" :src="require(`@/assets/images/top/top-${i+1}.JPG`)"></b-image>
          <!-- <img class="main-title" src="@/assets/images/top/main_title.svg" /> -->
        </b-carousel-item>
      </b-carousel>
    </div>
    <div class="contents">
      <News :news="news" />
      <Contact />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Context } from '@nuxt/types'
import News from "./top/-News.vue"
import Contact from "./top/-Contact.vue"

@Component({
  components: {
    News,
    Contact
  }
})
export default class Top extends Vue{
  head() {
    return {
      title: 'TOP | 福井のタトゥースタジオ「Serendip」'
    }
  }

  // 記事取得
  news = {}  //初期化
  async asyncData({ $content, params, error }: Context) {
    const news = await $content('articles')
    .only(['title', 'slug', 'date', 'img'])
    .sortBy('date', 'desc')
    .limit(2)
    .fetch()
    return { news }
  }
}
</script>

<style lang="scss" scoped>
.main-image-box {
  position: relative;

  > .main-title {
    position: absolute;
    right: 3%;
    bottom: 3%;
    width: 60%;
  }
}
</style>
