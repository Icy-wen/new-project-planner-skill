# AutoOps Content Agent

This is the working application scaffold for the 自动运营智能体 project.

The first development slice focuses on a professional content-operations backend UI with fixture data:

- Trend radar
- Brand-aware multi-platform draft generation
- Review and scheduling queue
- Daily retrospective and tomorrow strategy

## Development

```powershell
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Current Scope

This scaffold intentionally uses local fixture data first. Platform APIs, database persistence, background workers, and LangGraph orchestration are planned in the root project documents and will be added after the core workflow is validated.
