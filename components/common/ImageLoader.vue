<!-- ~/components/ImageLoader.vue -->
<template>
  <b-image :src="require(`~/${this.file}`)" :ratio="ratio" :alt="alt" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageLoader extends Vue {
  @Prop({ type: String, required: true })
  public file!: string

  @Prop({ type: String, required: false, default: '4by3' })
  public ratio: string

  @Prop({ type: String, required: false, default: 'alt'})
  public alt: string
}
</script>
