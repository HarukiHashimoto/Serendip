<template>
  <div id="page">
    <div id="header-image">
      <b-carousel :indicator="false">
        <b-carousel-item class="main-image-box" v-for="(item, i) in 5" :key="i">
          <ImageLoader
            class="image main-image"
            ratio="6by4"
            :file="`assets/images/top/top-${i+1}.JPG`"
            alt="トップ画像"
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
