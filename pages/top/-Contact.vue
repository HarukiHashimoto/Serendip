<template>
  <div class="body">
    <SrHead :title="title"/>
    <section class="contact-btns section">
      <div class="columns is-mobile">
        <div class="column is-1" />
        <div class="column is-10">
          <b-button
            type="is-large is-dark"
            expanded
            icon-left="question"
            icon-pack="fas"
            tag="router-link"
            :to="{ path: 'contact' }"
          >
            <p>よくあるご質問(FAQ)</p>
          </b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-1" />
        <div class="column is-10">
          <a href="tel:080-6356-0022">
            <b-button
              type="is-large is-dark"
              expanded
              icon-left="phone"
            >
              <p>電話でのお問い合わせ</p>
            </b-button>
          </a>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-1" />
        <div class="column is-10">
          <a href="mailto: tattoo.studio.serendip@gmail.com?subject=Tattoo Studio Serendipへの問い合わせ&body=以下ご記入の上、ご返信ください。%0d%0a%0d%0a問い合わせ内容：%0d%0a%0d%0a氏名(任意)：%0d%0a%0d%0a電話番号(任意)：%0d%0a※お問い合わせいただいた内容によってはお電話にて回答させていただくことがございます。">
            <b-button
              type="is-large is-dark"
              expanded
              icon-left="envelope"
            >
              <p>メールでのお問い合わせ</p>
            </b-button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import SrHead from '@/components/common/SrHead.vue'

@Component({
  components: {
    SrHead
  }
})
export default class TopContact extends Vue{
  get title (): object {
    return {titleEn: 'CONTACT', titleJa: 'お問い合わせ'}
  }
}
</script>

<style lang="scss" scoped>
.body {
  background:linear-gradient(transparent 15%, rgb(245, 245, 245) 0%);

  .contact-btns {
    p {
      font-size: 1.1rem;
      width: 100%;
    }
  }
}
</style>
