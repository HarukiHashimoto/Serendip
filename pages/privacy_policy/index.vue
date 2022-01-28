<template>
  <section>
    <SrHead :title="title" />
    <section class="section about-content" content>
      <div class="policy-content">
        <p>
          利用状況の把握、サービス向上の検討
          当ウェブサイトの改善やお客様に提供するサービスの向上のために、Cookieおよび類似技術を利用して、お客様による当ウェブサイトの利用状況に関する情報を収集し、分析・活用することがあります。この目的のために当ウェブサイトは以下のツールを利用しています。
        </p>


        <p>
          ■ Google Analytics
        </p>
        <p>
          ツール提供者：Google LLC
        </p>
        <p>
          Google Analytics利用規約
        </p>
        <p>
          Googleプライバシーポリシー
        </p>
        <p>
          Google Analyticsは、当サイトが発行するCookieを利用して、お客様の当サイトの利用状況（アクセス状況、トラフィック、ルーティング等）を分析します。当サイトは、Google社からその分析結果を受け取り、お客様の利用状況を把握します。詳細については、以下のURLをご確認ください。
        </p>
        <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank">
          <p>https://policies.google.com/technologies/partner-sites?hl=ja</p>
        </a>
        <p>
          Google Analyticsに関する情報は以下のサイトからも入手できます。
        </p>
        <a href="https://support.google.com/analytics/answer/6004245" target="_blank">
          <p>
            https://support.google.com/analytics/answer/6004245
          </p>
        </a>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SrHead from '@/components/common/SrHead.vue'

@Component({
  components: {
    SrHead
  }
})
export default class Price extends Vue{
  head() {
    return {
      title: 'プライバシーポリシー | 福井のタトゥースタジオ「Serendip」'
    }
  }
  get title (): object {
    return {titleEn: 'PRIVACY POLICY', titleJa: 'プライバシーポリシー'}
  }
}
</script>

<style lang="scss" scoped>
.policy-content {
  font-size: 0.8rem;
  text-align: justify;
}
</style>
