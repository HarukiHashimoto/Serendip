<template>
  <b-navbar collapsible=true>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/images/common/brand.png" alt="TATTOO STUDIO SERENDIP">
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item
        v-for="item in items"
        :key="item.title"
        :target="getTarget(item.isNewTab)"
        :tag="item.tag"
        :to="item.to"
        :href="item.path"
        :rel="item.rel"
      >
        <span class="lato">{{ item.title }}</span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ImageLoader from '@/components/common/ImageLoader.vue'

@Component({
  components: {
    ImageLoader
  }
})
export default class Navbar extends Vue{
  data() {
    return {
      items: [
        {
          title: "TOP",
          isNewTab: false,
          tag: "router-link",
          to: '/'
        },
        {
          title: "ABOUT",
          isNewTab: false,
          tag: "router-link",
          to: "/about"
        },
        {
          title: "NEWS",
          isNewTab: false,
          tag: "router-link",
          to: "/news"
        },
        {
          title: "PRICE",
          isNewTab: false,
          tag: "router-link",
          to: "/price"
        },
        {
          title: "SANITATION",
          isNewTab: false,
          tag: "router-link",
          to: "/sanitation"
        },
        {
          title: "CONTACT",
          isNewTab: false,
          tag: "router-link",
          to: "/contact"
        },
        {
          title: "WEB STORE",
          path: "https://tatoostudioserendip.stores.jp",
          isNewTab: true,
          rel: "noopener noreferrer"
        }
      ]
    }
  }

  getTarget(isNewTab: boolean) {
    return isNewTab ? "_target" : ""
  }
}
</script>

<style lang="scss">
.burger {
  background-color: black;
  color: white;
  margin:0 0 0 auto;

  &.is-active {
    background-color: black;
  }

  &:hover {
    background-color: rgb(50, 50, 50);
    color: white;
  }
}

.navbar-menu.is-active {
  background-color: black;
  color: white;
  text-align: right;
  width: 60%;
  max-width: 400px;
  position: absolute;
  right: 0;

  .navbar-item {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.75rem;
    &:hover {
      background-color: rgb(50, 50, 50);
      color: white;
    }
  }
}
</style>
