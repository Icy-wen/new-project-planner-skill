# Resource Inventory: AutoOps Content Agent

## Inventory Date

2026-06-26

## Selection Criteria

Resources are selected by MVP relevance, implementation leverage, maintenance quality, cost, license, privacy/security, and fit with an AI-capability-first backend.

## Reference Projects and Products

| Resource | Link | Source | License/pricing | Reusable patterns | Differentiation lesson | Status | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| n8n | https://github.com/n8n-io/n8n | GitHub | GitHub API showed NOASSERTION; verify terms | Workflow execution logs, connector marketplace, node model | Do not build a generic workflow tool; focus on content ops | Evaluate | Review connector/execution UX |
| Dify | https://github.com/langgenius/dify | GitHub | GitHub API showed NOASSERTION; verify terms | AI app config, workflow debugging, prompt management | Strong AI tooling needs product-specific workflows | Evaluate | Review app/workflow authoring patterns |
| Activepieces | https://github.com/activepieces/activepieces | GitHub | GitHub API showed NOASSERTION; verify terms | Piece/connector model, automation runs | Connector-first systems still need strategy intelligence | Evaluate | Review connector abstractions |
| LangGraph | https://github.com/langchain-ai/langgraph | GitHub | MIT | Stateful agent graphs, checkpoints, recovery | Good fit for daily plan-execute-review loops | Use now | Prototype agent graph with fixtures |
| CrewAI | https://github.com/crewAIInc/crewAI | GitHub | MIT | Role-based agent collaboration | Useful later for strategy/copy/analyst agents | Optional | Revisit after MVP |
| AutoGen | https://github.com/microsoft/autogen | GitHub | Verify license and usage fit | Multi-agent conversation patterns | More framework-level than needed for MVP | Optional | Revisit only if LangGraph is insufficient |

## Codex Skills and Tools

| Skill or tool | Purpose | Required setup/auth | Output expected | Status |
| --- | --- | --- | --- | --- |
| new-project-planner | Planning, docs, roadmap, TODO | Already available | Project docs and implementation plan | Use now |
| browser control / Playwright-style verification | Validate professional backend UI | Local app running | Screenshots and interaction checks | Use now |
| GitHub tools | Publish repo, inspect PRs, review CI later | GitHub auth if publishing | PRs, issue summaries, CI fixes | Optional |
| Notion tools | Export weekly reports or product docs later | Notion auth | Knowledge capture and docs | Optional |
| Image generation | Generate sample assets or mock post visuals | Image tool access | Demo media assets | Optional |

## Technologies and Libraries

| Technology | Role | Why chosen | Alternatives | Risks | Status |
| --- | --- | --- | --- | --- | --- |
| Next.js | Admin frontend | Fast professional dashboard development | Remix, Vite SPA | Overkill if backend-only | Use now |
| TypeScript | Frontend safety | Strong UI/API contracts | JavaScript | Requires schema sync with Python | Use now |
| shadcn/ui | Backend UI components | Good tables, dialogs, tabs, forms | Mantine, Ant Design | Needs consistent design discipline | Use now |
| Tailwind CSS | Styling | Fast, controlled UI | CSS modules | Can become inconsistent without tokens | Use now |
| FastAPI | Backend API | Python-native AI service, OpenAPI | Django, NestJS | Separate service from frontend | Use now |
| LangGraph | Agent orchestration | Stateful workflows and retries | CrewAI, AutoGen, custom graph | Learning curve | Use now |
| PostgreSQL | Primary database | Reliable relational data and reporting | MySQL, SQLite | Needs migrations | Use now |
| SQLAlchemy + Alembic | ORM/migrations | Python backend fit | Prisma, Django ORM | More verbose than Prisma | Use now |
| Redis + Celery/RQ | Jobs and scheduling | Common Python worker pattern | Temporal, BullMQ, Inngest | Operational dependency | Use now |
| S3/R2 storage | Imports, exports, media | Cheap object storage | Local disk, Supabase Storage | Credentials and lifecycle management | Evaluate |
| Sentry | Error monitoring | Quick issue visibility | OpenTelemetry stack | Cost at scale | Optional |

## APIs and Integrations

| Provider/API | Use case | Auth method | Pricing/rate limits | Data/privacy notes | Fallback plan | Status |
| --- | --- | --- | --- | --- | --- | --- |
| LLM provider | Trend scoring, drafting, retrospectives | API key | Token-based pricing | Sends brand/content data to provider unless self-hosted | Model adapter and redaction | Use now |
| Xiaohongshu official/open platform | Trend/metric/publishing if allowed | Verify | Verify | High platform policy sensitivity | Manual import/export | Evaluate |
| WeChat Official Account API | Drafts, articles, metrics if account scope allows | Official account token | Verify | Account-bound content and analytics | Manual article package export | Evaluate |
| Douyin Open Platform | Video concepts, metrics, publishing if allowed | OAuth/app review | Verify | Short-video account data | Manual script/export package | Evaluate |
| Bilibili Open Platform | Video metadata/metrics if allowed | OAuth/app review | Verify | Creator account data | Manual upload package and metric CSV | Evaluate |
| Feishu/Notion/Email | Reports and task delivery | OAuth/API token | Provider-specific | Operational docs may contain sensitive data | Downloadable report | Optional |

## Materials and Assets

| Asset/source | Type | Intended use | Usage rights | Status | Next action |
| --- | --- | --- | --- | --- | --- |
| Fixture trend dataset | JSON/CSV | Demo and tests | Created in repo | Use now | Build sample trends for four platforms |
| Fixture metrics dataset | JSON/CSV | Retrospective tests | Created in repo | Use now | Include high/low performance cases |
| Brand profile examples | JSON | Prompt development | Created in repo | Use now | Add 2-3 verticals |
| Platform content templates | Structured prompts | Draft generation | Created in repo | Use now | Define per-platform output schemas |
| Real platform screenshots/examples | References | UX and content style | Need permission/source tracking | Evaluate | Use only for internal research or licensed examples |

## Data Sources and Fixtures

MVP should start with local fixtures:

- `fixtures/brand_profiles/consumer_brand.json`
- `fixtures/trends/xiaohongshu_trends.csv`
- `fixtures/trends/wechat_topics.csv`
- `fixtures/trends/douyin_hot_formats.csv`
- `fixtures/trends/bilibili_video_ideas.csv`
- `fixtures/metrics/daily_metrics.csv`

Fixtures should include:

- Duplicate trends.
- Risky trends that should be rejected.
- High-fit and low-fit brand examples.
- Strong and weak performance metrics.
- Missing metrics to test low-confidence reports.

## Verification Resources

| Resource | Purpose | Status |
| --- | --- | --- |
| Official platform documentation | Verify API scopes and terms | Must verify before connector work |
| Test platform accounts | Validate real connector behavior | Needed later |
| Mock LLM provider | Stable tests | Use now |
| Playwright | UI smoke tests | Use now |
| API test client | Backend contract tests | Use now |
| Background job dashboard | Worker debugging | Evaluate |

## Immediate Actions

1. Confirm first demo vertical and first deep connector priority.
2. Verify current official docs for Xiaohongshu, WeChat, Douyin, and Bilibili.
3. Create fixture datasets so development does not block on API access.
4. Prototype LangGraph daily loop with mocked LLM output.
5. Scaffold Next.js admin UI and FastAPI backend.
6. Implement draft review states before attempting real publishing.
