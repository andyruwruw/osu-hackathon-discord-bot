<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Redirect',

  created() {
    this.$route.query.state;
    this.$route.query.code;
  }
});
</script>