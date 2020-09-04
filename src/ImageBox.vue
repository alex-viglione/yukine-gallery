<template>
    <div id="image_box">
        <h1 class="noselect" @click="prev" v-show="hasPrev()"><</h1>
        <div class="inner">
            <img :src="images[index]" alt="">
        </div>
        <h1 class="noselect" @click="next" v-show="hasNext()">></h1>
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
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(34, 34, 34, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
}

#image_box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.inner {
    width: 80%;
    height: 90%;
    padding: 2em;
}

h1 {
    cursor: pointer;
    padding: 0 20px;
    color: white;
}

h1:hover {
    color: #ff17b9; 
}
</style>
