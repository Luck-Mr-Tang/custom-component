#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

console.log('🚀 开始发布 custom-component 到 npm...')

try {
  // 检查是否已登录npm
  console.log('📋 检查npm登录状态...')
  try {
    execSync('npm whoami', { stdio: 'ignore' })
    console.log('✅ npm 已登录')
  } catch (error) {
    console.log('❌ 请先登录npm: npm login')
    process.exit(1)
  }

  // 构建库文件
  console.log('🏗️  构建库文件...')
  try {
    execSync('npm run build', { stdio: 'inherit' })
    console.log('✅ 库文件构建完成')
  } catch (error) {
    console.log('❌ 构建失败，停止发布')
    throw error
  }

  // 检查package.json中的版本
  const packagePath = path.join(process.cwd(), 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  console.log(`📦 当前版本: ${packageJson.version}`)

  // 检查是否有未提交的更改
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' })
    if (gitStatus.trim()) {
      console.log('⚠️  检测到未提交的更改，建议先提交到git')
      // 不强制要求，继续发布
    }
  } catch (error) {
    console.log('⚠️  无法检查git状态，继续发布...')
  }

  // 发布到npm
  console.log('📤 发布到npm...')
  execSync('npm publish', { stdio: 'inherit' })
  
  console.log('🎉 发布成功！')
  console.log(`📦 包名: ${packageJson.name}`)
  console.log(`🏷️  版本: ${packageJson.version}`)
  console.log(`🔗 npm链接: https://www.npmjs.com/package/${packageJson.name}`)

} catch (error) {
  console.error('❌ 发布失败:', error.message)
  process.exit(1)
} 