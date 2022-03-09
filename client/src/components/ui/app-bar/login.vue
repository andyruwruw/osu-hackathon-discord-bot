<template>
  <v-btn
    color="primary"
    dark
    outlined
    @click="login">
    <v-icon left>
      mdi-github
    </v-icon>
    Login
  </v-btn>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'AppBarLogin',

  methods: {
    ...mapActions('user', [
      'login',
    ]),
  },
});
</script>
