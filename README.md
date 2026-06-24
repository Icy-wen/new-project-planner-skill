# New Project Planner Skill

`new-project-planner` 是一个面向 Codex 的项目启动规划 skill。它把一个初始想法推进到可执行的项目起点：调研类似项目、评估可行性、提出关键问题、推荐技术栈、生成开发文档、搭建基础脚手架，并维护可落地的 TODO 计划。

它适合用在这些场景：

- 你有一个新软件项目想法，但还不确定怎么开始。
- 你想先做竞品/开源项目调研，再决定 MVP 范围。
- 你需要一套清晰的 `PROJECT_BRIEF`、`PRD`、`TECHNICAL_DESIGN`、`ROADMAP` 和 `TODO`。
- 你想让 Codex 从“规划”自然推进到“创建脚手架”和“逐步实现”。
- 你希望把自己想到的一个特色功能融入项目，并转成可行的技术实现。

## What It Does

这个 skill 会引导 Codex 按以下流程工作：

1. 理解项目想法和目标用户。
2. 优先调研 GitHub 和相关产品，分析机会、风险和可行性。
3. 询问少量高价值问题，明确项目形态、技术约束、视觉方向、部署方式和 MVP 成功标准。
4. 收集一个由用户自己提出的特色功能，并把它转成 MVP 方案、技术实现、风险和验收标准。
5. 推荐技术栈和架构。
6. 生成项目文档。
7. 创建基础脚手架。
8. 按 TODO 逐个实现功能切片，并在每轮后更新文档和计划。

## Best Way To Use It

最好的使用方式是一次性提供“项目想法 + 约束 + 特色功能”。不要只说“帮我做个项目”，而是尽量给出目标用户、使用场景和你自己的独特点子。

推荐模板：

```text
使用 $new-project-planner 帮我规划一个项目。

项目想法：
目标用户：
使用场景：
项目形态：Web / App / 桌面 / CLI / 插件 / 游戏 / API 等
MVP 要先做到：
我自己想到的特色功能：
技术要求或偏好：
视觉风格：
部署方式：
时间/预算/团队限制：

请先做类似项目调研和可行性分析，然后问我必要问题，最后生成项目文档、技术方案、路线图和 TODO。
```

示例：

```text
使用 $new-project-planner 帮我规划一个 AI 读书笔记 Web 应用。

目标用户是经常读 PDF、论文和电子书的学生与研究者。
MVP 要支持上传 PDF、划线、自动总结、按主题整理笔记。
我想到的特色功能是“知识回声”：系统能在我写新笔记时，自动提醒我以前读过的相似观点或相反观点。
我没有固定技术栈，优先考虑开发速度和后续可维护性。
视觉风格希望像 Notion + Readwise，干净、专注、信息密度高。
先部署到 Vercel 或类似平台，预算尽量低。
请先调研类似产品，再推荐技术栈并生成 docs 和 TODO。
```

## Continue Development After Docs

当 skill 已经生成文档和 `TODO.md` 后，可以这样让 Codex 继续实现：

```text
使用 $new-project-planner 继续开发这个项目。
请读取现有 docs 和 TODO.md，从第一个可验证的 MVP 功能切片开始实现。
每完成一个切片，都要运行测试或构建，并更新 TODO.md。
```

如果要优先实现特色功能：

```text
现在开始实现项目的特色功能 MVP。
请先阅读 PRD 中的 Signature Feature Spec 和 TECHNICAL_DESIGN 中的 Signature Feature Implementation。
只实现最小可用版本，不做未来增强版。
完成后补充验收标准、测试方式，并更新 TODO.md。
```

## Installation

Codex 会从本地 skills 目录发现 skill。默认位置通常是：

- macOS/Linux: `~/.codex/skills`
- Windows: `C:\Users\<you>\.codex\skills`
- 如果设置了 `CODEX_HOME`，则使用 `$CODEX_HOME/skills`

### Option 1: Clone From GitHub

把下面的仓库地址替换成你自己的 GitHub 地址：

```bash
git clone https://github.com/<your-github-username>/new-project-planner.git ~/.codex/skills/new-project-planner
```

Windows PowerShell:

```powershell
git clone https://github.com/<your-github-username>/new-project-planner.git "$env:USERPROFILE\.codex\skills\new-project-planner"
```

### Option 2: Download ZIP

1. 在 GitHub 仓库页面点击 `Code` -> `Download ZIP`。
2. 解压后把文件夹重命名为 `new-project-planner`。
3. 移动到本地 Codex skills 目录：

```text
~/.codex/skills/new-project-planner
```

Windows 示例：

```text
C:\Users\<you>\.codex\skills\new-project-planner
```

安装后的目录结构应类似：

```text
new-project-planner/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── project-doc-template.md
    └── question-bank.md
```

## Usage

安装后，在 Codex 里直接这样调用：

```text
使用 $new-project-planner 帮我规划一个新的 SaaS 项目。
```

或者：

```text
Use $new-project-planner to evaluate and plan a new software project from idea to first scaffold.
```

## Updating

如果是通过 Git 安装：

```bash
cd ~/.codex/skills/new-project-planner
git pull
```

Windows PowerShell:

```powershell
cd "$env:USERPROFILE\.codex\skills\new-project-planner"
git pull
```

如果是 ZIP 安装，重新下载并替换 `new-project-planner` 文件夹即可。

## Repository Contents

- `SKILL.md`: skill 的核心流程说明。
- `references/question-bank.md`: 项目发现阶段的问题库。
- `references/project-doc-template.md`: 项目文档生成清单。
- `agents/openai.yaml`: Codex UI 展示信息。


