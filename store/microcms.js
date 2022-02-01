const convertJST = (ust) => {
  let time = new Date(ust)
  time.setHours(time.getHours() + 9)
  return time.toLocaleDateString('ja-JP')
}

export const state = () => ({
  cmsFeeds: [],
  feed: {
    publishedAt: '',
    title: '',
    body: '',
    description: '',
    thumbnail: ''
  },
  totalCount: 0,
  topImages: {
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: ''
  },
  aboutImage: '',
  sanitationImage: ''
});

export const mutations = {
  setFeeds(state, feeds) {
    feeds = feeds.contents.map((feed) => {
      feed.publishedAt = convertJST(feed.publishedAt)
      return feed
    })
    state.cmsFeeds = feeds
  },
  setFeed(state, feed) {
    state.feed.publishedAt = convertJST(feed.publishedAt)
    state.feed.title = feed.title
    state.feed.body = feed.body
    state.feed.description = feed.description
    state.feed.thumbnail = feed.ogimage.url

  },
  setTotalCount(state, totalCount) {
    state.totalCount = totalCount
  },
  setTopImages(state, topImages) {
    state.topImages.image1 = topImages.topImage1.url
    state.topImages.image2 = topImages.topImage2.url
    state.topImages.image3 = topImages.topImage3.url
    state.topImages.image4 = topImages.topImage4.url
    state.topImages.image5 = topImages.topImage5.url
    state.aboutImage = topImages.aboutImage.url
    state.sanitationImage = topImages.sanitationImage.url
  }
};

export const actions = {
  // リスト取得
  async fetchFeeds({ commit }, limit) {
    const feeds = await this.$microcms.get({
      endpoint: 'blog',
      queries: {
        limit,
        fields: 'id,title,publishedAt,ogimage'
      }
    })
    commit('setTotalCount', feeds.totalCount)
    commit('setFeeds', feeds)
  },

  async fetchFeedsByPage({ commit }, { limit, page }) {
    const feeds = await this.$microcms.get({
      endpoint: 'blog',
      queries: {
        limit,
        offset: (page - 1) * limit
      }
    })
    commit('setTotalCount', feeds.totalCount)
    commit('setFeeds', feeds)
  },

  // 1件取得
  async fetch({ commit }, id) {
    const feed = await this.$microcms.get({
      endpoint: 'blog',
      contentId: id,
    })
    commit('setFeed', feed)
  },

  async fetchTopImages({ commit }) {
    const topImages = await this.$microcms.get({
      endpoint: 'top-images'
    })
    commit('setTopImages', topImages)
  }
};

export const getters = {
};
