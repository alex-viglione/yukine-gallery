<template>
    <div id="app">

        <h1>Yukine Gallery [WIP]</h1>
        <h3>Welcome to the Chris Zone</h3>
        <InfoBox />

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

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 30px;
    background: url('./Chris_After_Transformation_XV.png') no-repeat center center fixed;
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
    height: 100%;
    object-fit: cover;
}

.img_wrapper {
    width: 100%;
    height: 100%;
    background-color: #222;
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
