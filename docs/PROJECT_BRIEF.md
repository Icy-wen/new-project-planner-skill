# AutoOps Content Agent Project Brief

## Project Name

AutoOps Content Agent

Working Chinese name: 自动运营智能体.

## One-Sentence Goal

Build a professional content-operations automation backend that discovers trends, rewrites them into brand-ready multi-platform content, schedules reviewed drafts, and uses daily performance data to adjust the next day's plan.

## Target Users

The user said the first audience can be broad, so the MVP should choose a narrower first customer profile to keep the product testable:

- Primary MVP users: small brand teams, creator studios, and content operators who publish frequently across Xiaohongshu, WeChat Official Accounts, Douyin, and Bilibili.
- Secondary users: agencies managing multiple client brands.
- Future users: larger marketing teams that need roles, approvals, compliance review, and workspace-level analytics.

## Primary Use Cases

1. Trend radar: collect hot topics, popular formats, keywords, hooks, and examples from selected channels or manually imported links.
2. Brand rewrite: transform a trending topic into brand-safe content drafts that match a brand profile and each platform's content style.
3. Multi-platform planning: turn one content idea into Xiaohongshu note, WeChat article outline, Douyin short-video script, and Bilibili video concept.
4. Review and scheduling: let a human approve, edit, reject, or schedule generated drafts.
5. Daily retrospective: collect yesterday's performance metrics and recommend tomorrow's topics, angles, and publishing priorities.
6. Weekly report: summarize published content, wins, misses, and the next iteration plan.

## MVP Scope

The MVP should be an automation backend, not a marketing landing page.

In scope:

- Single workspace with one brand profile.
- Manual or semi-automated trend ingestion using URLs, pasted notes, CSV import, or approved platform APIs where available.
- AI trend clustering and scoring.
- Brand voice profile with audience, product, forbidden claims, tone, keywords, and examples.
- Multi-platform draft generation for Xiaohongshu, WeChat Official Accounts, Douyin, and Bilibili.
- Review queue with approve, edit, reject, regenerate, and schedule states.
- Content calendar and daily task list.
- Metric import for published content, starting with manual input or CSV.
- Daily AI retrospective that adjusts the next day's plan.
- Execution log and audit trail for every AI suggestion and human decision.

Out of scope for MVP:

- Fully automatic publishing to every platform.
- Scraping or automation that violates platform terms.
- Enterprise SSO, multi-client billing, and complex RBAC.
- Ad bidding, paid media optimization, or ecommerce order operations.
- Video rendering, advanced image generation, or in-app editing suites.

## Signature Features

The user's two signature features:

1. "自动发现热点并改写成品牌内容"
2. "每天复盘数据后调整明天策略"

MVP version:

- The operator provides a brand profile and channel priorities.
- The system ingests trend candidates from supported sources or manual inputs.
- The agent clusters trends, scores fit with the brand, and generates platform-specific drafts.
- After the user imports daily metrics, the agent writes a daily retrospective and changes tomorrow's topic priorities, hooks, and posting plan.

Future upgraded version:

- Approved official connectors continuously collect channel trends and metrics.
- The agent runs small experiments across hooks, formats, and posting windows.
- The system learns brand-specific performance patterns and recommends content bets with confidence scores.
- Teams can set compliance rules and require approval from brand/legal reviewers before publishing.

## Success Metrics

MVP is useful when it can consistently achieve at least one of these:

- Save a content operator 2+ hours per day.
- Generate 20 usable content drafts per day across selected platforms.
- Produce one clear daily retrospective and one next-day plan without manual analysis.
- Keep AI draft approval rate above 40% after brand profile tuning.
- Reduce weekly planning time from hours to under 30 minutes.

## Assumptions

- AI capability matters more than minimizing infrastructure complexity.
- The product should feel like a professional backend: dense, operational, and built for repeated work.
- Platform APIs for Xiaohongshu, Douyin, Bilibili, and WeChat must be verified case by case; the MVP should not depend on full auto-publishing access.
- Human approval remains required before publishing in the first version.
- "All users" is too broad for validation, so small content teams and creator studios are the recommended first test segment.

## Open Questions

- Which brand/category should the first demo workspace target: consumer goods, local services, education, SaaS, personal IP, ecommerce, or another vertical?
- Should the first version support only Chinese content, or Chinese plus English?
- Will the product manage one brand per workspace or multiple brands/clients from day one?
- Which platform is the first true connector priority if only one can be integrated deeply?
- Should approved content be exported for manual publishing, pushed to a drafting API, or scheduled for direct publishing where official APIs allow it?
