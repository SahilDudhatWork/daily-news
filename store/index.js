import $axios from "@/plugins/axios";

export const state = () => ({
  categories: [],
  categoriesWithPost: [],
  singleCategory: {},
  headlines: {},
  singlePost: {},
});
export const actions = {
  async fetchCategories(ctx, payload) {
    try {
      const res = await $axios.get("/categories");
      ctx.commit("setCategories", res.data.categories);

      return res;
    } catch (error) {
      throw error;
    }
  },
  async fetchCategoriesWithPost(ctx, payload) {
    try {
      const res = await $axios.get("/categories-with-post");
      ctx.commit("setCategoriesWithPost", res.data.categories);

      return res;
    } catch (error) {
      throw error;
    }
  },
  async fetchCategoryBySlug(ctx, payload) {
    try {
      let { slug = "latest", page = 1 } = payload;
      const res = await $axios.get(`/category/${slug}?page=${page}`);
      ctx.commit("setSingleCategory", res.data);

      return res;
    } catch (error) {
      throw error;
    }
  },
  async fetchHeadlines(ctx, payload) {
    try {
      let { slug = "latest", page = 1 } = payload;
      const res = await $axios.get(`/category/${slug}?page=${page}`);
      ctx.commit("setHeadlines", res.data);

      return res;
    } catch (error) {
      throw error;
    }
  },
  async fetchPostBySlug(ctx, payload) {
    try {
      let { slug = "" } = payload;
      const res = await $axios.get(`/post/${slug}`);
      console.log("res.data", res.data);
      ctx.commit("setSinglePost", res.data);

      return res;
    } catch (error) {
      throw error;
    }
  },
};
export const getters = {
  getCategories(state) {
    return state.categories;
  },
  getCategoriesWithPost(state) {
    return state.categoriesWithPost;
  },
  getSingleCategory(state) {
    return state.singleCategory;
  },
  getHeadlines(state) {
    return state.headlines;
  },
  getSinglePost(state) {
    return state.singlePost;
  },
};
export const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },
  setCategoriesWithPost(state, payload) {
    state.categoriesWithPost = payload;
  },
  setSingleCategory(state, payload) {
    state.singleCategory = payload;
  },
  setHeadlines(state, payload) {
    state.headlines = payload;
  },
  setSinglePost(state, payload) {
    state.singlePost = payload;
  },
};
