# AGENTS.md — gpt-researcher-src

> Active source-code project for GPT Researcher customizations, fixes, and upstream work.

**Status:** Active | **Role:** Source code / local fixes / upstream patching | **Operator:** Beau Boorman

## 1. Project Description

- Source-code repo corresponding to the GPT Researcher deployment project
- This is where code changes, local patches, debugging, and upstream PR work belong
- Existing local project state was almost empty despite the repo being strategically important
- This project should be treated separately from the deployment wrapper repo

## 2. Current State

- **Progress:** Real source repo with known local fixes/possible upstream work, but local project truth is underdeveloped
- **Blockers:** Missing framing/runtime layers and sparse task tracking
- **Assets:** Source repository itself and adjacent deployment docs that reference source changes
- **Relationship to other projects:** Directly paired with `gpt-researcher` deployment project

## 3. Key Paths

| What | Path |
|------|------|
| Project root | `~/Projects/gpt-researcher-src/` |
| Static framing | `~/Projects/gpt-researcher-src/AGENTS.md` |
| Runtime state | `~/Projects/gpt-researcher-src/PULSE.md` |
| Task tracking | `~/Projects/gpt-researcher-src/gpt-researcher-src-project-tasks.taskpaper` |

## 4. Workstream Boundaries

Likely workstreams include:
- Local source fixes
- ARM64/build issues
- Upstream bugfix PR work
- Code quality/debugging for deployment-linked problems
- Clarifying what should be fixed locally vs upstream

## 5. Agent Operating Policy

### CAN do
- Read source code and project files
- Help organize source-level priorities and bugfix work
- Support source-of-truth maintenance
- Help separate source concerns from deployment concerns

### CANNOT do
- Commit/push upstream without Beau approval
- Assume deployment fixes belong in source or vice versa without checking
- Make destructive source-control changes without approval

### Escalate to Beau
- PR submissions
- Rebase/history changes
- Any change affecting live deployment strategy

## 6. Next Actions

1. Add explicit runtime-truth layer (`PULSE.md`)
2. Replace placeholder task list with real source-project tasks
3. Clarify the next concrete source-code milestone
