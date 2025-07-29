 // vite-plugin-svg-icons 类型声明
declare module 'virtual:svg-icons-register' {
    const content: any
    export default content
  }
  
  declare module 'virtual:svg-icons-names' {
    const iconNames: string[]
    export default iconNames
  }
  
  // SVG图标相关类型
  declare interface Window {
    __svg__icons__dom__?: HTMLElement
  }
  
  // 扩展全局类型
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        'svg': React.SVGProps<SVGSVGElement>
        'use': React.SVGProps<SVGUseElement>
      }
    }
  }
  
  export {}