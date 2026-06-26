# TODO: AutoOps Content Agent

| Status | Priority | Task | Dependency | Output | Acceptance criteria |
| --- | --- | --- | --- | --- | --- |
| Done | P0 | Capture product direction | User answers | Content-ops automation backend direction | Scope centers on trend discovery, brand rewriting, review, scheduling, and daily retrospectives |
| Done | P0 | Complete initial feasibility research | GitHub/current project scan | `docs/RESEARCH.md` | At least 3 comparable projects are documented with links and gaps |
| Done | P0 | Create planning docs | Product direction | `docs/PROJECT_BRIEF.md`, `docs/PRD.md`, `docs/TECHNICAL_DESIGN.md`, `docs/ROADMAP.md`, `docs/RESOURCE_INVENTORY.md` | Docs reflect the content-operations agent MVP |
| Done | P0 | Create `yunying` frontend MVP scaffold | Planning docs | Next.js app in `yunying/` | `npm run typecheck` and `npm run build` pass |
| Done | P0 | Build interactive command center prototype | Frontend scaffold and fixtures | Trend radar, review queue, calendar, retrospective UI | First screen is a professional backend surface and supports generating, approving, rejecting, and scheduling drafts with fixture data |
| Todo | P0 | Verify platform API constraints | Official docs and test accounts | Connector risk matrix | Xiaohongshu, WeChat, Douyin, and Bilibili each have an integration mode: official, manual, mock, or deferred |
| Todo | P0 | Choose first demo vertical | Product owner decision | Demo brand profile | One vertical is selected with audience, tone, forbidden claims, and sample content |
| In Progress | P0 | Scaffold monorepo | Stack decision | Next.js app, FastAPI service, Docker Compose | Local dev starts web, API, Postgres, and Redis |
| Todo | P0 | Create database schema | Scaffold | Alembic migrations | Workspace, brand profile, trends, drafts, metrics, retrospectives, agent runs, and audit events persist |
| In Progress | P0 | Build admin command center shell | Scaffold and schema | Dashboard layout | First screen shows trend radar, review queue, calendar, and retrospective status |
| Todo | P0 | Build brand profile editor | Schema | Brand profile form | User can save audience, tone, banned terms, claims, and examples |
| Done | P0 | Add fixture datasets | Demo vertical | Trend and metric fixtures | Fixtures cover four platforms, risky trends, draft examples, and mixed performance data |
| Todo | P0 | Implement trend import | Fixtures/schema | Manual, URL, CSV, and fixture import | At least 10 trend candidates can be imported and listed |
| Todo | P0 | Implement trend normalization and clustering | Trend import | Trend clusters | Similar trends are grouped and each cluster has title, summary, and sources |
| Todo | P0 | Implement brand-fit scoring | Brand profile and trend clusters | Scores and reasoning | Each cluster receives brand fit, freshness, channel relevance, risk, and explanation |
| Todo | P0 | Prototype LangGraph agent loop | Fixture trends and mock LLM | Agent graph | Graph runs through normalize, score, draft, guardrail, retrospective nodes with checkpoints |
| In Progress | P0 | Generate platform-specific drafts | Brand profile, trends, agent loop | ContentDraft records | System generates Xiaohongshu, WeChat, Douyin, and Bilibili draft packages |
| In Progress | P0 | Add draft review queue | Draft records | Review UI | User can edit, approve, reject, regenerate, duplicate, and schedule drafts |
| Todo | P0 | Add draft versioning | Review queue | DraftVersion records | AI and human versions are preserved with prompt/model metadata |
| Todo | P0 | Add guardrail checks | Brand profile and drafts | Risk warnings | Banned terms and unsupported claims are flagged before approval |
| In Progress | P1 | Build content calendar | Approved/scheduled drafts | Calendar UI | Scheduled drafts appear by date and platform |
| Todo | P1 | Add manual export packages | Approved drafts | Copy/media package export | User can export platform-ready copy, hashtags, scripts, and notes |
| Todo | P1 | Add metric import | Published/exported drafts | Manual/CSV metric import | Views, likes, comments, shares, saves, follows, clicks, and notes can be recorded |
| Todo | P1 | Generate daily retrospective | Metrics and published drafts | Retrospective record | Report names wins, misses, likely causes, and tomorrow actions using actual metrics |
| Todo | P1 | Update tomorrow's plan from data | Retrospective | Next-day recommendation queue | Changing metric inputs changes tomorrow's recommendations |
| Todo | P1 | Add agent run and audit log views | AgentRun and AuditEvent records | Debug/admin screens | User can inspect AI runs, decisions, errors, and status history |
| Todo | P1 | Implement worker retries and failure states | Queue | Retryable background jobs | Failed AI/connector jobs can be retried and show clear errors |
| Todo | P1 | Add Playwright smoke test | Working loop | End-to-end test | Test configures brand, imports trends, generates drafts, approves one, imports metrics, and creates retrospective |
| Todo | P2 | Implement first official connector | API verification | One real integration | At least one platform can import metrics or create a remote draft in a test account |
| Todo | P2 | Add multi-brand workspace support | Stable single workspace | Workspace switcher and permissions | Agency-style users can separate brands/clients |
| Todo | P2 | Add weekly report export | Daily retrospectives | Weekly report | Report can be exported to Markdown/PDF or sent to Notion/Feishu |
| Todo | P2 | Add cost tracking | AgentRun token usage | Cost dashboard | Token usage and estimated cost are visible per day/workspace |
| Todo | P2 | Deploy staging environment | Passing smoke test | Public/staging URL | Main daily loop works outside local development |
