<template>
  <div>
    <section class="sr-head section">
      <p class="title lato-bold">
        {{ titleEn }}
      </p>
      <p class="subtitle">
        {{ titleJa }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

interface Title {
  titleEn: string,
  titleJa: string
}

@Component
export default class SrHead extends Vue{
  @Prop({ type: Object, required: true }) readonly title!: Title

  get titleEn (): string {
    return `${this.title.titleEn}`
  }

  get titleJa (): string {
    return `${this.title.titleJa}`
  }
}
</script>

<style lang="scss" scoped>
.sr-head {
  padding-bottom: 0;

  > p {
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &.title {
      font-size: size-5;
      background:linear-gradient(transparent 95%, black 0%);
    }

    &.subtitle {
      font-size: size-6;
    }
  }
}
</style>
