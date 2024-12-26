<template>
  <!-- Footer start -->
  <footer id="uc-footer" class="uc-footer panel uc-dark">
    <div
      class="footer-outer py-4 lg:py-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-opacity-50"
    >
      <div class="container max-w-xl">
        <div class="footer-inner vstack gap-6 xl:gap-8">
          <div
            class="uc-footer-bottom panel vstack gap-4 justify-center lg:fs-5"
          >
            <nav class="footer-nav">
              <ul
                class="nav-x gap-2 lg:gap-4 justify-center text-center text-uppercase fw-medium"
              >
                <li v-for="(item, key) in categories" :key="key">
                  <a
                    class="hover:text-gray-900 dark:hover:text-white duration-150"
                    :href="`/category/${item.slug}`"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </nav>
            <div
              class="footer-copyright vstack sm:hstack justify-center items-center gap-1 lg:gap-2"
            >
              <p>dailytimesnewz © 2024, All rights reserved.</p>
              <ul class="nav-x gap-2 fw-medium">
                <li>
                  <a
                    class="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150"
                    href="/privacy-policy"
                    >Privacy notice</a
                  >
                </li>
                <li>
                  <a
                    class="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150"
                    href="/terms-of-condition"
                    >Terms of condition</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer end -->
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
    }),
  },
};
</script>
