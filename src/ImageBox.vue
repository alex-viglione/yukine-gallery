<template>
    <div id="image_box">
        <h1 class="noselect" @click="prev" v-show="hasPrev()" ref="arrowPrev"><</h1>
        <div class="inner">
            <div class="image_wrap">
                <img :src="images[index]" 
                v-outsideclick="onOutsideClick">
            </div>
        </div>
        <h1 class="noselect" @click="next" v-show="hasNext()" ref="arrowNext">></h1>
    </div>
</template>

<script>
import { outsideclick } from './outside_click.js';

export default {
    data () {
        return {
            xDown: null,
            yDown: null,
        }
    },
    directives: {
        outsideclick
    },
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
        onOutsideClick() {
            this.$emit('outsideClick');
        },
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
        },
        handleTouchStart(e) {
            this.xDown = e.touches[0].clientX;
            this.yDown = e.touches[0].clientY;
        },
        handleTouchMove(e) {
            if (!this.xDown || !this.yDown) {
                return;
            }
            let xUp = e.touches[0].clientX;
            let yUp = e.touches[0].clientY;
            let xDiff = this.xDown - xUp;
            let yDiff = this.yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            this.xDown = null;
            this.yDown = null;
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown);

        window.addEventListener('touchstart', this.handleTouchStart, false);
        window.addEventListener('touchmove', this.handleTouchMove, false);
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

.image_wrap {
    height: 80%;
}

#image_box img {
    height: 100%;
    object-fit: contain;
    border: 1px solid white;
}

.inner {
    width: 80%;
    height: 100%;
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    cursor: pointer;
    padding: 0 20px;
    color: white;
    z-index: 10;
}

h1:hover {
    color: #ff17b9; 
}

@media screen and (max-width: 600px) {
    #image_box img {
        width: 100%;
        height: initial;
    }

    .image_wrap {
        height: initial;
        display: flex;
        align-items: center;
    }

    .inner {
        width: 92%;
        padding: 0;
    }

    h1 {
        display: none;
    }
}
</style>
