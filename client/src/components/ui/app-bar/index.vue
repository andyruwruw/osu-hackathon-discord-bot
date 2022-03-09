<template>
  <v-app-bar
    color="transparent"
    app
    dark
    flat>
    <span>
      OSU Hackathon Discord
    </span>

    <v-spacer />

    <app-bar-login v-if="!isLoggedIn" />

    <app-bar-user v-if="isLoggedIn" />
  </v-app-bar>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapGetters } from 'vuex';

// Local Imports
import AppBarLogin from './login.vue';
import AppBarUser from './user.vue';

export default Vue.extend({
  name: 'AppBar',

  components: {
    AppBarLogin,
    AppBarUser,
  },

  computed: {
    ...mapGetters('user', [
      'isLoggedIn',
    ]),
  },
});
</script>

<style lang="scss" module>

</style>
