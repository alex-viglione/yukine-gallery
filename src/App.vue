<template>
    <div id="app">
        <h1>Yukine Gallery</h1>
        <h3>Welcome to the Chris Zone</h3>
        <div id="gallery">
            <img v-for="i in img_paths" class="pic" img alt="Beautiful Chris" :src="i.pathlong">
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          img_paths: []
      }
  },
  methods: {
      importAll(r) {
          r.keys().forEach(key => (this.img_paths.push({pathlong: r(key)})));
      }
  },
  mounted() {
    {
        this.importAll(require.context('./assets/'));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(300px, auto);
    padding: 0 1em;
}

.pic {
    width: 100%;
    height: 100%;
    object-fit: cover
}
</style>
