<template>
  <q-page class="flex flex-center">
    <div>
      <div class="q-pa-md" style="padding: 0px; margin: 0px;">
        <q-list bordered separator>
          <q-slide-item @left="onLeft" @right="onRight">
            <template v-slot:left>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </template>
            <template v-slot:right>
              <div class="q-pa-md" style="max-width: 350px">
                <q-scroll-area>
                  <div v-for="n in 100" :key="n" class="q-py-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </q-scroll-area>
              </div>
            </template>
            <q-scroll-area>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img
                      src="https://cdn.quasar.dev/img/avatar6.jpg"
                      draggable="false"
                    />
                  </q-avatar>
                </q-item-section>
                <div v-for="n in 100" :key="n" class="q-py-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <q-item-section>
                  <div class="q-pa-md" style="max-width: 350px">
                    <q-list bordered separator>
                      <q-item clickable v-ripple>
                        <q-item-section>Single line item</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label>Item with caption</q-item-label>
                          <q-item-label caption>Caption</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label overline>OVERLINE</q-item-label>
                          <q-item-label>Item with caption</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                  Text onlyText onlyText onlyText onlyText onlyText onlyText
                  onlyText onlyText onlyText onlyText onlyText onlyText onlyText
                  only
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-slide-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    onLeft({ reset }) {
      console.log(this.$q);
      // this.$q.notify('Left action triggered. Resetting in 1 second.')
      this.finalize(reset);
    },

    onRight({ reset }) {
      // this.$q.notify('Right action triggered. Resetting in 1 second.')
      this.finalize(reset);
    },

    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 1000);
    }
  },

  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
