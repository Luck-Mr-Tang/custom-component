import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

class LoadingManager {
  private loadingInstance: LoadingInstance | null = null
  private count = 0

  // 显示loading
  show() {
    if (this.count === 0) {
      this.loadingInstance = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    this.count++
  }

  // 隐藏loading
  hide() {
    if (this.count <= 0) return
    this.count--
    if (this.count === 0) {
      this.loadingInstance?.close()
      this.loadingInstance = null
    }
  }

  // 强制关闭所有loading
  clear() {
    if (this.loadingInstance) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
    this.count = 0
  }
}

export const loadingManager = new LoadingManager()