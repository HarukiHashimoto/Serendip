<template>
  <div>
    <SrHead :title="title"/>
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
export default class TopGallary extends Vue{
  get title (): object {
    return {titleEn: 'GALLARY', titleJa: 'ギャラリー'}
  }
}
</script>
