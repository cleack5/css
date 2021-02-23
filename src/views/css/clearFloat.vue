<style scoped>
.root {
  background-color: aqua;
  padding: 1em;
}

/* 确保root区域能包含media */
.root::after {
  display: block;
  clear: both;
  content: ' ';
}

.media {
  float: left;
  width: 50%;
  padding: 1.5em;
  background-color: #eee;
  border-radius: 0.5em;
}
</style>
<template>
  <div class="root">
    <div>Running tips</div>
    <div class="media">adfkjgkladfjglkadgjl</div>
    <div class="media">adfkjgkladfjglkadgjl</div>
    <div class="media">adfkjgkladfjglkadgjl</div>
    <div class="media">adfkjgkladfjglkadgjl</div>
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
