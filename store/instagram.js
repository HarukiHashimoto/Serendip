import { fetchFeeds } from '~/service/common/instagram/api'

export const state = () => ({
  instagramFeeds: {}
});

export const mutations = {
  setInstagramFeeds(state, feeds) {
    state.instagramFeeds = feeds
  }
};

export const actions = {
  async fetchInstagramFeeds({ commit }, { businessID, accessToken }) {
    await fetchFeeds(businessID, accessToken, 6)
      .then(data => {
        commit('setInstagramFeeds', data)
      })
  }
};

export const getters = {
  instagramFeeds(state) {
    return state.instagramFeeds
  }
};
