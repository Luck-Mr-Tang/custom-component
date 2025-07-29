# 发布指南

## 📦 NPM 包发布流程

### 1. 确保已登录 NPM

```bash
npm whoami
# 如果未登录，执行登录命令
npm login
```

### 2. 发布包

由于包名已更改为 `vue-element-custom`，这是一个普通包，可以直接发布：

```bash
npm publish
```

### 3. 发布前检查

```bash
# 检查包内容
npm pack --dry-run

# 检查包信息
npm view vue-element-custom
```

### 4. 版本管理

```bash
# 发布补丁版本
npm version patch && npm publish

# 发布次要版本
npm version minor && npm publish

# 发布主要版本
npm version major && npm publish
```

### 5. 验证发布

发布成功后，可以通过以下方式验证：

```bash
# 搜索包
npm search vue-element-custom

# 查看包信息
npm view vue-element-custom

# 在新项目中安装测试
npm install vue-element-custom
```

## 🚨 常见问题

### 包名冲突
- **问题**：Package name too similar to existing packages
- **解决**：使用作用域包名 `@username/package-name`

### 权限问题
- **问题**：403 Forbidden
- **解决**：
  1. 确保已登录正确的 NPM 账户
  2. 确保包名没有被其他用户占用
  3. 确保有发布权限

### 版本冲突
- **问题**：Version already exists
- **解决**：更新版本号再发布

## 📝 发布清单

- [ ] 代码测试通过
- [ ] 构建成功
- [ ] 版本号已更新
- [ ] README 文档已更新
- [ ] 已登录 NPM 账户
- [ ] 使用正确的发布命令

## 🔗 相关链接

- [NPM 作用域包文档](https://docs.npmjs.com/about-scopes)
- [NPM 发布指南](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) 