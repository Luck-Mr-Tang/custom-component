import { DirectiveBinding, VNode } from 'vue'

export const permission = {
    mounted(_el: HTMLElement, binding: DirectiveBinding, _vnode: VNode) {
        console.log(binding)
    },
    unmounted(_el: HTMLElement, _binding: DirectiveBinding, _vnode: VNode) {
        // 清理逻辑
    },
}