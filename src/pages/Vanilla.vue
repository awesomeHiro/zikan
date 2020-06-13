<template>
  <div class="slider">
    <div class="slides">
      <div id="left">
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
        LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT
      </div>
      <div id="center">
        CENTER
      </div>
      <div id="right">
        RIGHT
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.slider {
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;

  overflow: auto;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

#left,
#right {
  width: 90vw;
  overflow: auto;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  margin-left: 5px;
  margin-right: 5px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 1s;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

html,
body {
  height: 100%;
  overflow: hidden;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
