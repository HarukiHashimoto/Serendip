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
          <a href="tel:000-0000-0000">
            <div class="card">
              <div class="card-image">
                <b-image
                :src="require('@/assets/images/contact/tell.png')"
                ratio="800by800"
                class="image"
                ></b-image>
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
      q: "質問します質問します質問します質問します",
      a: "回答します回答します回答します回答します"
    },
    {
      q: "質問します質問します質問します質問します",
      a: "回答します回答します回答します回答します"
    },{
      q: "質問します質問します質問します質問します",
      a: "回答します回答します回答します回答します"
    },{
      q: "質問します質問します質問します質問します",
      a: "回答します回答します回答します回答します"
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
