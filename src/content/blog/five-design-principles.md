---
title: "Five Design Principles Behind PaperStack"
description: "PaperStack isn't just a design system — it's a philosophy. Here are the five principles that guide every decision we make."
pubDate: 2026-05-28
author: "GraceSoft Team"
tags: ["design", "philosophy", "typography", "depth"]
---

Every design system makes choices. But the best ones make choices that are *coherent* — where each decision reinforces every other. Here are the five principles that govern PaperStack.

---

## 1. Depth Over Float

Most modern UI frameworks default to floating elements — components that hover above a neutral background with a single drop shadow. It's clean, but it's also a bit ethereal.

PaperStack takes a different approach. Our shadow system is modelled on stacked paper: multiple thin lines below each card simulate the edges of sheets underneath. Elements feel *grounded* rather than levitated.

The effect is subtle. You may not immediately notice it. But once you do, you can't unsee how weightless most other UIs feel.

---

## 2. Warmth as a Design Decision

Cool whites and pure blacks are common defaults. They're neutral, safe, and technically accurate. They're also a bit clinical.

PaperStack's base colour, `#faf8f5`, is barely-warm. A hint of yellow, a trace of cream. It's the colour of paper stock, not a monitor calibration card. Combined with slightly-warm greys for borders and shadows, it creates an atmosphere that's comfortable rather than sterile.

This is a small thing. But small things accumulate.

---

## 3. Typography as Structure

In most UI systems, typography is a set of font sizes. In PaperStack, it's the primary structural element.

Playfair Display headings establish hierarchy and pull attention. Montserrat body text provides a neutral, legible field. Source Code Pro labels — used for tags, timestamps, and metadata — create a secondary layer of precision.

The three faces don't compete; they occupy different registers. Used correctly, you can build an entire page hierarchy from typography alone, before adding a single box or border.

---

## 4. Restraint as a Feature

Two brand colours. A handful of greys. No gradients. No colour states beyond monochrome.

This isn't minimalism for aesthetic fashion — it's a recognition that colour is the most overused tool in the UI designer's arsenal. When you restrict it, you force the system to earn its visual weight through other means: proportion, whitespace, typographic scale, and the paper-stack shadows that give PaperStack its name.

Restraint also means your design ages better. A system that relies on trends will date itself. A system that relies on fundamentals remains legible.

---

## 5. Components Should Teach

Every PaperStack component is designed to be legible at the implementation level. Look at the HTML structure of any component and you can understand its intent. Look at the CSS and you can understand why each property is there.

This is why we use custom properties heavily rather than utility classes. `box-shadow: var(--shadow-paper-md)` tells you something; a long string of atomic classes does not.

We want PaperStack to be a system you can *read*, not just a system you can use. The goal is that working with it teaches you something about design.

---

These principles aren't rules — they're perspectives. You can break any of them. But we've found that the more consistently they're applied, the more coherent the result.

More next week.

— The GraceSoft Team
