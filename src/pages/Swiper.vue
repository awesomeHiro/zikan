<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide class="menu left">
      <left />
    </swiper-slide>
    <swiper-slide class="content center">
      <center />
    </swiper-slide>
    <swiper-slide class="menu right">
      <right />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

// import left from "pages/left.vue";
// import center from "pages/center.vue";
// import right from "pages/right.vue";
import left from "pages/tmp.vue";
import center from "pages/tmp.vue";
import right from "pages/tmp.vue";

export default {
  components: {
    left,
    center,
    right,
  },
  data() {
    return {
      menuOpened: false,
      swiper: {
        // defalut value to prevent error
        activeIndex: 1,
        updateAutoHeight: () => {},
      },
      swiperOption: {
        init: false,
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 10,
        on: {
          slideChange: () => {
            this.$store.commit("meta/setActiveIndex", this.swiper.activeIndex);
          },
        },
      },
    };
  },
  computed: {
    activeIndex() {
      return this.$store.getters["meta/activeIndex"];
    },
  },
  mounted() {
    this.$refs.swiper.$swiper.init();
    this.swiper = this.$refs.swiper.$swiper;
  },
};
</script>

<style lang="scss" scoped>
@import "assets/base.scss";
.swiper {
  .swiper-wrapper {
  }
  .swiper-container {
  }
  .menu {
    width: 95%;
    .left {
    }
    .right {
      -webkit-transform: translateX(15%);
      transform: translateX(15%);
    }
  }

  .content {
    .center {
    }
  }
}
</style>
