<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Callback',

  created() {
    const {
      state,
      code,
    } = this.$route.query;

    if (state && code) {
      this.callback({
        state,
        code,
      });
    } else {
      this.goTo404();
    }
  },

  methods: {
    ...mapActions('user', [
      'callback',
    ]),

    ...mapActions('navigation', [
      'goTo404',
    ]),
  },
});
</script>
