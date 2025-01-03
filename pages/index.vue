<template>
  <client-only>
    <!-- Wrapper start -->
    <div id="wrapper" class="wrap overflow-hidden-x">
      <!-- Section start -->
      <div class="section panel overflow-hidden swiper-parent border-top">
        <div class="section-outer panel py-2 lg:py-4 dark:text-white">
          <div class="container max-w-xl">
            <div class="section-inner panel vstack gap-2">
              <div
                class="block-layout carousel-layout vstack gap-2 lg:gap-3 panel"
              >
                <div class="block-content panel">
                  <div
                    class="swiper"
                    data-uc-swiper="items: 1; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;"
                    data-uc-swiper-s="items: 3; gap: 24;"
                    data-uc-swiper-l="items: 4; gap: 24;"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="(item, key) in categoriesWithPost.Latest"
                        :key="key"
                        class="swiper-slide"
                      >
                        <div>
                          <article
                            class="post type-post panel uc-transition-toggle gap-2"
                          >
                            <div class="row child-cols g-2" data-uc-grid>
                              <div class="col-auto">
                                <div
                                  class="post-media panel overflow-hidden max-w-64px min-w-64px"
                                >
                                  <div
                                    class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1"
                                  >
                                    <img
                                      class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      :src="item?.image"
                                      :data-src="item?.image"
                                      alt="Hidden Gems: Underrated Travel Destinations Around the World"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
                                </div>
                              </div>
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
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1"
                  >
                    <i class="icon-1 unicon-chevron-left"></i>
                  </div>
                  <div
                    class="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1"
                  >
                    <i class="icon-1 unicon-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section end -->

      <!-- Section start -->
      <!-- add section start -->
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
                      data-ad-slot="3330189197"
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
      <!-- add section end -->

      <!-- Section end -->

      <!-- Section start -->
      <div class="section panel overflow-hidden">
        <div class="section-outer panel">
          <div class="container max-w-xl">
            <div class="section-inner">
              <div
                class="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match"
                data-uc-grid
              >
                <div class="lg:col-4">
                  <div
                    class="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/politics"
                        >
                          <span>Politics</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="panel row child-cols-12 md:child-cols g-2 lg:g-4 col-match sep-y"
                        data-uc-grid
                      >
                        <!-- <div class="col-12 md:col-6 order-0 md:order-1">
                        <div class="widget ad-widget vstack gap-2">
                          <div class="widget-title text-center">
                            <h5 class="fs-7 ft-tertiary text-uppercase m-0">
                              Sponsore
                            </h5>
                          </div>
                          <div class="widget-content">
                            <a
                              class="cstack max-w-300px mx-auto text-none"
                              href="https://themeforest.net/user/reacthemes/portfolio"
                              target="_blank"
                              rel="nofollow"
                            >
                              <img
                                class="d-none sm:d-block"
                                src="/Images/common/ad-desktop.jpg"
                                alt="Ad slot"
                              />
                              <img
                                class="d-block sm:d-none"
                                src="/Images/common/ad-mobile.jpg"
                                alt="Ad slot"
                              />
                            </a>
                          </div>
                        </div>
                      </div> -->
                        <div class="order-1 md:order-0">
                          <div
                            class="row child-cols-12 g-2 lg:g-4 sep-x"
                            data-uc-grid
                          >
                            <div
                              v-for="(item, key) in categoriesWithPost.Politics"
                              :key="key"
                            >
                              <article
                                class="post type-post panel uc-transition-toggle"
                              >
                                <div
                                  class="row child-cols g-2 lg:g-3"
                                  data-uc-grid
                                >
                                  <div>
                                    <div
                                      class="post-header panel vstack justify-between gap-1"
                                    >
                                      <h3
                                        class="post-title h6 m-0 text-truncate-2"
                                      >
                                        <a
                                          class="text-none hover:text-primary duration-150"
                                          :href="`/${item.slug}`"
                                          >{{ item.title }}</a
                                        >
                                      </h3>
                                      <div
                                        class="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"
                                      >
                                        <span>12h</span>
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
                                      <a
                                        :href="`/${item.slug}`"
                                        class="position-cover"
                                      ></a>
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
                <div class="lg:col-4">
                  <div
                    class="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/india"
                        >
                          <span>India</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <div
                          v-for="(item, key) in categoriesWithPost.India"
                          :key="key"
                        >
                          <article
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
                                    <span>2mo</span>
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
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-4">
                  <div
                    class="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/entertainment"
                        >
                          <span>Entertainment</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <div
                          v-for="(
                            item, key
                          ) in categoriesWithPost.Entertainment"
                          :key="key"
                        >
                          <article
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
                                    <span>2mo</span>
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
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <!-- <article
                            class="post type-post panel uc-transition-toggle"
                          > -->
                          <!-- <div class="row child-cols g-2 lg:g-3" data-uc-grid> -->

                          <!-- </div> -->
                          <!-- </article> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section end -->

      <!-- Section start -->
      <div class="section panel overflow-hidden swiper-parent">
        <div class="section-outer panel py-4 lg:py-6 dark:text-white">
          <div class="container max-w-xl">
            <div class="section-inner panel vstack gap-2">
              <div
                class="block-layout carousel-layout vstack gap-2 lg:gap-3 panel"
              >
                <div class="block-header panel pt-1 border-top">
                  <h2
                    class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                  >
                    <a
                      class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                      href="/category/relationship"
                    >
                      <span>Relationship</span>
                      <i class="icon-1 fw-bold unicon-chevron-right"></i>
                    </a>
                  </h2>
                </div>

                <div class="block-content panel">
                  <div
                    class="swiper"
                    data-uc-swiper="items: 2; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;"
                    data-uc-swiper-s="items: 3; gap: 24;"
                    data-uc-swiper-l="items: 5; gap: 24;"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="(item, key) in categoriesWithPost.Relationship"
                        :key="key"
                        class="swiper-slide"
                      >
                        <div>
                          <article
                            class="post type-post panel uc-transition-toggle vstack gap-2"
                          >
                            <div class="post-media panel overflow-hidden">
                              <div
                                class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2"
                              >
                                <img
                                  class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  :src="item?.image"
                                  :data-src="item?.image"
                                  :alt="`${item.title}`"
                                  data-uc-img="loading: lazy"
                                />
                              </div>
                              <a
                                :href="`/${item.slug}`"
                                class="position-cover"
                              ></a>
                            </div>
                            <div class="post-header panel vstack gap-1">
                              <h3 class="post-title h6 m-0 text-truncate-2">
                                <a
                                  class="text-none hover:text-primary duration-150"
                                  :href="`/${item.slug}`"
                                  >{{ item.title }}</a
                                >
                              </h3>
                              <div
                                class="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block"
                              >
                                <div>
                                  <div class="post-date hstack gap-narrow">
                                    <span>23d</span>
                                  </div>
                                </div>
                                <div>·</div>
                                <div>
                                  <a
                                    href="#post_comment"
                                    class="post-comments text-none hstack gap-narrow"
                                  >
                                    <i class="icon-narrow unicon-chat"></i>
                                    <span>15</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px z-1"
                  >
                    <i class="icon-1 unicon-chevron-left"></i>
                  </div>
                  <div
                    class="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px z-1"
                  >
                    <i class="icon-1 unicon-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section end -->

      <!-- Section start -->
      <div class="section panel overflow-hidden">
        <div class="section-outer panel">
          <div class="container max-w-xl">
            <div class="section-inner">
              <div
                class="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match"
                data-uc-grid
              >
                <div class="lg:col-4 order-0 lg:order-2">
                  <div
                    class="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/gujrat"
                        >
                          <span>Gujrat</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="panel row child-cols-12 md:child-cols g-2 lg:g-4 col-match sep-y"
                        data-uc-grid
                      >
                        <!-- <div class="col-12 md:col-6 order-0 md:order-1">
                        <div>
                          <div class="widget ad-widget vstack gap-2">
                            <div class="widget-title text-center">
                              <h5 class="fs-7 ft-tertiary text-uppercase m-0">
                                Sponsore
                              </h5>
                            </div>
                            <div class="widget-content">
                              <a
                                class="cstack max-w-300px mx-auto text-none"
                                href="https://themeforest.net/user/reacthemes/portfolio"
                                target="_blank"
                                rel="nofollow"
                              >
                                <img
                                  class="d-none sm:d-block"
                                  src="/Images/common/ad-desktop.jpg"
                                  alt="Ad slot"
                                />
                                <img
                                  class="d-block sm:d-none"
                                  src="/Images/common/ad-mobile.jpg"
                                  alt="Ad slot"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> -->
                        <div class="order-1 md:order-0">
                          <div
                            class="row child-cols-12 g-2 lg:g-4 sep-x"
                            data-uc-grid
                          >
                            <div
                              v-for="(item, key) in categoriesWithPost.Gujrat"
                              :key="key"
                            >
                              <article
                                class="post type-post panel uc-transition-toggle"
                              >
                                <div
                                  class="row child-cols g-2 lg:g-3"
                                  data-uc-grid
                                >
                                  <div>
                                    <div
                                      class="post-header panel vstack justify-between gap-1"
                                    >
                                      <h3
                                        class="post-title h6 m-0 text-truncate-2"
                                      >
                                        <a
                                          class="text-none hover:text-primary duration-150"
                                          :href="`/${item.slug}`"
                                          >{{ item.title }}</a
                                        >
                                      </h3>
                                      <div
                                        class="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"
                                      >
                                        <span>7d</span>
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
                                      <a
                                        :href="`/${item.slug}`"
                                        class="position-cover"
                                      ></a>
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
                <div class="lg:col-4 order-1">
                  <div
                    class="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/bollywood"
                        >
                          <span>Bollywood</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <div
                          v-for="(item, key) in categoriesWithPost.Bollywood"
                          :key="key"
                        >
                          <article
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
                                    <span>55min</span>
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
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-4 order-2">
                  <div
                    class="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top"></div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <ins
                          class="adsbygoogle"
                          style="display: block"
                          data-ad-client="ca-pub-7232228922121987"
                          data-ad-slot="8462268399"
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
        </div>
      </div>

      <!-- Section end -->

      <!-- Section start -->
      <div class="section panel overflow-hidden">
        <div class="section-outer panel py-4 lg:py-6 dark:text-white">
          <div class="container max-w-xl">
            <div class="section-inner">
              <div
                class="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match"
                data-uc-grid
              >
                <div class="lg:col-4">
                  <div
                    class="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/technology"
                        >
                          <span>Technology</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <div
                          v-for="(item, key) in categoriesWithPost.Technology"
                          :key="key"
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
                            <a
                              :href="`/${item.slug}`"
                              class="position-cover"
                            ></a>
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
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-4">
                  <div
                    class="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/business"
                        >
                          <span>Business</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <div
                          v-for="(item, key) in categoriesWithPost.Business"
                          :key="key"
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
                            <a
                              :href="`/${item.slug}`"
                              class="position-cover"
                            ></a>
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
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-4">
                  <div
                    class="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden"
                  >
                    <div class="block-header panel pt-1 border-top">
                      <h2
                        class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                      >
                        <a
                          class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                          href="/category/stock-market"
                        >
                          <span>Stock Market</span>
                          <i class="icon-1 fw-bold unicon-chevron-right"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="block-content">
                      <div
                        class="row child-cols-12 g-2 lg:g-4 sep-x"
                        data-uc-grid
                      >
                        <div
                          v-for="(item, key) in categoriesWithPost.StockMarket"
                          :key="key"
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
                            <a
                              :href="`/${item.slug}`"
                              class="position-cover"
                            ></a>
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
                                  <a
                                    :href="`/${item.slug}`"
                                    class="position-cover"
                                  ></a>
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
          </div>
        </div>
      </div>
      <!-- <div class="section panel mb-4 lg:mb-6" style="min-height: 280px">
        <div class="section-outer panel">
          <div class="container max-w-xl">
            <div class="section-inner panel vstack gap-4">
              <div class="section-content">
                <div
                  class="row child-col-12 lg:child-cols g-4 lg:g-6 col-match"
                  style="min-height: 280px"
                >
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
      </div> -->

      <!-- Section end -->

      <!-- Section start -->
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
                      data-ad-slot="1281481053"
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
      <div id="latest_news" class="latest-news section panel">
        <div class="section-outer panel py-4 lg:py-6">
          <div class="container max-w-xl">
            <div class="section-inner">
              <div
                class="content-wrap row child-cols-12 g-4 lg:g-6"
                data-uc-grid
              >
                <div class="md:col-12">
                  <div class="main-wrap panel vstack gap-3 lg:gap-6">
                    <div
                      class="block-layout grid-layout vstack gap-2 panel overflow-hidden"
                    >
                      <div class="block-header panel pt-1 border-top">
                        <h2
                          class="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white"
                        >
                          <a
                            class="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150"
                            href="/category/latest"
                          >
                            <span>Latest</span>
                            <i class="icon-1 fw-bold unicon-chevron-right"></i>
                          </a>
                        </h2>
                      </div>
                      <div class="block-content">
                        <div class="row child-cols-12 g-2 lg:g-4 sep-x">
                          <div
                            v-for="(item, key) in categoriesWithPost.Latest"
                            :key="key"
                          >
                            <article
                              class="post type-post panel uc-transition-toggle"
                            >
                              <div
                                class="row child-cols g-2 lg:g-3"
                                data-uc-grid
                              >
                                <div class="col-auto">
                                  <div
                                    class="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px"
                                  >
                                    <div
                                      class="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2"
                                    >
                                      <img
                                        class="media-cover image uc-transition-scale-up uc-transition-opaque"
                                        :src="item?.image"
                                        :data-src="item?.image"
                                        :alt="`${item.title}`"
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                    <a
                                      :href="`/${item.slug}`"
                                      class="position-cover"
                                    ></a>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    class="post-header panel vstack justify-between gap-1"
                                  >
                                    <h3
                                      class="post-title h5 lg:h4 m-0 text-truncate-2"
                                    >
                                      <a
                                        class="text-none hover:text-primary duration-150"
                                        :href="`/${item.slug}`"
                                        >{{ item.title }}</a
                                      >
                                    </h3>
                                  </div>
                                  <p
                                    class="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1"
                                  >
                                    {{ item.excerpt }}
                                  </p>
                                  <div class="post-link">
                                    <a
                                      :href="`/${item.slug}`"
                                      class="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white"
                                    >
                                      <span>Read more</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div data-type="_mgwidget" data-widget-id="1717791"></div>
                      <div class="block-footer cstack lg:mt-2">
                        <a
                          href="/category/latest"
                          class="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white border w-100"
                        >
                          <span>Load more posts</span>
                          <i class="icon icon-1 unicon-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="md:col-3">
                <div
                  class="sidebar-wrap panel vstack gap-2 pb-2"
                  data-uc-sticky="end: .content-wrap; offset: 150; media: @m;"
                >
                  <div
                    class="widget ad-widget vstack gap-2 text-center p-2 border"
                  >
                    <div class="widgt-content">
                      <a
                        class="cstack max-w-300px mx-auto text-none"
                        href="https://themeforest.net/user/reacthemes/portfolio"
                        target="_blank"
                        rel="nofollow"
                      >
                        <img
                          class="d-block dark:d-none"
                          src="/Images/common/ad-slot-aside.jpg"
                          alt="Ad slot"
                        />
                        <img
                          class="d-none dark:d-block"
                          src="/Images/common/ad-slot-aside-2.jpg"
                          alt="Ad slot"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    class="widget ad-widget vstack gap-2 text-center p-2 border"
                  >
                    <div class="widgt-content">
                      <a
                        class="cstack max-w-300px mx-auto text-none"
                        href="https://themeforest.net/user/reacthemes/portfolio"
                        target="_blank"
                        rel="nofollow"
                      >
                        <img
                          class="d-block dark:d-none"
                          src="/Images/common/ad-slot-aside.jpg"
                          alt="Ad slot"
                        />
                        <img
                          class="d-none dark:d-block"
                          src="/Images/common/ad-slot-aside-2.jpg"
                          alt="Ad slot"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section end -->
    </div>

    <!-- Wrapper end -->
  </client-only>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  head() {
    return {
      title: "Daily Times | News",
      script: [
        {
          src: "https://jsc.adskeeper.com/site/1005501.js",
          async: true,
        },
      ],
      meta: [
        { name: "google-adsense-account", content: "ca-pub-7232228922121987" },
      ],
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      categoriesWithPost: "getCategoriesWithPost",
    }),
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

    // this.$setMeta("Dynamic Page Title", "Dynamic description for this page");
  },
};
</script>
<style lang="css" scoped>
div[data-widget-id="1717791"] {
  min-height: 300px;
}
</style>
