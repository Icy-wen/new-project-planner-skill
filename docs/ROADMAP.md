# Roadmap: AutoOps Content Agent

## Milestone 0: Research and Setup

Goal: remove major uncertainty before building too much UI.

- Verify official API access and policy constraints for Xiaohongshu, WeChat Official Accounts, Douyin, and Bilibili.
- Select first demo vertical, such as consumer brand, personal IP, education, or SaaS.
- Create fixture datasets for trends, brand profiles, draft examples, and daily metrics.
- Confirm primary LLM provider and fallback model.
- Decide whether MVP uses Python FastAPI + LangGraph or a pure TypeScript stack.
- Set up project scaffold, linting, formatting, tests, and local Docker services.

Acceptance criteria:

- MVP constraints are documented.
- One sample brand can run through the planned daily loop using fixtures.
- Platform connector risks are listed with a fallback path.

## Milestone 1: Foundation and Command Center

Goal: create the working backend surface.

- Build Next.js admin shell.
- Build FastAPI service and PostgreSQL schema.
- Add single workspace and brand profile editor.
- Build command center dashboard with trend radar, review queue, calendar, and retrospective status.
- Add audit events and agent run records.

Acceptance criteria:

- User can configure a brand profile.
- Dashboard loads real persisted data.
- Agent run status is visible.

## Milestone 2: Trend Radar and Draft Generation

Goal: deliver the first valuable AI loop.

- Implement manual/CSV/fixture trend import.
- Normalize and cluster trend candidates.
- Score brand fit and risk.
- Generate multi-platform draft packages.
- Add review queue and draft versioning.

Acceptance criteria:

- User can import at least 10 trend candidates.
- Agent generates at least 20 draft items across the four target platforms.
- Drafts can be edited, regenerated, approved, rejected, and scheduled.

## Milestone 3: Calendar, Export, and Daily Retrospective

Goal: complete the daily content-ops loop.

- Build content calendar.
- Add manual export package for approved drafts.
- Add metric import.
- Generate daily retrospective from metrics.
- Update tomorrow's plan based on results.

Acceptance criteria:

- A full daily loop can be completed without platform API access.
- Daily report references concrete content and metrics.
- Tomorrow's recommendations change when metrics change.

## Milestone 4: First Real Connector

Goal: connect to one platform where official access is verified.

- Choose first connector based on account access and documentation.
- Implement OAuth/token setup if required.
- Import metrics or create remote drafts where allowed.
- Add connector error handling and retry logs.

Acceptance criteria:

- At least one real platform integration works in a test account.
- Connector failure does not block the rest of the product.

## Milestone 5: Quality, Deployment, and Polish

Goal: make the MVP demoable and usable by early testers.

- Add Playwright smoke test for daily loop.
- Add background job monitoring.
- Add cost tracking for AI calls.
- Improve compact professional UI states.
- Deploy staging environment.
- Create onboarding fixtures and sample workspace.

Acceptance criteria:

- Staging deployment works.
- Main workflow passes smoke tests.
- Early tester can complete setup and generate drafts without developer help.

## Future Ideas

- Multi-brand agency mode.
- Role-based approvals and legal review.
- Direct publishing where official APIs allow.
- A/B test planner for hooks and formats.
- Competitor monitoring.
- Knowledge base for brand/product facts.
- Image and video brief generation.
- Auto weekly reports with export to Notion/Feishu/Email.
- Private deployment package for enterprise users.
