---
title: "Introducing PaperStack: Where Digital Meets Paper"
description: "Today we're launching PaperStack — a UI design system built around the warmth, depth, and tactility of paper. Here's why we built it, and what makes it different."
pubDate: 2026-05-31
author: "GraceSoft Team"
tags: ["announcement", "design-system", "paperstack"]
---

Design systems have gotten very good at being precise. Atomic, scalable, predictable. But somewhere along the way, many of them started to feel the same — cold, frictionless, and curiously weightless.

PaperStack is our answer to that.

## The Idea

Everything started with a simple observation: paper has a physical presence that screens don't. When you hold a sheet of paper, you're aware of its weight. You can feel its surface. You can stack it, fold it, tear it. It has grain, shadow, and depth.

Digital interfaces simulate very little of this. And yet — the most memorable ones often borrow from these qualities. Skeuomorphism got mocked, but it was onto something. The problem wasn't the idea. It was the execution.

PaperStack isn't about imitating paper literally. It's about capturing the *feeling* of paper — the warmth, the layering, the tactile restraint — and translating that into a coherent design language for the web.

## What Makes PaperStack Different

### The Shadow System

The signature feature. Instead of a single drop shadow, PaperStack's cards use a stacked shadow system that simulates multiple sheets of paper underneath each element. The result is depth that feels physical rather than floating.

```css
.ps-card {
  box-shadow:
    0 1px 0 0 #d4cfc9,   /* first sheet edge */
    0 2px 0 0 #dedad4,   /* second sheet */
    0 3px 0 0 #e8e4df,   /* third sheet */
    0 6px 16px rgba(0,0,0,0.10); /* ambient */
}
```

This is a small thing, but you notice it immediately. It makes cards feel grounded.

### The Type System

We use three typefaces, each with a clear purpose:

- **Playfair Display** for headings — editorial, classical, slightly dramatic
- **Montserrat** for body text — geometric, clean, highly readable
- **Source Code Pro** for labels, tags, and code — precise, monospaced, technical

The pairing of Playfair and Montserrat is intentional. Playfair brings personality; Montserrat keeps things legible. Together they feel like a well-designed publication.

### The Palette

Two foundational colours: `#f1f5f9` (Indigo — a cool, papery light) and `#000000` (Black — ink on page). Everything else — the warm off-whites, the muted greys — is derived from these roots.

The restraint is the point. When your palette is this minimal, every element of your interface has to work harder through shape, spacing, and typography.

## Current Status

PaperStack is in **early access**. The core design tokens and component library are stable. Documentation is being written. We're looking for designers and developers to try it out, stress-test it, and tell us what's missing.

If you're interested, [sign up for early access](#contact) on the homepage. We'll be in touch.

## What's Next

In the coming weeks, we'll be publishing:

1. A deep dive into the shadow system and how to customise it
2. The full design token reference
3. Framework-specific integration guides (React, Vue, Astro, Svelte)

Thanks for reading. More soon.

— The GraceSoft Team
