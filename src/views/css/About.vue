<style>
:root {
  --main-font: 'Cochin';
  --main-color: red;
}
</style>
<style scoped>
.box div {
  padding: 0.5em;
  border-radius: 1em;
  border: 1px solid #eee;
  display: initial;
  margin: 1em;
}

.small {
  font-size: 14px;
  font-family: var(--main-font);
}

.large {
  font-size: 20px;
  color: var(--main-color);
}
</style>

<template>
  <div class="box">
    <div class="small">small</div>
    <div class="large">large</div>
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
