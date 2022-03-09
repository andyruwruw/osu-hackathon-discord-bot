<template>
  <div :class="$style.component">
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'AppBarUser',

  computed: {
    ...mapGetters('user', [
      'getUser',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {

}
</style>
