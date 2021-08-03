<!-- ~/components/ImageLoader.vue -->
<template>
  <b-image :src="require(`~/${this.file}`)" :ratio="ratio" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageLoader extends Vue {
  @Prop({ type: String, required: true })
  public file!: string

  @Prop({ type: String, required: false, default: '4by3' })
  public ratio: string
}
</script>
