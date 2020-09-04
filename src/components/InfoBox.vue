<template>
    <section id="info_box">
        <h4>What is this page?</h4>
        <p>Welcome, this is a gallery used to showcase all the images used by
        my twitter bot : <a href="https://twitter.com/yukinebotine" target="__blank">Robochris</a></p>

        <h4>Contributions</h4>
        <p>You can contribute to filling this gallery (and thus the bot's pool of images), by tweeting
        the image directly to <a href="https://twitter.com/nreptile2" target="__blank">@yukinebotine</a>
        , or to my own account <a href="https://twitter.com/nreptile2" target="__blank">@nreptile2</a>.
        I will by default add your twitter handle to this section, unless specified otherwise</p>

        <h4>Links</h4>
        <div class="links">
            <a v-for="link in links" :href="link.url" target="__blank">{{link.name}}</a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {name: 'Github (yukine-gallery)', url: 'https://github.com/alex-viglione/yukine-gallery'},
                {name: 'My webpage', url: 'https://alex-viglione.github.io/'}
            ]
        }
    }
}
</script>

<style scoped>
#info_box {
    background: #333;
    color: white;
}

.links {
    display: flex;
    width: 70%;
    margin: auto;
    justify-content: space-around;
}
</style>
