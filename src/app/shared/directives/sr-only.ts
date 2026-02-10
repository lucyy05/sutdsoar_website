import type { Directive } from 'vue';

export const srOnlyDirective: Directive = {
    mounted(el: HTMLElement) {
        el.classList.add('sr-only');
    }
};
