# 个人主页项目

这是一个依托 GitHub Pages 部署的个人主页项目。主页主体使用英文展示，包含个人简介、学习方向、项目展示、博客入口和联系方式；课程说明与报告保留中文，方便提交。

## 技术栈

- `HTML`：编写首页、博客归档页和文章布局结构。
- `CSS`：实现现代清爽、科技感、莫兰迪主题切换和响应式布局。
- `JavaScript`：实现前端配色切换，并用浏览器本地存储记住用户选择。
- `SVG`：提供默认头像占位图，可替换为真实头像。
- `Markdown`：用于撰写博客文章，避免每篇文章手写 HTML。
- `Jekyll`：GitHub Pages 原生支持的静态站点生成器，用于把 `_posts/` 中的 Markdown 渲染为博客文章。
- `Liquid`：Jekyll 模板语法，用于在博客归档页自动遍历文章列表。
- `GitHub Pages`：托管和发布静态个人主页。
- `Git`：用于版本管理和推送到 GitHub；本仓库当前未初始化 Git，后续 Git 操作由用户执行。

## 主页结构

- `index.html`：个人主页入口，包含英文个人简介、学习方向、最近文章、项目展示和联系方式。
- `blog.html`：博客归档页面，通过 Jekyll 自动读取 `_posts/` 中的文章。
- `_posts/2026-05-02-github-pages-homepage.md`：示例 Markdown 博客文章。
- `_layouts/post.html`：博客文章页面模板。
- `_config.yml`：Jekyll 配置文件，包含站点标题、链接格式和文章默认布局。
- `assets/style.css`：全站样式文件，负责页面配色、莫兰迪主题、边框、卡片、响应式布局和动效。
- `assets/theme.js`：主题切换脚本，点击导航栏中的主题按钮即可在科技风和莫兰迪风之间切换。
- `assets/avatar.svg`：头像占位图，可替换为个人头像。
- `docs/2026-课程大作业1.pdf`：课程要求文档。
- `report.md`：课程报告，说明主页内容、博客访问方式和实现过程。

## 框架与代码位置

本项目没有使用 `npm`、`React`、`Vue`、`Vite` 等前端构建工具。核心原因是个人主页内容以静态展示和博客为主，GitHub Pages 原生支持 `Jekyll + Markdown`，维护成本更低。

- 页面结构：`index.html`、`blog.html`、`_layouts/post.html`
- 博客文章：`_posts/*.md`
- 页面样式：`assets/style.css`
- 主题切换：`assets/theme.js`
- 静态资源：`assets/`
- 站点配置：`_config.yml`

## 页面功能

- 响应式设计：桌面端采用多列卡片和首屏双栏布局，移动端自动改为单列布局，导航、按钮和卡片间距会收紧，方便手机浏览。
- 配色切换：导航栏中的 `Theme` 按钮可以在默认科技风和莫兰迪风之间切换。
- 主题记忆：浏览器会通过 `localStorage` 保存上次选择的配色，下次访问时自动恢复。
- 滚动进度：页面顶部会根据当前下滑距离显示阅读进度条，方便判断页面浏览位置。

## 本地预览

如果只想快速查看首页静态外观，可以直接用浏览器打开 `index.html`。首页已保持为普通静态 HTML，因此双击打开也能正常加载 `assets/style.css`。

需要注意：`blog.html` 和 `_posts/` 依赖 Jekyll 渲染，直接双击 `blog.html` 不能代表最终博客效果。

本机已创建用户级 Conda 环境 `homepage-ruby`，安装位置在 `/home/qhg/software/anaconda/miniconda/envs/homepage-ruby`。可以运行：

```bash
conda activate homepage-ruby
jekyll serve
```

然后访问 `http://127.0.0.1:4000/`。如果不想激活环境，也可以在项目根目录运行：

```bash
conda run -n homepage-ruby jekyll serve
```

