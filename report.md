# 个人主页课程报告

## 1. 个人主页介绍

本项目实现了一个可部署到 GitHub Pages 的个人主页。主页主要内容包括个人简介、学习方向、项目展示、博客入口和联系方式。网页主体语言使用英文，便于形成更通用的个人学术或技术主页风格。

页面结构与功能说明：

- 首页 `index.html`：展示个人简介、兴趣标签、学习方向、最近博客、项目展示和联系方式。
- 博客页 `blog.html`：作为博客归档入口，通过 Jekyll 自动读取 `_posts/` 中的 Markdown 文章。
- 文章模板 `_layouts/post.html`：统一控制博客文章页面结构。
- 示例文章 `_posts/2026-05-02-github-pages-homepage.md`：记录 GitHub Pages 个人主页搭建流程。
- 样式文件 `assets/style.css`：提供现代清爽、科技感和轻漫画风格结合的视觉效果，并支持移动端适配。

主页访问链接：

```text
https://你的GitHub用户名.github.io/
```

该链接需要在部署到个人 GitHub Pages 仓库后替换为真实地址。

## 2. 博客

博客访问方式：

- 从首页顶部导航栏点击 `Writing`。
- 从首页首屏点击 `Recent Writing`。
- 从首页写作区域点击 `Recent Writing` 或 `Open Archive`。
- 部署后直接访问 `https://你的GitHub用户名.github.io/blog.html`。

博客采用 `Markdown + Jekyll` 方式维护。以后新增博客不需要手写 HTML，只需要在 `_posts/` 文件夹中新建 Markdown 文件，文件名格式为 `YYYY-MM-DD-title.md`。GitHub Pages 发布时会自动把 Markdown 渲染为文章页面，并在博客归档中展示。

## 3. 实现过程

使用的主要工具或技术：

- HTML：编写主页、博客归档和文章模板结构。
- CSS：实现页面布局、卡片边框、光晕背景、网格纹理、按钮动效和响应式适配。
- SVG：提供默认头像占位图。
- Markdown：用于撰写博客文章。
- Jekyll：用于将 Markdown 博客文章渲染为静态网页。
- Liquid：用于在博客归档页面自动遍历文章列表。
- GitHub Pages：用于静态网页托管和线上访问。
- Git：用于后续版本管理和代码推送，实际 Git 操作由用户自行执行。

网页搭建和部署过程：

1. 参考示例主页的信息结构，确定项目包含首页、博客归档、文章模板和项目展示区域。
2. 编写 `index.html`，实现英文个人简介、学习方向、最近文章、项目展示和联系方式。
3. 编写 `blog.html`，使用 Jekyll 模板语法自动展示 `_posts/` 中的文章。
4. 编写 `_layouts/post.html`，统一博客文章页面结构。
5. 编写 `_posts/2026-05-02-github-pages-homepage.md`，作为 Markdown 示例文章。
6. 编写 `assets/style.css`，将页面外观调整为现代清爽、科技感和轻漫画风格结合的设计。
7. 将项目推送到 `你的GitHub用户名.github.io` 仓库。
8. 在 GitHub 仓库设置中启用 GitHub Pages，从 `main` 分支根目录部署。

遇到的问题及解决方法：

- 问题：当前项目初始状态只有课程 PDF，没有现成网页入口。
  解决方法：从零创建 GitHub Pages 可识别的 `index.html`，保证根路径可以正常访问。
- 问题：个人真实信息暂未确定。
  解决方法：使用英文占位文本，后续可直接替换姓名、邮箱、GitHub 用户名、项目链接和头像。
- 问题：手写 HTML 博客不利于长期维护。
  解决方法：改用 GitHub Pages 原生支持的 `Markdown + Jekyll`，以后只需在 `_posts/` 中写 Markdown。
- 问题：GitHub Pages 公开仓库会暴露网页源码。
  解决方法：仅放置可公开内容，不在仓库中保存密钥、Token、隐私资料或未公开文件。

GitHub Pages 部署个人网页的优势：

- 免费托管静态网页，适合个人主页、课程项目展示和公开博客。
- 与 GitHub 仓库和版本管理结合紧密，修改记录清晰。
- 原生支持 Jekyll，可以直接用 Markdown 维护博客。
- 支持自定义域名，后续可以扩展为长期个人站点。

GitHub Pages 部署个人网页的局限性：

- 主要适合静态网站，不适合需要数据库、用户登录或后端接口的动态应用。
- 如果使用公开仓库，HTML、CSS、Markdown、图片和提交历史通常都会公开。
- 国内访问速度和稳定性可能受网络环境影响。
- 构建环境有限，复杂前端工程或自定义插件需要额外部署方案。
