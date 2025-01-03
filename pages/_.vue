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
            <span class="opacity-50">{{ singlePost?.post?.title }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-section mx-auto">
      <div class="row flex flex-wrap">
        <div class="center-section lg:order-2">
          <div class="section panel mb-4 lg:mb-6">
            <div class="section-outer panel">
              <div class="container max-w-xl">
                <div class="section-inner panel vstack gap-4">
                  <div class="section-content">
                    <div
                      class="row child-col-12 lg:child-cols g-4 lg:g-6 col-match"
                    >
                      <!-- First Ad Slot -->
                      <div class="lg:col-12">
                        <ins
                          class="adsbygoogle"
                          style="display: block"
                          data-ad-client="ca-pub-7232228922121987"
                          data-ad-slot="2426239430"
                          data-ad-format="auto"
                          data-full-width-responsive="true"
                        ></ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="post-header">
            <div class="panel vstack gap-4 text-center">
              <div
                class="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3"
              >
                <h1 class="xl:pt-4 h4 sm:h2 lg:h5">
                  {{ singlePost?.post?.title }}
                </h1>
              </div>
              <figure class="featured-image m-0 mb-3">
                <figure
                  class="featured-image m-0 ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800"
                >
                  <img
                    class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    :src="singlePost?.post?.image"
                    :data-src="singlePost?.post?.image"
                    alt="The Rise of Gourmet Street Food: Trends and Top Picks"
                    data-uc-img="loading: lazy"
                  />
                </figure>
              </figure>
            </div>
          </div>
          <div
            class="post-content panel fs-6 md:fs-5"
            data-uc-lightbox="animation: scale"
            v-html="processedHtml"
          ></div>
          <div data-type="_mgwidget" data-widget-id="1717789"></div>

          <div
            class="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9"
          >
            <div
              v-if="singlePost?.previous_post"
              class="new-post panel hstack w-100 sm:w-1/2"
            >
              <div class="panel hstack justify-center w-100px h-100px">
                <figure
                  class="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800"
                >
                  <img
                    class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    :src="singlePost?.previous_post?.image"
                    :data-src="singlePost?.previous_post?.image"
                    :alt="`${singlePost?.previous_post?.title}`"
                    data-uc-img="loading: lazy"
                  />
                  <a
                    :href="`${singlePost?.previous_post?.slug}`"
                    class="position-cover"
                    :data-caption="`${singlePost?.previous_post?.title}`"
                  ></a>
                </figure>
              </div>
              <div class="panel vstack justify-center px-2 gap-1 w-1/3">
                <span class="fs-7 opacity-60">Prev Article</span>
                <h6 class="h6 lg:h5 m-0">
                  {{ singlePost?.previous_post?.title }}
                </h6>
              </div>
              <a
                :href="`${singlePost?.previous_post?.slug}`"
                class="position-cover"
              ></a>
            </div>

            <div
              v-if="singlePost?.next_post"
              class="new-post panel hstack w-100 sm:w-1/2"
            >
              <div
                class="panel vstack justify-center px-2 gap-1 w-1/3 text-end"
              >
                <span class="fs-7 opacity-60">Next Article</span>
                <h6 class="h6 lg:h5 m-0">
                  {{ singlePost?.next_post?.title }}
                </h6>
              </div>
              <div class="panel hstack justify-center w-100px h-100px">
                <figure
                  class="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800"
                >
                  <img
                    class="media-cover image uc-transition-scale-up uc-transition-opaque"
                    :src="singlePost?.next_post?.image"
                    :data-src="singlePost?.next_post?.image"
                    :alt="`${singlePost?.next_post?.title}`"
                    data-uc-img="loading: lazy"
                  />
                  <a
                    :href="`${singlePost?.next_post?.slug}`"
                    class="position-cover"
                    :data-caption="`${singlePost?.next_post?.title}`"
                  ></a>
                </figure>
              </div>
              <a
                :href="`${singlePost?.next_post?.slug}`"
                class="position-cover"
              ></a>
            </div>
          </div>
          <div class="lg:col-12 ad-container">
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-7232228922121987"
              data-ad-slot="2594562724"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          <div
            v-if="
              singlePost.related_posts && singlePost.related_posts.length > 0
            "
            class="post-related panel border-top pt-2 mt-8 xl:mt-9"
          >
            <h4 class="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
            <div
              class="row child-cols-6 md:child-cols-3 gx-2 gy-4 sm:gx-3 sm:gy-6"
            >
              <div v-for="(item, key) in singlePost.related_posts" :key="key">
                <article class="post type-post panel vstack gap-2">
                  <figure
                    class="featured-image m-0 ratio ratio-4x3 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800"
                  >
                    <img
                      class="media-cover image uc-transition-scale-up uc-transition-opaque"
                      :src="item?.image"
                      :data-src="item?.image"
                      :alt="`${item.title}`"
                      data-uc-img="loading: lazy"
                    />
                    <a
                      :href="`/${item.slug}`"
                      class="position-cover"
                      :data-caption="`${item.title}`"
                    ></a>
                  </figure>
                  <div class="post-header panel vstack gap-1">
                    <h5 class="h6 md:h5 m-0">
                      <a class="text-none" :href="`/${item.slug}`">{{
                        item.title
                      }}</a>
                    </h5>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="section panel mb-4 lg:mb-6">
            <div class="section-outer panel">
              <div class="container max-w-xl">
                <div class="section-inner panel vstack gap-4">
                  <div class="section-content">
                    <div
                      class="row child-col-12 lg:child-cols g-4 lg:g-6 col-match"
                    >
                      <!-- First Ad Slot -->
                      <div class="lg:col-12">
                        <ins
                          class="adsbygoogle"
                          style="display: block"
                          data-ad-format="autorelaxed"
                          data-ad-client="ca-pub-7232228922121987"
                          data-ad-slot="2232434790"
                        ></ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="first-section lg:order-1 sidebar-sticky">
          <div
            class="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
          >
            <div class="block-header panel pt-1">
              <h2
                class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
              >
                <a
                  href="/category/relationship"
                  class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                  ><span>Relationship</span>
                  <i class="icon-1 fw-bold unicon-chevron-right"></i
                ></a>
              </h2>
            </div>
            <div class="block-content">
              <div
                class="row child-cols-12 g-2 lg:g-4 sep-x uc-grid uc-grid-stack"
              >
                <div
                  v-for="(item, key) in categoriesWithPost.Relationship"
                  :key="key"
                  class="uc-first-column"
                  :class="key != 0 ? 'uc-grid-margin' : ''"
                >
                  <article
                    v-if="key == 0"
                    class="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden uc-dark"
                  >
                    <div class="post-media panel overflow-hidden">
                      <div
                        class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3"
                      >
                        <img
                          class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          :src="item?.image"
                          :data-src="item?.image"
                          :alt="`${item.title}`"
                          data-uc-img="loading: lazy"
                        />
                      </div>
                    </div>
                    <div
                      class="position-cover bg-gradient-to-t from-black to-transparent opacity-90"
                    ></div>
                    <div
                      class="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white"
                    >
                      <div
                        class="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1"
                      >
                        <div class="actions">
                          <div class="hstack gap-1"></div>
                        </div>
                      </div>
                      <h3
                        class="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2"
                      >
                        <a
                          class="text-none text-white"
                          :href="`/${item.slug}`"
                          >{{ item.title }}</a
                        >
                      </h3>
                      <div
                        class="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"
                      >
                        <span>1min</span>
                      </div>
                    </div>
                    <a :href="`/${item.slug}`" class="position-cover"></a>
                  </article>
                  <article
                    v-else
                    class="post type-post panel uc-transition-toggle"
                  >
                    <div class="row child-cols g-2 lg:g-3" data-uc-grid>
                      <div>
                        <div
                          class="post-header panel vstack justify-between gap-1"
                        >
                          <h3 class="post-title h6 m-0 text-truncate-2">
                            <a
                              class="text-none hover:text-primary duration-150"
                              :href="`/${item.slug}`"
                              >{{ item.title }}</a
                            >
                          </h3>
                          <div
                            class="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"
                          >
                            <span>1h</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div
                          class="post-media panel overflow-hidden max-w-72px min-w-72px"
                        >
                          <div
                            class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1"
                          >
                            <img
                              class="media-cover image uc-transition-scale-up uc-transition-opaque"
                              :src="item?.image"
                              :data-src="item?.image"
                              :alt="`${item.title}`"
                              data-uc-img="loading: lazy"
                            />
                          </div>
                          <a :href="`/${item.slug}`" class="position-cover"></a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="third-section order-3 sidebar-sticky">
          <div
            class="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
          >
            <div class="block-header panel pt-1">
              <h2
                class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
              >
                <a
                  href="/category/bollywood"
                  class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                  ><span>Bollywood</span>
                  <i class="icon-1 fw-bold unicon-chevron-right"></i
                ></a>
              </h2>
            </div>
            <div class="block-content">
              <div
                class="row child-cols-12 g-2 lg:g-4 sep-x uc-grid uc-grid-stack"
              >
                <div
                  v-for="(item, key) in categoriesWithPost.Bollywood"
                  :key="key"
                  class="uc-first-column"
                  :class="key != 0 ? 'uc-grid-margin' : ''"
                >
                  <article
                    v-if="key == 0"
                    class="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden uc-dark"
                  >
                    <div class="post-media panel overflow-hidden">
                      <div
                        class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3"
                      >
                        <img
                          class="media-cover image uc-transition-scale-up uc-transition-opaque"
                          :src="item?.image"
                          :data-src="item?.image"
                          :alt="`${item.title}`"
                          data-uc-img="loading: lazy"
                        />
                      </div>
                    </div>
                    <div
                      class="position-cover bg-gradient-to-t from-black to-transparent opacity-90"
                    ></div>
                    <div
                      class="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white"
                    >
                      <div
                        class="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1"
                      >
                        <div class="actions">
                          <div class="hstack gap-1"></div>
                        </div>
                      </div>
                      <h3
                        class="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2"
                      >
                        <a
                          class="text-none text-white"
                          :href="`/${item.slug}`"
                          >{{ item.title }}</a
                        >
                      </h3>
                      <div
                        class="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"
                      >
                        <span>1min</span>
                      </div>
                    </div>
                    <a :href="`/${item.slug}`" class="position-cover"></a>
                  </article>
                  <article
                    v-else
                    class="post type-post panel uc-transition-toggle"
                  >
                    <div class="row child-cols g-2 lg:g-3" data-uc-grid>
                      <div>
                        <div
                          class="post-header panel vstack justify-between gap-1"
                        >
                          <h3 class="post-title h6 m-0 text-truncate-2">
                            <a
                              class="text-none hover:text-primary duration-150"
                              :href="`/${item.slug}`"
                              >{{ item.title }}</a
                            >
                          </h3>
                          <div
                            class="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"
                          >
                            <span>1h</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div
                          class="post-media panel overflow-hidden max-w-72px min-w-72px"
                        >
                          <div
                            class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1"
                          >
                            <img
                              class="media-cover image uc-transition-scale-up uc-transition-opaque"
                              :src="item?.image"
                              :data-src="item?.image"
                              :alt="`${item.title}`"
                              data-uc-img="loading: lazy"
                            />
                          </div>
                          <a :href="`/${item.slug}`" class="position-cover"></a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <article class="post type-post single-post py-4 lg:py-6 xl:py-9">
      <div class="panel mt-4 lg:mt-6 xl:mt-9">
        <div class="container max-w-lg"></div>
      </div>
    </article> -->

    <!-- Newsletter -->
  </div>

  <!-- Wrapper end -->
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "blog",
  head() {
    return {
      title: this.singlePost?.post.title,
      script: [
        {
          src: "https://jsc.adskeeper.com/site/1005501.js",
          async: true,
        },
      ],
      meta: [
        {
          name: "google-adsense-account",
          content: "ca-pub-7232228922121987",
        },
        // {
        //   itemprop: "og:image",
        //   content: this.singlePost?.post?.image,
        // },
        // {
        //   itemprop: "description",
        //   content: this.singlePost?.post?.excerpt,
        // },
        // {
        //   itemprop: "og:title",
        //   content: this.singlePost?.post?.title,
        // },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: this.singlePost?.post?.image,
        // },
        // {
        //   hid: "description",
        //   name: "description",
        //   content: this.singlePost?.post?.excerpt,
        // },
        // {
        //   hid: "og:title",
        //   property: "og:title",
        //   content: this.singlePost?.post?.title,
        // },
        // {
        //   hid: "og:description",
        //   property: "og:description",
        //   content: this.singlePost?.post?.excerpt,
        // },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: this.singlePost?.post?.image,
        // },
        // {
        //   hid: "og:image:width",
        //   property: "og:image:width",
        //   content: "1280",
        // },
        // {
        //   hid: "og:image:height",
        //   property: "og:image:height",
        //   content: "720",
        // },
      ],
    };
  },
  watch: {
    $route() {
      this.initAds();
    },
  },
  computed: {
    ...mapGetters({
      singlePost: "getSinglePost",
      categoriesWithPost: "getCategoriesWithPost",
    }),
    processedHtml() {
      return this.singlePost?.post.body
        .replace(/<oembed url="(.*?)"><\/oembed>/g, (match, url) => {
          // Convert the oembed URL to iframe
          const videoId = new URL(url).searchParams.get("v");
          if (videoId) {
            return `<div class="featured-image m-0 ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <iframe 
                        src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                      </iframe>
                    </div>`;
          }
          return "";
        })
        .replace(
          /<a href="(https:\/\/www\.instagram\.com\/reel\/[^\s"]+)"[^>]*>.*?<\/a>/g,
          (match, url) => {
            return `<blockquote class="instagram-media" 
                      data-instgrm-permalink="${url}" 
                      data-instgrm-version="14" 
                      style="background:#FFF; border:0; margin:0 auto; max-width:540px; padding:0; width:99.375%;">
                    </blockquote>`;
          }
        )
        .replace(
          /<a href="(https:\/\/x\.com\/[^\s"]+)"[^>]*>.*?<\/a>/g,
          (match, url) => {
            return `<blockquote class="twitter-tweet">
                      <a href="${url}"></a>
                    </blockquote>`;
          }
        );
    },
  },
  methods: {
    ...mapActions({
      fetchCategoriesWithPost: "fetchCategoriesWithPost",
    }),
    initAds() {
      const ads = document.querySelectorAll(".adsbygoogle");
      ads.forEach((ad) => {
        // Only initialize ads not already initialized
        if (!ad.hasAttribute("data-adsbygoogle-status")) {
          try {
            (adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("AdSense initialization error:", e);
          }
        }
      });
    },
  },
  async mounted() {
    if (process.client) {
      const scriptId = "adsbygoogle-script";

      // Ensure the script is only added once
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7232228922121987";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);

        script.onload = () => {
          this.initAds();
        };
      } else {
        this.initAds();
      }
    }
    (function (w, q) {
      w[q] = w[q] || [];
      w[q].push(["_mgc.load"]);
    })(window, "_mgq");
    await this.fetchCategoriesWithPost({});

    // Load Instagram script for embedding
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Process Instagram embeds
      window.instgrm.Embeds.process();
    }

    // Load Twitter script for embedding
    if (!window.twttr) {
      const twtScript = document.createElement("script");
      twtScript.src = "https://platform.twitter.com/widgets.js";
      twtScript.async = true;
      document.body.appendChild(twtScript);
    } else {
      window.twttr.widgets.load();
    }
  },
  updated() {
    // Ensure Instagram and Twitter embeds are processed on updates
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  },

  async asyncData({ params, store }) {
    if (params.pathMatch) {
      await store.dispatch("fetchPostBySlug", {
        slug: params.pathMatch,
      });
    }
  },
};
</script>

<style scoped>
.article {
  overflow-y: auto;
  max-height: 100vh;
}
.instagram-media,
.twitter-tweet {
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
}
</style>
