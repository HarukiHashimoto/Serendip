<template>
  <b-navbar collapsible=true>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="title lato-bold">Serendip</h1>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item
        v-for="item in items"
        :key="item.title"
        :href="item.path"
        :target="getTarget(item.isNewTab)"
      >
        <span class="lato">{{ item.title }}</span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Navbar extends Vue{
  data() {
    return {
      items: [
        {
          title: "TOP",
          path: "/",
          isNewTab: false
        },
        {
          title: "ABOUT",
          path: "/about",
          isNewTab: false
        },
        {
          title: "NEWS",
          path: "/news",
          isNewTab: false
        },
        {
          title: "PRICE",
          path: "/price",
          isNewTab: false
        },
        {
          title: "SANITATION",
          path: "/sanitation",
          isNewTab: false
        },
        {
          title: "CONTACT",
          path: "/contact",
          isNewTab: false
        },
        {
          title: "WEB STORE",
          path: "https://tatoostudioserendip.stores.jp",
          isNewTab: true
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
