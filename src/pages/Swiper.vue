<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        ><q-page>
          <div class="row">
            <div class="col-12">
              left
            </div>
          </div>
        </q-page>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import left from "pages/tmp/left.vue";
import center from "pages/tmp/center.vue";
import right from "pages/tmp/right.vue";
export default {
  name: "swiper-example-scrollbar",
  title: "Scrollbar",
  components: {
    // left,
    // center,
    // right,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/css/swiper.scss";
</style>
