<template>
  <section>
    <ImageLoader file="assets/images/sanitation/top.JPG" />
    <SrHead :title="title" />
    <section class="section sanitation-head" content>
      <section class="hero is-dark is-small">
        <div class="hero-body">
          <p class="title">
            お客様と彫師が双方にとって安心・安全な施術を行うために、
<span class="lato">TATTOO STUDIO SERENDIP</span>では徹底した衛生管理を行っています。
          </p>
        </div>
      </section>
    </section>
    <section class="sanitaion-content section">
      <div class="sanitation-main content">
        <p>当スタジオでは、</p>
        <ul>
          <li>
            ウイルス感染（HIV・MRSA・HBV・HCV大腸菌等）バクテリアその他の病原菌及び雑菌に対して、細心の注意を払い衛生管理を徹底し、常に清潔な環境を維持しています。
          </li>
          <li>
            インク、グローブ、マスク、ニードル、シーツ関係等は全て使い捨てにしております。再利用する機器はございません。
          </li>
          <li>
            お客様の皮膚や体液に触れる可能性があり、且つ使い捨て処分の出来ない機材（施術台やライト等）はラップ、シーツ等で完全に保護し、使用後はそれらの保護材を廃棄処分しております。
          </li>
          <li>
            施術終了後はエタノール消毒液を使用し、アーティストとお客様が触れた箇所・機材、または触れる可能性のある箇所・機材（施術台、椅子、ライト、その他備品とそれらの周辺部）すべてに滅菌消毒を行います。
          </li>
        </ul>
      </div>
      <hr>
      <div class="sanitation-sub content">
        <h6>
          ※ 施術をお断りする場合
        </h6>
        <ul>
          <li>18歳未満の方（高校生不可） ・妊娠中や授乳期間の方</li>
          <li>HIV、肝炎等の感染症、アレルギー及びその他の疾患がある方</li>
          <li>暴力団関係者の方及び、それに類似されている方</li>
        </ul>
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
export default class Sanitation extends Vue{
  get title (): object {
    return {titleEn: 'SANITATION', titleJa: '衛生管理'}
  }
}
</script>

<style lang="scss" scoped>
.sanitation-head {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;

  p.title {
    font-size: 1.1rem;
    text-align: justify;
  }
}
.sanitation-main {
  font-size: 1.0rem;
}
.sanitation-sub {
  font-size: 0.9rem;
}
</style>
