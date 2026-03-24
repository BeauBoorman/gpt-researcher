# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Source fork of [GPT Researcher](https://github.com/assafelovic/gpt-researcher) — where local patches, bugfixes, and upstream PR work happen. Paired with `gpt-researcher` (the deployment wrapper project).

**Stack:** Python, Poetry, Docker

## Commands

```bash
# Run locally
pip install -r requirements.txt
python main.py

# Run via Docker
docker compose up -d

# Tests
cd tests && python -m pytest

# Lint
ruff check .
```

## Key Paths

| What | Purpose |
|------|---------|
| `gpt_researcher/` | Core research agent source |
| `multi_agents/` | Multi-agent orchestration |
| `mcp-server/` | MCP server integration |
| `frontend/` | Web UI |
| `backend/` | API server |
| `tests/` | Test suite |

## Boundary

- **This project:** Source code changes, local fixes, upstream PRs
- **gpt-researcher:** Deployment config and Docker orchestration
