<template>
  <div>
    <Navbar />
    <div class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Navbar from '@/components/common/Navbar.vue'
import Footer from '@/components/common/Footer.vue'

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class Default extends Vue{}
</script>

<style lang="scss" scoped>
div {
  &.main-content {
    margin-bottom: 0;
    .container {
      padding-bottom: 0;
    }
  }
}
</style>
