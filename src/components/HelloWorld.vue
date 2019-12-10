<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <h2>{{url}}</h2>
        <h3>{{ count }}</h3>
        <v-btn color="primary" @click="inc">increment</v-btn>
        <v-btn color="warning" @click="dec">decrement</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    inc() {
      this.$store.commit('increment', {step: 10})
    },
    dec() {
      this.$store.commit('DECREMENT', 5)
    }
  }
};
</script>
