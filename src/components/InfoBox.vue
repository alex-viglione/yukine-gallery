<template>
    <section id="info_box">
        <div class="wrapper">
            <h4>What is this page?</h4>
            <p>Gallery used to showcase all the images used by
            my twitter bot : <a href="https://twitter.com/yukinebotine" target="__blank">Robochris</a>
            , as well as serve as a collection of pics of best girl.</p>

            <p>This page is a non-profit project, all images used are screenshots taken from the animated
            series <a href="https://www.symphogear.com/" target="__blank">Senki Zesshou Symphogear</a>.</p>
            <p>Fan edits may be included as well.</p>
    
            <h4>Contributions</h4>
            <p>You can contribute to filling this gallery (and thus the bot's pool of images), by tweeting
            the image directly to <a href="https://twitter.com/nreptile2" target="__blank">@yukinebotine</a>
            , or to my own account <a href="https://twitter.com/nreptile2" target="__blank">@nreptile2</a>.
            I will by default add your twitter handle to this section, unless specified otherwise.</p>
    
            <h4>Links</h4>
            <div class="links">
                <a v-for="link in links" :href="link.url" target="__blank">{{link.name}}</a>
            </div>

            <h6>Site built with Vue.js, hosted with Netlify</h6>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {name: 'Github (yukine-gallery)', url: 'https://github.com/alex-viglione/yukine-gallery'},
                {name: 'My webpage', url: 'https://alex-viglione.github.io/'},
                {name: 'waifu2x (image upscaler)', url: 'http://waifu2x.udp.jp/index.html'}
            ]
        }
    }
}
</script>

<style scoped>
#info_box {
    background: rgba(34, 34, 34, 0.9);
    color: white;
    margin: 1em 1em 0 1em;
    padding-bottom: 1em;
}

.links {
    display: flex;
    width: 70%;
    margin: auto;
    justify-content: space-around;
}

.wrapper {
    width: 80%;
    margin: auto;
}

h4 {
    padding-top: 1em;
    padding-bottom: .4em;
}

a {
    color: #FF1744;
    font-weight: bold;
    text-decoration: none;
}

a:visited {
    color: #ff17b9;
}

h6 {
    margin-top: 2em;
}
</style>
