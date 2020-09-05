import Vue from 'vue';

export const outsideclick = {
    // handle outside click
    bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            let clickedClass = event.target.classList[0];
            if (!(el === event.target || el.contains(event.target))) {
                if (clickedClass === 'pic' || clickedClass === 'noselect') {
                    return;
                } else {
                    vnode.context[binding.expression](event);
                }
            }
        };
        document.addEventListener('mousedown', el.clickOutsideEvent);
    },
    unbind(el) {
        document.removeEventListener('mousedown', el.clickOutsideEvent);
    }
}

Vue.directive('outsideclick', outsideclick);
