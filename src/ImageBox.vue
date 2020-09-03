<template>
    <div id="image_box">
        <h1>DISPLAY COMPONENT [WIP]</h1>
        <img :src="images[index]" alt="">
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
        index: {
            type: Number,
            required: false,
        }
    }
}
</script>

<style scoped>
#image_box {
    width: 100vw;
    background-color: #222;
}
</style>
