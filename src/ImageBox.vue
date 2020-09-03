<template>
    <div id="image_box">
        <h1>TEST COMPONENT</h1>
        <p>{{index}}</p>
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
