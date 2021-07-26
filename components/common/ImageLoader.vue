<!-- ~/components/ImageLoader.vue -->
<template>
  <b-image :src="require(`~/${this.file}`)" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageLoader extends Vue {
  @Prop({ required: true })
  public file!: string
}
</script>
