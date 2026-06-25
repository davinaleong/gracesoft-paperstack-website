---
title: "PaperStack Update: Docs, Store & June 2026 Fixes"
description: "We shipped the PaperStack documentation site, opened the store with Core (free) and Pro tiers, and landed a handful of fixes across the playground and build tooling."
pubDate: 2026-06-25
author: "GraceSoft Team"
tags: ["update", "paperstack", "docs", "release"]
---

A busy few days at GraceSoft. Here's everything that shipped.

## Documentation Site

The PaperStack docs are live at [docs.paperstack.gracesoft.dev](https://docs.paperstack.gracesoft.dev/), deployed on Vercel. You'll find the full token reference, component API, Lemon Squeezy integration details, and variant descriptions for every framework.

We also added a pro audit specs document — a structured checklist for teams adopting the Pro tier — and fleshed out the Lemon Squeezy variant titles, descriptions, and product copy throughout.

## Store Is Open

Core and Pro are now available through the store:

- **Core** — free, always. Includes the base token system, CSS variables, and the foundational component set.
- **Pro** — $22 USD. Adds the extended component library, audit specs, and priority support.

Both tiers are served through Lemon Squeezy.

## Fixes

**Playground — G2 ink bug.** The `G2` ink colour was rendering incorrectly in the playground preview. Fixed.

**`@paperstack/tokens` bare imports.** Bare `@paperstack/tokens` and `foundations` imports were failing to resolve in the playground. Switched to source-relative paths.

**Zip builder — Windows cross-platform.** The zip builder script was using POSIX path separators and failing on Windows. Now works cross-platform.

**Turbo upgrade.** Bumped Turbo to 2.9.18 and switched to stream UI for faster build output.

---

More coming soon — follow the [blog](/blog) or check the docs for the latest.
