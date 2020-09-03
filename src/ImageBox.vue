<template>
    <div id="image_box">
        <h1 @click="prev" v-show="hasPrev()"><</h1>
        <div class="inner">
            <img :src="images[index]" alt="">
        </div>
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
    position: fixed;
    z-index: 4;
    top: 0;
    width: 100%;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
}

#image_box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.inner {
    width: 60%;
    height: 60%;
    padding: 2em;
}

h1 {
    cursor: pointer;
    color: white;
}
</style>
