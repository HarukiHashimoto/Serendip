<template>
  <div>
    <SrHead :title="title"/>
    {{ feeds }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import SrHead from '@/components/common/SrHead.vue'

@Component({
  components: {
    SrHead
  }
})
export default class TopGallary extends Vue{
  get title (): object {
    return {titleEn: 'GALLERY', titleJa: 'ギャラリー'}
  }

  get feeds(): object {
    return this.$store.state.instagramFeeds
  }

  async fetch() {
    const businessID = this.$config.instagramBusinessId
    const accessToken = this.$config.accessToken
    await this.$store.dispatch('fetchInstagramFeeds', {
      businessID,
      accessToken
    })
  }
}
</script>
