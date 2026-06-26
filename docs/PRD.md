# PRD: AutoOps Content Agent

## Problem Statement

Content operators need to publish high-frequency, platform-native content while constantly reacting to trends and performance data. Today this usually requires separate tools for trend watching, copywriting, scheduling, analytics, and reporting. The result is slow planning, repetitive rewriting, weak feedback loops, and inconsistent brand voice.

AutoOps Content Agent solves this by providing an AI-powered operations backend that turns trends into brand-ready content packages and uses daily metrics to adjust the next plan.

## Personas

| Persona | Need | Pain |
| --- | --- | --- |
| Solo creator or personal brand operator | Publish frequently with limited time | Hard to track trends and rewrite for each platform |
| Small brand content operator | Maintain brand tone and output volume | Repetitive drafting, manual reports, scattered approvals |
| Agency content manager | Manage multiple client calendars | Hard to standardize quality and prove weekly progress |
| Growth lead | Connect content experiments to results | Reports do not translate into next actions |

## User Journeys

### Journey 1: Configure Brand Brain

1. User creates a workspace.
2. User enters brand category, target audience, product/service, tone, banned claims, competitor references, and example posts.
3. System generates a brand profile summary and content guardrails.
4. User approves or edits the brand profile.

Acceptance criteria:

- The workspace has a saved brand profile.
- Brand profile can be used by generation prompts.
- Banned terms and prohibited claims are enforced in draft review.

### Journey 2: Discover Trends and Generate Drafts

1. User imports trend candidates through links, CSV, pasted notes, or supported connectors.
2. System normalizes each trend into title, source, topic, format, sample hook, and estimated relevance.
3. Agent clusters similar trends and scores brand fit.
4. User selects trend clusters or asks AI to choose.
5. Agent generates draft packages for Xiaohongshu, WeChat Official Accounts, Douyin, and Bilibili.

Acceptance criteria:

- At least 10 trend candidates can be imported.
- Trends are clustered and ranked.
- User can generate at least 20 usable drafts in one session.
- Each draft shows source trend, target platform, hook, body/script outline, tags, and rationale.

### Journey 3: Review and Schedule

1. Drafts enter a review queue.
2. User edits, regenerates, approves, rejects, or schedules each draft.
3. Approved drafts appear on the content calendar.
4. The system records status changes and prompt versions.

Acceptance criteria:

- Every draft has a status: draft, needs_review, approved, scheduled, published, rejected, archived.
- Calendar shows scheduled content by platform and date.
- Regeneration preserves version history.
- Manual edits are saved separately from AI-generated text.

### Journey 4: Daily Retrospective and Tomorrow Plan

1. User imports metrics for yesterday's published content.
2. System calculates performance by topic, platform, format, hook, and posting time.
3. Agent explains what worked, what missed, and what changed.
4. Agent updates tomorrow's topic priorities and recommended drafts.

Acceptance criteria:

- User can enter or import metrics for published items.
- Daily report includes wins, misses, causes, and next actions.
- Tomorrow's plan references yesterday's data.
- The system avoids overconfident conclusions when sample size is small.

## Functional Requirements

### Workspace and Brand Profile

- Create a single workspace for MVP.
- Store brand name, category, audience, offer, differentiators, tone, taboo topics, banned terms, compliance notes, example content, and competitor references.
- Generate a normalized "brand voice card" for AI prompts.

### Trend Ingestion

- Support manual input, URL input, CSV import, and fixture data.
- Support connector interface for future APIs.
- Store source platform, source URL, title, raw text, tags, detected topic, detected format, engagement signals if available, and import timestamp.

### Trend Scoring

- Score each trend by brand fit, freshness, channel relevance, content effort, risk, and expected reuse across platforms.
- Let users override scores.

### Draft Generation

- Generate platform-specific draft packages:
  - Xiaohongshu: title options, opening hook, body, hashtags, image/video brief.
  - WeChat Official Account: headline options, article outline, intro, section bullets, CTA.
  - Douyin: 15-60 second script, opening 3 seconds, shot list, caption, hashtags.
  - Bilibili: video title, intro, outline, talking points, cover/title direction.
- Include reasoning, source trend, brand alignment notes, and risks.

### Review Queue

- Approve, reject, edit, regenerate, duplicate, and schedule.
- Track versions and user decisions.
- Surface warnings for banned terms, unverified claims, and risky wording.

### Calendar and Execution

- Show approved and scheduled drafts by date and platform.
- MVP supports manual publishing/export package.
- Connector-ready execution jobs should exist but can run in mock/manual mode.

### Metrics and Retrospective

- Import metrics manually or through CSV.
- Track impressions/views, likes, comments, shares, saves/favorites, follows, clicks, conversions if provided, and notes.
- Generate daily and weekly reports.
- Recommend tomorrow's topics, channels, hooks, and content formats.

## Signature Feature Spec

### User Story

As a content operator, I want the system to discover hot topics, rewrite them into brand-safe drafts, and revise tomorrow's plan based on yesterday's results, so that I can run a daily content operation without spending hours on research and reporting.

### MVP Behavior

- User imports trend inputs.
- Agent selects high-fit trends and explains why.
- Agent generates cross-platform content packages.
- User approves and schedules drafts.
- User imports metrics the next day.
- Agent writes a daily retrospective and updates tomorrow's recommended plan.

### Edge Cases

- Trend data is sparse or duplicated.
- A trend conflicts with brand values or compliance notes.
- Generated content contains claims that require proof.
- Platform metrics are incomplete.
- User disagrees with AI recommendations.
- The same trend is already used too often.

### Acceptance Criteria

- The system can complete one full daily loop using fixture or manual data.
- The daily report references actual metrics, not only generic advice.
- Tomorrow's plan changes when the metric input changes.
- Every recommendation includes confidence and reasoning.
- User can override AI recommendations and the override is stored.

### Future Version

- Continuous trend ingestion through official APIs and approved sources.
- Direct scheduling/publishing where official APIs allow it.
- A/B testing for hooks and formats.
- Brand/legal review workflows.
- Multi-brand agency mode.

## Non-Functional Requirements

- Professional backend UX with dense but readable tables, filters, side panels, and audit logs.
- Clear loading/error states for AI and connector jobs.
- Human approval before public publishing.
- Prompt and output versioning for auditability.
- Background jobs must be retryable and observable.
- Data privacy controls for brand materials and unpublished drafts.
- The system should degrade gracefully when a connector is unavailable.

## UX and Style Requirements

- Professional operations dashboard, not a landing page.
- First screen should be a working command center: trend radar, review queue, calendar, and retrospective status.
- Use restrained colors, compact tables, badges, filters, tabs, and icon buttons.
- Avoid marketing-style hero sections or decorative card-heavy layouts.
- Make high-volume review fast: keyboard-friendly, bulk actions, status filters, and side-by-side source/draft view.

## Analytics and Success Signals

- Number of trend candidates processed per day.
- Number of drafts generated, edited, approved, rejected, and scheduled.
- Draft approval rate.
- Time from trend import to approved draft.
- Number of daily retrospectives generated.
- User overrides of AI recommendations.
- Content performance by platform, format, topic, and hook.
