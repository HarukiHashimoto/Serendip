<template>
  <section>
    <SrHead :title="title.faq" />
    <section class="section faq-content content">
      <div
        v-for="f in faq"
        :key="f.q"
        class="faq"
      >
        <div class="question">{{ f.q }}</div>
        <div class="answer">{{ f.a }}</div>
        <hr>
      </div>
    </section>
    <SrHead :title="title.contact" />
    <section class="section">
      <div class="columns is-mobile">
        <div class="column is-half">

            <div class="card">
              <div class="card-image">
                <a href="tel:000-0000-0000">
                  <b-image
                    :src="require('@/assets/images/contact/tell.png')"
                    ratio="800by800"
                    class="image"
                  />
                </a>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-half">
          <a href="mailto: mailmail@mail.com?subject=Tattoo Studio Serendipへの問い合わせ&body=以下ご記入の上、ご返信ください。%0d%0a%0d%0a問い合わせ内容：%0d%0a%0d%0a氏名(任意)：%0d%0a%0d%0a電話番号(任意)：%0d%0a※お問い合わせいただいた内容によってはお電話にて回答させていただくことがございます。">
            <div class="card">
              <div class="card-image">
                <b-image
                :src="require('@/assets/images/contact/mail.png')"
                ratio="800by800"
                class="image"
                ></b-image>
              </div>
            </div>
          </a>
        </div>
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
export default class Contact extends Vue{
  get title (): object {
    return {
      faq: {titleEn: 'FAQ', titleJa: 'よくあるご質問'},
      contact: {titleEn: 'CONTACT', titleJa: 'お問い合わせ'}
    }
  }

  faq = [
    {
      q: "タトゥースタジオって、いきなり行っても大丈夫なの？",
      a: "全く問題ありません！ただ、彫っている事が多いため、事前にご連絡いただいた方がお待たせすることなく、スムーズに対応させていただけます。"
    },
    {
      q: "タトゥーを彫りたいけど、まず何を決めたらいいの？",
      a: "まずは入れたいモチーフ、大きさ、入れたい部位などをざっくりと考えてみましょう。細かなところまで決められないな、、、、という場合でもご相談いただけますのでご安心ください！"
    },
    {
      q: "何歳でもタトゥーを⼊れられるの？",
      a: "条例で禁⽌されておりますので、18歳未満の⽅はお断りしております。また、18歳であっても、⾼校⽣の⽅はお引き受けできません。そのため、⾝分証をご提⽰いただき、年齢の確認をさせていただきますので、あらかじめご了承ください。"
    },
    {
      q: "デザインの相談の時に他店の写真を持って⾏ってもいい？",
      a: "もちろん⼤丈夫です。写真やアクセサリー・イラストなど、資料を持って⾏った⽅が伝わりやすいので持って⾏きましょう。⾃分で簡単に描いた絵も、イメージは伝わるので恥ずかしがらずに持ってきてください。"
    },
    {
      q: "⾃分で描いたデザインを⼊れてもらえるの？",
      a: "はい、対応いたします。ただし、タトゥーに向かないデザインである場合もありますので、デザインを持って⼀度スタジオに相談しに来てください。タトゥーにできるかどうかというご相談だけでも、お気軽にお問い合わせください。"
    },
    {
      q: "タトゥーを⼊れる前⽇や当⽇に気をつけることは？",
      a: "前⽇、当⽇はお酒を控え、睡眠と⾷事をしっかり摂りましょう。施術前の日焼けはご遠慮ください。日焼けした肌の赤い状態や皮が剥けた状態では施術出来かねます。"
    },
    {
      q: "当日の服装って、どんなものが良い？",
      a: "彫った後にタトゥーが擦れないような、比較的ゆったりめのお洋服でお越しください。また、できるだけ洋服や下着が汚れないようにバリアをしますが、インクがついてしまう可能性もありますので、汚れても良い服装でお越しいただいた方が安心です！"
    },
    {
      q: "通院中でも、タトゥーを⼊れてもらえる？",
      a: "申し訳ありませんが、当店では判断いたしかねます。かかりつけの病院にご相談ください。また、常備薬がある⽅も、医師の判断を仰いでいただきますようお願いいたします。"
    },
    {
      q: "タトゥーを⼊れてから、デザインの変更はできるの？",
      a: "タトゥーの性質上、できません。⼀度⼊れるとやり直すことはできませんので、充分吟味してからタトゥーを⼊れましょう。 なお、レーザーなどで絵柄を消すことは不可能ではありませんが、肌の状態は元通りにはなりません。安易にタトゥーを⼊れるのは避けてください。"
    },
    {
      q: "友達と⼀緒に⾏ってもいいですか？",
      a: "もちろん⼤丈夫です。お気軽にお越しください。"
    },
    {
      q: "他店で⼊れたタトゥーの続きはできますか？",
      a: "もちろん施術可能です。現在⼊っているタトゥーの状態を確認するため、⼀度カウンセリングが必要です。お気軽にご相談ください。"
    },
    {
      q: "タトゥーを⼊れている途中で休憩を取れますか？",
      a: "基本は1時間に⼀度休憩をお取りいたします。ご希望があれば、何度でも休憩をお取りいたします。"
    },
    {
      q: "仕事等で忙しい場合や遠方でなかなかカウンセリングに行けない場合はどうすれば良いですか？",
      a: "メールや電話でカウンセリングを行う事も可能です！できればスタジオに来て相談して頂いた方がデザインのイメージが伝わりやすいとは思います。"
    },
  ]
}
</script>

<style lang="scss" scoped>
.question {
  text-decoration: underline;
  &:before {
    content: 'Q ';
    color: rgb(255, 90, 90);
  }
}
.answer {
  &:before {
    content: 'A ';
    color: rgb(90, 90, 255);
  }
}
.image {
  background-color: rgb(74, 74, 74);
}
</style>
