<template>
  <div class="about">
    <h1>This is an about page</h1>
    x:<input type="text" v-model="iMsg">
    <p> {{ iMsg | capitalize | tail-capitalize }} </p>
  </div>
</template>

<style scoped>
  .about {
    text-align: center;
  }
</style>

<script>
export default {
  data() {
    return {
      iMsg : ''
    }
  }
}
</script>