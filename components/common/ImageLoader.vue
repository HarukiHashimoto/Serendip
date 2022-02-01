<!-- ~/components/ImageLoader.vue -->
<template>
  <b-image :src="url" :ratio="ratio" :alt="alt" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageLoader extends Vue {
  @Prop({ type: String, required: true })
  public file!: string

  @Prop({ type: String, required: false })
  public ratio: string

  @Prop({ type: String, required: false, default: 'alt'})
  public alt: string

  @Prop({ type: Boolean, required: false, default: false })
  public isUrl: boolean

  get url (): string {
    return this.isUrl ? this.file : require(`~/${this.file}`)
  }
}
</script>
