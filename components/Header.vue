<template>
  <!-- Header start -->
  <div>
    <!--  Menu panel -->
    <div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
      <div
        class="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white"
      >
        <header
          class="uc-offcanvas-header hstack justify-between items-center pb-4 bg-white dark:bg-gray-900"
        >
          <div class="uc-logo">
            <a href="/" class="h5 text-none text-gray-900 dark:text-white">
              <!-- <img
                class="w-32px"
                src="/Images/common/logo-icon.svg"
                alt="News5"
                data-uc-svg
              /> -->

              <img
                class="w-64px"
                src="/Images/demo-seven/common/new-logo.png"
                alt="News5"
                data-uc-svg
              />
            </a>
          </div>
          <button
            class="uc-offcanvas-close p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
          >
            <i class="unicon-close"></i>
          </button>
        </header>

        <div class="panel">
          <ul class="nav-y gap-narrow fw-bold fs-5" data-uc-nav>
            <li v-for="(item, key) in categories" :key="key">
              <a :href="`/category/${item.slug}`">{{ item.title }} </a>
            </li>

            <!-- <li class="hr opacity-10 my-1"></li>
            <li><a href="sign-in.html">Sign in</a></li>
            <li><a href="sign-up.html">Create an account</a></li> -->
          </ul>
          <!-- <ul class="social-icons nav-x mt-4">
            <li>
              <a href="#"><i class="unicon-logo-medium icon-2"></i></a>
              <a href="#"><i class="unicon-logo-x-filled icon-2"></i></a>
              <a href="#"><i class="unicon-logo-instagram icon-2"></i></a>
              <a href="#"><i class="unicon-logo-pinterest icon-2"></i></a>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
    <header
      class="uc-header header-seven uc-navbar-sticky-wrap z-999"
      data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav class="uc-navbar-container text-gray-900 dark:text-white fs-6 z-1">
        <div
          class="uc-top-navbar panel z-3 overflow-hidden bg-primary-600 swiper-parent"
          style="--uc-nav-height: 32px"
          data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div class="container container-full">
            <div class="uc-navbar-item">
              <div
                class="swiper swiper-ticker swiper-ticker-sep px-2"
                style="--uc-ticker-gap: 32px"
                data-uc-swiper="items: auto; gap: 32; center: true; center-bounds: true; autoplay: 10000; speed: 10000; autoplay-delay: 0.1; loop: true; allowTouchMove: false; freeMode: true; autoplay-disableOnInteraction: true;"
              >
                <div class="swiper-wrapper">
                  <div
                    v-for="(item, key) in headlines?.posts?.data"
                    :key="key"
                    class="swiper-slide text-white"
                  >
                    <div class="type-post post panel">
                      <a
                        :href="`/${item.slug}`"
                        class="fs-7 fw-normal text-none text-inherit"
                        >{{ item.title }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="uc-center-navbar panel hstack z-2 max-h-55px d-none lg:d-flex"
          data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div class="container max-w-xl">
            <div class="navbar-container hstack border-bottom">
              <div class="uc-navbar-center gap-2 lg:gap-3 flex-1">
                <ul
                  class="uc-navbar-nav gap-2 justify-between flex-1 fs-6 fw-bold"
                  style="--uc-nav-height: 8px"
                >
                  <li class="mt-4">
                    <a href="/">
                      <img
                        class="w-120px h-72px"
                        src="/Images/demo-seven/common/new-logo.png"
                        alt="News5"
                        data-uc-svg
                    /></a>
                  </li>
                  <li
                    class="xl:py-6"
                    v-for="(item, key) in categories"
                    :key="key"
                  >
                    <a :href="`/category/${item.slug}`"
                      >{{
                        item.title == "StockMarket"
                          ? "Stock Market"
                          : item.title
                      }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="d-block md:d-none uc-bottom-navbar panel z-1">
          <div class="container max-w-xl">
            <div
              class="uc-navbar min-h-72px lg:min-h-100px"
              data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div class="uc-navbar-left">
                <div>
                  <a
                    class="uc-menu-trigger icon-2"
                    href="#uc-menu-panel"
                    data-uc-toggle
                  ></a>
                </div>
                <div class="uc-logo d-block md:d-none">
                  <a href="/">
                    <img
                      class="w-100px text-dark dark:text-white"
                      src="/Images/demo-seven/common/new-logo.png"
                      alt="News5"
                      data-uc-svg
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <!-- Header end -->
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      categories: "getCategories",
      headlines: "getHeadlines",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "fetchCategories",
      fetchHeadlines: "fetchHeadlines",
    }),
  },
  async beforeMount() {
    await this.fetchCategories({});
    await this.fetchHeadlines({ slug: "latest" });
  },
};
</script>
