<template>
  <div id="page">
    <div id="header-image">
      <b-carousel :indicator="false">
        <b-carousel-item class="main-image-box" v-for="image in topImages" :key="image">
          <ImageLoader
            class="image main-image"
            ratio="6by4"
            :file="image"
            alt="トップ画像"
            :isUrl="true"
          />
        </b-carousel-item>
      </b-carousel>
    </div>
    <div class="contents">
      <News />
      <Gallery />
      <Contact />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import News from "./top/-News.vue"
import Gallery from "./top/-Gallery.vue"
import Contact from "./top/-Contact.vue"
import ImageLoader from "~/components/common/ImageLoader.vue"

@Component({
  components: {
    News,
    Gallery,
    Contact,
    ImageLoader
  }
})
export default class Top extends Vue{
  head() {
    return {
      title: 'TOP | 福井のタトゥースタジオ「Serendip」'
    }
  }

  get topImages (): any {
    return this.$store.state.microcms.topImages
  }

  async fetch() {
    await this.$store.dispatch('microcms/fetchTopImages')
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
