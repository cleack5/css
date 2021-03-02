<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5em;
}

.grid > * {
  background-color: darkgray;
  color: #fff;
  padding: 2em;
  border-radius: 0.5em;
}
</style>
<template>
  <div class="grid">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
    <div class="e">e</div>
    <div class="f">f</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
