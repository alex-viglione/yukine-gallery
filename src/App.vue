<template>
    <div id="app">

        <header>
            <h1>Yukine Gallery [WIP]</h1>
            <h3>Welcome to the Chris Zone</h3>
            <button @click="show_infobox = !show_infobox">Show Info</button>
        </header>

        <InfoBox v-if="show_infobox" />

        <h1 class="xbutton" v-if="show_imgbox" @click="show_imgbox = false">X</h1>
        
        <div id="gallery">
            <figure class="img_wrapper" v-lazyload v-for="i in img_paths" >
                <img class="pic" :data-url="i"
                @click="selectedPic = i; show_imgbox = true">
            </figure>
        </div>

        <ImageBox :images="img_paths" :index="picIndex" v-if="show_imgbox" />

    </div>
</template>

<script>
import ImageBox from './ImageBox.vue';
import lazyload from './lazyload.js';
import InfoBox from './components/InfoBox.vue';

export default {
    name: 'App',
    data() {
        return {
            img_paths: [],
            show_imgbox: false,
            show_infobox: false,
            selectedPic: ''
        }
    },
    computed: {
        picIndex() {
            if (!this.selectedPic) {
                return;
            }
            return this.img_paths.indexOf(this.selectedPic);
        }
    },
    components: {
        ImageBox,
        InfoBox
    },
    directives: {
        lazyload
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.img_paths.push(r(key))));
        },
        logger(data) {
            console.log(data);
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
* {
    margin: 0;
}

body {
    background: url('./Chris_After_Transformation_XV.png') no-repeat center center fixed;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 30px;
    background: rgba(0, 0, 0, 0.1);
}

header {
    background: rgba(34, 34, 34, 0.9);
    color: white;
    margin: 0 1em 0 1em;
    padding: 1em 0
}

#gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(auto, 300px);
    padding: 0 1em;
    margin: 1em 0;
}

.pic {
    cursor: pointer;
    width: 100%;
    height: 97%;
    object-fit: cover;
    transition: height .2s;
}

.pic:hover {
    height: 100%;
}

.img_wrapper {
    width: 100%;
    height: 100%;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
}

.xbutton {
    position: fixed;
    color: black;
    background-color: white;
    cursor: pointer;
    z-index: 10;
    top: 20px;
    right: 20px;
}

@media screen and (max-width: 600px) {
    #gallery {
        grid-auto-rows: minmax(auto, 100px);
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
