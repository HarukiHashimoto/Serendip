<template>
  <div>
    <SrHead :title="title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import SrHead from '@/components/common/SrHead.vue'
import axios from 'axios'

@Component({
  components: {
    SrHead
  }
})
export default class TopGallary extends Vue{

  get title (): object {
    return {titleEn: 'GALLERY', titleJa: 'ギャラリー'}
  }
  async asyncData({ $axios }: any) {
    const url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=1040032'
    const response = await $axios.$get(url)
    console.log(response)
    console.log('aaa')
  }
}
</script>
