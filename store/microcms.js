const convertJST = (ust) => {
  let time = new Date(ust)
  time.setHours(time.getHours() + 9)
  return time.toLocaleDateString()
  }

export const state = () => ({
  cmsFeeds: [],
  feed: {
    publishedAt: '',
    title: '',
    body: '',
    description: '',
    thumbnail: ''
}
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
    state.feed.publishAt = feed.publishAt
    state.feed.title = feed.title
    state.feed.body = feed.body
    state.feed.description = feed.description
    state.feed.thumbnail = feed.thumbnail

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
    commit('setFeeds', feeds)
  },

  // 1件取得
  async fetch({ commit }, id) {
    const feed = await this.$microcms.get({
      endpoint: 'blog',
      contentId: id,
    })
    commit('setFeed', feed)
  }
};

export const getters = {
};
