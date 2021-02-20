<style scoped>
.body {
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  color: #fff;
  background-color: #0072b0;
  border-radius: 0.5em;
}

.container {
  display: flex;
}

main {
  /* bug fix for ie */
  display: block;
}

.main {
  background-color: #ffffff;
  border-radius: 0.5em;
  float: left;
  width: 70%;
}

.sidebar {
  padding: 1.5em;
  background-color: #ffffff;
  border-radius: 0.5em;
  float: left;

  margin-left: 1.5em;
  width: 30%;
}
.widget + .widget {
  margin-top: 1.5em;
}
</style>
<template>
  <div class="body">
    <header>
      <h1>Franklin Running Club</h1>
    </header>
    <div class="container">
      <main class="main">
        <h2>Come join us!</h2>
        <p>
          The Franklin Running Club meets at 6:00pm every Thursday at the town
          square. Runs are three to five miles,at your own pace
        </p>
      </main>
      <aside class="sidebar">
        <div class="widget">Follow us on twritter</div>
        <div class="widget">Follow us on facebook</div>
      </aside>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/css/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
