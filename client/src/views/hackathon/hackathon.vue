<template>
  <div :class="$style.component">
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Hackathon',

  created() {
    if (this.requiresLogin()) {
      this.handlePageLoad();
    }
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
      'requiresLogin',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {

}
</style>
