<template>
  <section>
    <ImageLoader :file="topImage" alt="Aboutトップ画像" :isUrl="true" />
    <SrHead :title="title" />
    <section class="section about-content" content>
      <div class="about-main">
        <p>
          初めまして。福井のタトゥースタジオ「Serendip」です。
        </p>
        <p>
          Serendipとは「偶然の幸運」
          当スタジオで、一生物であるタトゥーと予想外で幸運な出会いをして欲しい。
        </p>
        <p>
          そんな願いを込めて「Serendip」と名付けました。
        </p>
        <p>
          アナタの「1度きりの人生」、信念や決意表明・シンボルマークとしての素敵なタトゥーとの出会いをぜひ「Serendip」で。
        </p>
      </div>
      <hr>
      <div class="about-sub">
        <p>
          ※当店は基本的には予約制となりますのでご予約・ご来店の際はまずはお電話、もしくはメールでお気軽にお問い合わせください。
        </p>
        <p>
          ご相談は無料にて、ご予約なしでも対応させていただきます。丁寧にカウンセリングを行いますので初めての方でも緊張せずリラックスして過ごせます。
        </p>
        <p>
          はっきりデザインが決まっていなくても、お気軽にお問い合わせください。ゆっくり相談しながらデザインをお決めいただけます。
        </p>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ImageLoader from '~/components/common/ImageLoader.vue'
import SrHead from '@/components/common/SrHead.vue'

@Component({
  components: {
    ImageLoader,
    SrHead
  }
})
export default class About extends Vue{
  head() {
    return {
      title: 'ABOUT | 福井のタトゥースタジオ「Serendip」',
      meta: [
        { hid: 'og:image', property: 'og:image', content: this.topImage },
      ]
    }
  }
  get title (): object {
    return {titleEn: 'ABOUT', titleJa: 'スタジオについて'}
  }

  async fetch() {
    await this.$store.dispatch('microcms/fetchTopImages')
  }

  get topImage () : string {
    return this.$store.state.microcms.aboutImage
  }
}
</script>

<style lang="scss" scoped>
.about-content {
  > .about-main {
    > p {
      font-size: 1.0rem;
      text-align: justify;
      font-weight: bold;
    }
  }
  > .about-sub {
    > p {
      font-size: 0.8rem;
      text-align: justify;
    }
  }
}
</style>
