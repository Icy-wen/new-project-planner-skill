# Project Documentation Template

Use these sections as a checklist. Create only the docs that match the project size and repository norms.

## docs/PROJECT_BRIEF.md

- Project name
- One-sentence goal
- Target users
- Primary use cases
- MVP scope
- Signature feature: user's original idea, MVP version, and why it differentiates the project
- Non-goals
- Success metrics
- Assumptions and open questions

## docs/RESEARCH.md

- Search date
- Sources reviewed
- Comparable projects/products
- Comparison table: name, link, audience, core features, stack clues, license/pricing, maintenance/adoption, strengths, gaps
- Feasibility assessment
- Differentiation strategy
- How the signature feature compares with existing products and fills a gap
- Risks to verify

## docs/RESOURCE_INVENTORY.md

Use this document to make implementation resources explicit instead of leaving them implicit in other docs.

- Inventory date
- Selection criteria: MVP relevance, implementation leverage, maintenance quality, cost, license, privacy/security, and fit with the chosen stack
- Reference projects/products table: name, link, source, license/pricing, stack clues, reusable patterns, differentiation lesson, status (`Use now`, `Evaluate`, `Optional`, or `Avoid for MVP`)
- Codex skills/plugins/tools table: skill or tool name, purpose, when to use it, required setup/auth, output expected, status
- Technologies/libraries table: framework/package/tool, role, why chosen, alternatives considered, install/setup notes, risks, status
- APIs/integrations table: provider/API, use case, auth method, pricing/rate limits, sandbox/test mode, data/privacy notes, fallback plan, status
- Materials/assets table: asset or source, type, license/usage rights, intended use, required transformation, owner/location, status
- Data sources and fixtures: sample data, seed content, schemas, public datasets, mock services, and validation data
- Verification resources: official docs, test sandboxes, example repos, API explorers, local tools, browsers/devices, CI checks, accessibility/performance tools
- Immediate actions: which resources to fetch, verify, install, request access for, or avoid before implementation

## docs/PRD.md

- Problem statement
- Personas or user segments
- User journeys
- Functional requirements
- Signature feature spec: user story, MVP behavior, edge cases, acceptance criteria, and future version
- Non-functional requirements
- UX/style requirements
- Edge cases
- Acceptance criteria
- Analytics or success signals

## docs/TECHNICAL_DESIGN.md

- Stack decision and rationale
- Resource inventory summary: key technologies, APIs, assets, and agent/tooling support selected for implementation
- Architecture overview
- Folder/module structure
- Data model
- API contracts or integration contracts
- State management
- Signature feature implementation: feasible technical approach, required libraries/services/data, complexity, risks, and fallback plan
- Authentication/authorization
- Error handling
- Security/privacy considerations
- Testing strategy
- Deployment and environment variables
- Observability and operations
- Known tradeoffs

## docs/ROADMAP.md

- Milestone 0: research and setup
- Milestone 0 resource actions: verify licenses, request API keys, install scaffolding tools, confirm reusable assets, and validate reference projects
- Milestone 1: foundation and first vertical slice
- Milestone 2: core workflows
- Milestone 3: signature feature and data/integrations
- Milestone 4: quality, deployment, and polish
- Future ideas

## TODO.md

Use a task table or checklist with:

- Status
- Priority
- Task
- Dependency
- Output
- Acceptance criteria

Include specific implementation tasks for the signature feature's MVP slice, plus any deferred future-version tasks.

Include setup and verification tasks for critical resources from `docs/RESOURCE_INVENTORY.md`, such as API key setup, asset licensing checks, package installation, skill/plugin setup, reference project review, and sandbox integration tests.

Keep TODO items small enough to implement and verify independently.