本地构建生成的 `_site/` 和 `.jekyll-cache/` 仅用于预览，已写入 `.gitignore`，不要提交到 GitHub。

## 写博客方式

以后新增博客不需要手写 HTML。只需要在 `_posts/` 中新建 Markdown 文件，命名格式为：

```text
YYYY-MM-DD-post-title.md
```

文章开头需要包含 Front Matter，例如：

```yaml
---
title: My New Note
category: Study Note
---
```

正文直接使用 Markdown 编写。GitHub Pages 发布时会自动生成文章页面，并在 `blog.html` 中展示。

### PDF 博客

支持两种 PDF 发布模式：

#### 模式一：PDF 作为 Markdown 博客的补充材料

在 Front Matter 中加入 `pdf` 字段指向 PDF 文件路径：

```yaml
---
title: Tarjan Algorithm Notes
category: Study Note
pdf: /assets/pdfs/tarjan1972.pdf
---
```

效果：
- `blog.html` 归档列表中，该文章卡片左侧会显示一个红色 PDF 文件图标，点击可打开 PDF。
- 文章详情页顶部会有一个"Open PDF in new tab"提示栏。
- 文章正文仍然显示 Markdown 内容。

#### 模式二：PDF 作为完整博客（嵌入显示）

在 Front Matter 中同时设置 `pdf` 和 `pdf_only: true`：

```yaml
---
title: "Paper: Some Paper Title"
category: Paper
pdf: /assets/pdfs/some_paper.pdf
pdf_only: true
---
简短摘要（仅用于归档列表的摘要展示，正文不会渲染）。
```

效果：
- `blog.html` 归档列表同样显示 PDF 图标。
- 文章详情页会嵌入 PDF 预览（占据 80vh 高度），不显示 Markdown 正文。
- 不支持 PDF 嵌入的浏览器会显示下载链接 fallback。

#### PDF 文件存放

所有博客附件 PDF 统一存放在 `assets/pdfs/` 目录。

## GitHub Pages 部署

推荐将仓库命名为：

```text
你的GitHub用户名.github.io
```

部署步骤：

1. 在 GitHub 创建名为 `你的GitHub用户名.github.io` 的公开仓库。
2. 你自己在本地执行 `git init`、`git add .`、`git commit` 和 `git push`。
3. 进入 GitHub 仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 分支选择 `main`，目录选择 `/root`。
6. 等待 GitHub Pages 部署完成后，访问 `https://你的GitHub用户名.github.io/`。

## 个性化修改

部署前建议替换以下内容：

- `index.html`、`blog.html`、`_layouts/post.html` 中的 `Your Nickname`、`your-github-username`、`your-email@example.com`。
- `_config.yml` 中的 `title`、`description`、`url`。
- `assets/avatar.svg` 可以替换为个人头像图片，并同步修改 `index.html` 中的图片路径。
- `_posts/2026-05-02-github-pages-homepage.md` 可以替换为真实博客内容。
- `report.md` 中的主页访问链接需要替换为最终 GitHub Pages 地址。

## GitHub Pages 优势与局限

优势：

- 免费托管静态网页，适合个人主页、项目展示和公开博客。
- 与 GitHub 仓库直接绑定，版本管理和部署流程清晰。
- 原生支持 Jekyll，可以用 Markdown 管理博客文章。
- 可以配置自定义域名。

局限：

- 更适合静态网站，不适合需要数据库、登录、后台接口的动态应用。
- 公开仓库会公开网页源码、Markdown 文章、图片资源和提交历史。
- 国内访问速度可能不稳定。
- 不应在仓库中放置密钥、Token、隐私资料或未公开信息。

## 验证结果

当前项目没有 `npm` 依赖、没有 React 构建步骤、没有测试框架。已检查核心文件结构、主题切换脚本和主要相对链接；Jekyll 动态文章列表需要由 GitHub Pages 或本地 Jekyll 渲染。
