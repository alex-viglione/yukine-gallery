<template>
    <div id="app">

        <header>
            <h1>Yukine Gallery</h1>
            <h3>
                Welcome to the Chris Zone
                <button id="toggle_info" @click="show_infobox = !show_infobox"><h4>INFO</h4></button>
            </h3>
        </header>

        <InfoBox v-if="show_infobox" />

        <h1 class="xbutton noselect" v-if="show_imgbox" @click="show_imgbox = false">x</h1>
        
        <div id="gallery">
            <figure class="img_wrapper" v-lazyload v-for="i in img_paths" >
                <img class="pic" :data-url="i" ref="thumbn"
                @click="selectedPic = i; show_imgbox = true">
            </figure>
        </div>

        <ImageBox @outsideClick="show_imgbox = false" 
        :images="img_paths" :index="picIndex" 
        v-show="show_imgbox" />

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

header h3 {
    display: flex;
    justify-content: center;
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

#toggle_info {
    border-radius: 0px;
    border: 1px solid white;
    background: none;
    color: white;
    outline: none;
    cursor: pointer;
    margin-left: 1em;
}

#toggle_info:hover {
    color: #FF1744;
}

#toggle_info:active {
    color: white;
    background: #FF1744;
    border: none;
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
    opacity: 0.9;
    transition: height .2s, opacity .2s;
}

.pic:hover {
    height: 100%;
    opacity: 1;
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
    color: white;
    cursor: pointer;
    z-index: 10;
    top: 20px;
    right: 20px;
}

.xbutton:hover {
    color: #ff17b9;
}

.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

@media screen and (max-width: 600px) {
    #gallery {
        grid-auto-rows: minmax(auto, 100px);
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
