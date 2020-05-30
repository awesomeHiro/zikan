<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <q-input v-model="count" label="Standard" />
        </div>
        <div class="col">
          .col
        </div>
      </div>

      <div class="row">
        <div class="col">
          {{ count }}
        </div>
        <div class="col">
          {{ count }}
        </div>
        <div class="col">
          {{ count }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  computed: {
    count: {
      get() {
        return this.$store.state.tasks.count;
      },
      set(val) {
        this.$store.commit("tasks/increment", val);
      },
    },
  },
};
</script>
