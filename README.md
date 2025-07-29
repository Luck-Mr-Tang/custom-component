# Vue Custom Element

## 🔧 技术栈

- **框架**：Vue 3.3+
- **语言**：TypeScript 5.0+
- **构建工具**：Vite 4.5+
- **UI 库**：Element Plus 2.3+
- **状态管理**：Pinia 2.1+
- **路由管理**：Vue Router 4.2+
- **样式预处理**：Sass/SCSS
- **包管理器**：pnpm
- **HTTP 客户端**：Axios

## 📦 安装

### 使用 npm

```bash
npm install vue-element-custom
```

### 使用 yarn

```bash
yarn add vue-element-custom
```

### 使用 pnpm

```bash
pnpm add vue-element-custom
```

## 🚀 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import CustomComponent from 'vue-element-custom'
import 'vue-element-custom/dist/style.css'

const app = createApp(App)
app.use(CustomComponent)
app.mount('#app')
```

### 按需引入

```typescript
import { install, requestUtils, userApi } from 'vue-element-custom'

// 只安装核心功能
app.use(install)

// 使用工具函数
import { request } from 'vue-element-custom'

// 使用 API 模块
import { getUserInfo } from 'vue-element-custom'
```

## 🏗️ 开发

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 克隆项目

```bash
git clone <repository-url>
cd custom-component
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:3000` 查看组件演示。

### 构建

```bash
# 构建组件库
pnpm build

# 预览构建结果
pnpm preview
```

### 类型检查

```bash
pnpm type-check
```

## 📁 项目结构

```
vue-element-custom/
├── src/
│   ├── api/                 # API 接口
│   │   ├── index.ts
│   │   └── user.ts
│   ├── assets/              # 静态资源
│   │   └── svg/            # SVG 图标
│   ├── components/          # 组件库
│   ├── config/              # 配置文件
│   ├── directives/          # 自定义指令
│   │   ├── index.ts
│   │   └── permission.ts
│   ├── layout/              # 布局组件
│   ├── router/              # 路由配置
│   ├── stores/              # 状态管理
│   ├── styles/              # 样式文件
│   │   ├── common/         # 通用样式
│   │   └── element/        # Element Plus 定制样式
│   ├── types/               # 类型定义
│   ├── utils/               # 工具函数
│   │   ├── http.ts
│   │   ├── loading.ts
│   │   └── request.ts
│   ├── views/               # 页面组件
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口文件
│   └── index.ts            # 组件库导出
├── scripts/                 # 构建脚本
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目配置
```

## 🔌 核心功能

### 自动化导入

项目配置了自动导入功能，无需手动导入常用的 Vue API、组件和工具函数：

- Vue API（ref、reactive、computed 等）
- Vue Router API
- Pinia API
- Element Plus 组件
- Element Plus Icons

### 自定义指令

提供了权限控制等实用指令：

```vue
<template>
  <!-- 权限指令示例 -->
  <el-button v-permission="'admin'">管理员按钮</el-button>
</template>
```

### HTTP 请求

集成了基于 Axios 的 HTTP 客户端，支持请求拦截、响应拦截、错误处理等：

```typescript
import { request } from 'vue-element-custom'

// GET 请求
const data = await request.get('/api/users')

// POST 请求
const result = await request.post('/api/users', { name: 'John' })
```

### 状态管理

使用 Pinia 进行状态管理，提供了用户信息等基础 store：

```typescript
import { useUserStore } from 'vue-element-custom'

const userStore = useUserStore()
```

## 🎨 样式定制

支持 SCSS 变量定制 Element Plus 主题：

```scss
// 在你的项目中覆盖变量
$--color-primary: #409eff;
$--color-success: #67c23a;

@import 'vue-element-custom/dist/style.css';
```

## 📝 版本管理

```bash
# 补丁版本
pnpm version:patch

# 次要版本
pnpm version:minor

# 主要版本
pnpm version:major
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request