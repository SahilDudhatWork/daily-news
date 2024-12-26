<template>
  <!-- Wrapper start -->
  <div id="wrapper" class="wrap overflow-hidden-x">
    <div
      class="breadcrumbs panel z-1 py-2 bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
    >
      <div class="container max-w-xl">
        <ul class="breadcrumb nav-x justify-center gap-1 fs-7 sm:fs-6 m-0">
          <li><a href="/">Home</a></li>
          <li><i class="unicon-chevron-right opacity-50"></i></li>
          <li>
            <span class="opacity-50">{{
              singleCategory?.category?.title
            }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="section py-3 sm:py-6 lg:py-9">
      <div class="container max-w-xl">
        <div class="panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header class="page-header panel vstack text-center">
            <h1 class="h3 lg:h1">
              Category: {{ singleCategory?.category?.title }}
            </h1>
          </header>
          <div class="row g-4 xl:g-8">
            <div class="col">
              <div class="panel text-center">
                <div
                  class="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4"
                  v-if="
                    singleCategory?.posts?.data &&
                    singleCategory?.posts?.data.length > 0
                  "
                >
                  <div
                    v-for="(item, key) in singleCategory?.posts?.data"
                    :key="key"
                  >
                    <article class="post type-post panel vstack gap-2">
                      <div class="post-image panel overflow-hidden">
                        <figure
                          class="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800"
                        >
                          <img
                            class="media-cover image uc-transition-scale-up uc-transition-opaque"
                            :src="item.image"
                            :data-src="item.image"
                            :alt="`${item.title}`"
                            data-uc-img="loading: lazy"
                          />
                          <a
                            :href="`/${item.slug}`"
                            class="position-cover"
                            :data-caption="`${item.title}`"
                          ></a>
                        </figure>
                        <div
                          class="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary"
                        >
                          <a
                            class="text-none"
                            :href="`/category/${singleCategory?.category.slug}`"
                            >{{ singleCategory?.category?.title }}</a
                          >
                        </div>
                        <div
                          class="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"
                        ></div>
                      </div>
                      <div class="post-header panel vstack gap-1 lg:gap-2">
                        <h3
                          class="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0"
                        >
                          <a class="text-none" :href="`/${item.slug}`">{{
                            item.title
                          }}</a>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  class="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800"
                >
                  <ul
                    class="nav-x uc-pagination hstack gap-1 justify-center ft-secondary"
                    data-uc-margin=""
                    v-if="
                      singleCategory.posts.data &&
                      singleCategory.posts.data.length > 0
                    "
                  >
                    <!-- Previous Page -->
                    <li
                      :class="{
                        'uc-disabled': !singleCategory.posts.prev_page_url,
                      }"
                    >
                      <a
                        href="javascript:void(0)"
                        @click.prevent="
                          changePage(singleCategory.posts.current_page - 1)
                        "
                        :disabled="!singleCategory.posts.prev_page_url"
                      >
                        <span class="icon icon-1 unicon-chevron-left"></span>
                      </a>
                    </li>

                    <!-- singleCategory.posts Numbers -->
                    <li
                      v-for="(link, index) in singleCategory.posts.links"
                      :key="link.label"
                    >
                      <a
                        href="javascript:void(0)"
                        @click.prevent="changePage(link.label)"
                        v-if="
                          link.url &&
                          link.label != 'Next &raquo;' &&
                          link.label != '&laquo; Previous'
                        "
                        :class="{
                          'uc-active': link.active,
                          'uc-disabled': !link.url,
                        }"
                      >
                        {{ link.label }}
                      </a>
                    </li>

                    <!-- Next Page -->
                    <li
                      :class="{
                        'uc-disabled': !singleCategory.posts.next_page_url,
                      }"
                    >
                      <a
                        href="javascript:void(0)"
                        @click.prevent="
                          changePage(singleCategory.posts.current_page + 1)
                        "
                        :disabled="!singleCategory.posts.next_page_url"
                      >
                        <span class="icon icon-1 unicon-chevron-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
  </div>

  <!-- Wrapper end -->
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  head() {
    return {
      title: `${this.singleCategory?.category?.title} - Daily Times`,
      meta: [
        {
          property: "og:title",
          content: `${this.singleCategory?.category?.title} - Daily Times`,
        },
        { name: "google-adsense-account", content: "ca-pub-7232228922121987" },
      ],
    };
  },
  data() {
    return {
      categorySlug: "",
    };
  },
  computed: {
    ...mapGetters({
      singleCategory: "getSingleCategory",
    }),
  },
  async asyncData({ params, store }) {
    if (params.pathMatch) {
      await store.dispatch("fetchCategoryBySlug", {
        slug: params.pathMatch,
        page: 1,
      });
      return {
        categorySlug: params.pathMatch,
      };
    }
  },
  methods: {
    ...mapActions({
      fetchCategoryBySlug: "fetchCategoryBySlug",
    }),
    async changePage(page) {
      await this.getCategoryBySlug(page);
    },
    async getCategoryBySlug(page = 1) {
      await this.fetchCategoryBySlug({ slug: this.categorySlug, page: page });
    },
  },
  mounted() {
    const loadAdScript = () => {
      const script = document.createElement("script");
      script.setAttribute("async", "true");
      script.setAttribute(
        "src",
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7232228922121987"
      );
      script.setAttribute("crossorigin", "anonymous");
      document.head.appendChild(script);
    };
    loadAdScript();
  },
};
</script>
<style scoped>
.uc-disabled a {
  pointer-events: none;
  opacity: 0.5;
}
</style>
