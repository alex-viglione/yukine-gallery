<template>
    <div id="image_box">
        <h1 @click="prev" v-show="hasPrev()"><</h1>
        <img :src="images[index]" alt="">
        <h1 @click="next" v-show="hasNext()">></h1>
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
    },
    methods: {
        hasNext() {
            return this.index + 1 < this.images.length;
        },
        hasPrev() {
            return this.index - 1 >= 0;
        },
        prev() {
            if (this.hasPrev()) {
                this.index -= 1;
            }
        },
        next() {
            if (this.hasNext()) {
                this.index += 1;
            }
        },
        onKeydown(e) {
            if (e.key === 'ArrowRight' && this.hasNext()) {
                this.next();
            } else if (e.key === 'ArrowLeft' && this.hasPrev()) {
                this.prev();
            } else {
                return;
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown);
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown);
    },
}
</script>

<style scoped>
#image_box {
    width: 100vw;
    background-color: #222;
}

#image_box img {
    width: 100%;
}
</style>
