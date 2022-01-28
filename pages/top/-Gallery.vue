<template>
  <div>
    <SrHead :title="title"/>
    <div class="columns is-multiline">
      <div
        v-for="feed in feeds"
        :key="feed.id"
        class="column is-6"
      >
        <div
          class="card feed"
          @click="openModal(feed)"
        >
          <div class="card-image">
            <b-image :src="feed.media_url" :alt="feed.caption" ratio="1by1" />
          </div>
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <a href="https://www.instagram.com/tattoostudioserendip" target="_blank" rel="noopener noreferrer" title="instagram">
        <b-button rounded type="is-dark">View more</b-button>
      </a>
    </div>
    <b-modal v-model="showModal" class="feed-modal" :width="640" scroll="keep">
      <div
        class="card modal-card"
        @click="openFeedLink(feed.permalink)"
      >
        <div class="card-image">
          <b-image :src="feed.mediaUrl" alt="instagram" />
        </div>
        <div class="card-content">
          <div class="content">
            {{ feed.caption }}
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import SrHead from '@/components/common/SrHead.vue'
import ImageLoader from '@/components/common/ImageLoader.vue'

@Component({
  components: {
    SrHead,
    ImageLoader
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

  showModal = false
  feed = {}

  openModal(feed: any) {
    this.showModal = true
    const caption = feed.caption.slice(0, 100) + '……'
    const mediaUrl = feed.media_type === 'VIDEO'
     ? feed.thumbnail_url
     : feed.media_url
    const permalink = feed.permalink
    this.feed = { caption, mediaUrl, permalink }
  }

  openFeedLink(url: string) {
    window.open(url)
  }
}
</script>

<style lang="scss" scoped>
.feed {
  width: 80%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
