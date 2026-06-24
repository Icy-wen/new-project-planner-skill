---
name: new-project-planner
description: "Plan and launch new software projects from an initial idea. Use when the user asks to create, evaluate, plan, scaffold, or start a new project, including 项目立项, 新项目规划, 可行性分析, 技术选型, 开发文档, 项目脚手架, roadmap, MVP, TODO list, or step-by-step implementation planning."
---

# New Project Planner

## Objective

Guide a new software project from idea to executable starting point: research similar projects, assess feasibility, ask the right product and engineering questions, recommend a stack, generate development docs, scaffold the base project, and maintain an actionable implementation plan.

## Workflow

### 1. Capture the project idea

Start by restating the user's project idea in one or two sentences. If the idea is too vague to research, ask only the minimum clarifying question needed to identify the domain, target user, and project form.

### 2. Research feasibility first

Before recommending a stack or writing docs, research existing related projects and products.

- Search GitHub first, then use other relevant sources such as official docs, package registries, app stores, Product Hunt, Hacker News, papers, or vendor examples when useful.
- Prefer current primary sources. Record source links, dates when visible, and whether a project appears actively maintained.
- Compare at least 3 relevant projects when available. Note stars/downloads/adoption, license, core features, tech stack, architecture clues, maintenance status, and gaps the new project can exploit.
- Assess feasibility across technical complexity, time/cost, dependencies, data availability, legal/compliance concerns, operational risk, and differentiation.
- If network access is unavailable, say so explicitly and provide a provisional analysis based on local knowledge, then list what should be verified later.

Return a concise feasibility analysis before moving on:

- Existing landscape
- Opportunity/gap
- Major risks
- Build difficulty
- Recommended MVP boundary

### 3. Ask project-detail questions

Ask a focused batch of questions before finalizing recommendations. Load `references/question-bank.md` when choosing the questions.

Always determine:

- Whether the user has hard technology stack requirements.
- If no hard stack exists, what constraints matter most so a stack can be recommended.
- One user-invented signature feature or distinctive twist they want the project to include.
- Preferred visual style or brand direction.
- Target users and usage scenario.
- Project form: web app, mobile app, desktop app, CLI, API service, browser extension, automation, library, game, plugin, or other.
- Deployment target, budget/time constraints, team size, data sources, integrations, authentication, payments, AI usage, privacy/security needs, and success criteria when relevant.

Ask no more than 8 questions in the first batch unless the user explicitly wants a full discovery questionnaire. Mark assumptions clearly when proceeding without an answer.

### 4. Recommend the stack and architecture

After the user answers, recommend a stack. If the user gave hard requirements, use them unless they make the project infeasible; then explain the tradeoff and ask for confirmation before diverging.

When recommending:

- Tie each choice to the user's constraints and to patterns observed in successful related projects.
- Prefer boring, maintainable tools for MVPs unless the domain requires specialized technology.
- Include alternatives only when the choice is meaningfully uncertain.
- Name hosting, database, auth, testing, UI, state management, observability, and CI/CD choices when relevant.

### 5. Generate development docs

Load `references/project-doc-template.md` before drafting project documentation. Use the research findings and user answers as inputs.

Before finalizing docs, ask the user to provide one signature feature they personally imagined for the project, unless they already provided one. Capture the user-facing experience in their words, then translate it into a feasible technical implementation:

- Define the smallest MVP version of the feature and, when useful, a future upgraded version.
- Choose practical technologies, services, libraries, data structures, APIs, or algorithms that fit the recommended stack.
- Identify complexity, risks, dependencies, fallback behavior, and validation criteria.
- Reflect the feature consistently in the project brief, PRD, technical design, roadmap, and TODO list.
- If the feature is infeasible for the MVP, preserve the intent, propose a realistic alternative, and document the tradeoff.

Create or update docs appropriate to the repository and project size. For a new repo, prefer:

- `docs/PROJECT_BRIEF.md`
- `docs/RESEARCH.md`
- `docs/PRD.md`
- `docs/TECHNICAL_DESIGN.md`
- `docs/ROADMAP.md`
- `TODO.md`

Keep docs specific enough to guide implementation. Avoid generic filler. Every major feature should have acceptance criteria or a concrete validation path.

### 6. Scaffold the base project

Once the stack is confirmed or reasonably inferred, create the base framework in the workspace.

- Follow the chosen ecosystem's current official scaffolding path when possible.
- If dependency installation or network access is required, run the normal command and request approval only when the environment requires it.
- Keep the initial scaffold small: routing, layout, lint/test setup, environment examples, core folders, and one thin vertical slice when feasible.
- Preserve any existing user files and avoid unrelated refactors.
- Run formatting, linting, build, or tests available for the scaffold.

### 7. Build the implementation plan

Maintain a practical step-by-step plan and TODO list.

- Break work into milestones: foundation, core workflows, data model/API, UI, integrations, quality, deployment, and polish.
- For each task, include priority, dependency, expected output, and acceptance criteria.
- Ask for specific feature requirements at natural decision points, then update the docs and TODO list before implementation.
- Implement iteratively: one coherent feature slice at a time, verify it, then move to the next slice.

## Response Shape

When invoked for a new idea, structure the answer in this order unless the user asks for a different format:

1. Feasibility research summary
2. Key questions for the user
3. Provisional or final stack recommendation
4. Development documentation plan
5. Scaffold approach
6. Step-by-step TODO list
7. Immediate next action

If the user asks directly to build, do the research and questioning needed to avoid a bad foundation, then proceed to implementation once enough details are known.
