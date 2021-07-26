<template>
  <section>
    <SrHead :title="title" />
    <section class="section price-size content">
      <h3>
        サイズ別
      </h3>
      <div
        class="prices"
        v-for="p in sizePrices"
        :key="p.name"
      >
        <div class="price columns">
          <div class="column">
            <span class="p-name">{{ p.name }}</span><br>
            <span class="p-desc">{{ p.desc }}</span>
          </div>
          <div class="column is-4 p-price">{{ p.price }}</div>
        </div>
      </div>
    </section>
    <section class="section price-time content">
      <h3>
        時間制
      </h3>
      <div
        class="prices"
        v-for="p in timePrices"
        :key="p.name"
      >
        <div class="price columns">
          <div class="column">
            <span class="p-name">{{ p.name }}</span><br>
            <span class="p-desc">{{ p.desc }}</span>
          </div>
          <div class="column is-4 p-price">{{ p.price }}</div>
        </div>
      </div>
    </section>
    <section class="section price-footer content">
      <ul>
        <li>
          料⾦表はあくまで⽬安の⾦額です。 実際にはデザイン内容（細かさ等）によって異なります。 デザイン打ち合わせ時に⼤体の⾦額をお伝え致しますが、 サイズや変更点を後の打ち合わせ調整後、デザイン決定してから確定致します。
        </li>
        <li>
          A5サイズより⼤きいサイズや、2⽇以上時間のかかるデザインの場合、当店の判断で、時間制とさせて頂きます。
        </li>
        <li>
          現金のみのお取り扱い
        </li>
      </ul>
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
export default class Price extends Vue{
  get title (): object {
    return {titleEn: 'PRICE', titleJa: '料金一覧（税込）'}
  }

  sizePrices = [
    {
      name: 'コインサイズ',
      desc: '極めて細かいデザイン等、例外もございます。',
      price: '￥10,000〜'
    },
    {
      name: '名刺サイズ',
      desc: '一般的な名刺の中に収まるものを指します。',
      price: '￥15,000〜'
    },
    {
      name: 'スマートフォン(ハガキ)サイズ',
      desc: '',
      price: '￥30,000〜'
    },
    {
      name: 'A5サイズ',
      desc: 'A4用紙の半分のサイズです。',
      price: '￥45,000〜'
    },
    {
      name: 'A4サイズ',
      desc: '',
      price: '￥80,000〜'
    },
  ]
  timePrices = [
    {
      name: '1時間',
      desc: '',
      price: '￥8,000〜'
    },
    {
      name: '以降30分毎',
      desc: '',
      price: '￥4,000〜'
    },
  ]
}
</script>

<style lang="scss" scoped>
.prices {

  > .price {
    padding-top: 1rem;
    border-style: none none solid none;
    border-width: 0.05rem;
    border-color: rgb(199, 199, 199);

    .p-name {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .p-desc {
      font-size: 0.9rem;
    }
    .p-price {
      text-align: right;
    }
  }
}
</style>
