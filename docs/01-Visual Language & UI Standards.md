# Cautus Insight — Design System

> Version: 1.1
>
> Status: Design Standard
>
> Audience:
> - Product
> - Engineering
> - Design
>
> This document defines the visual language of Cautus Insight.
>
> It should be referenced before implementing any UI changes.
>
> **Theme:** Cautus Insight is dark-first. All color specifications in this document reflect the dark theme. A light theme is not planned.

---

# 1. Purpose

This document defines the **visual language, interaction standards, and communication style** of Cautus Insight.

Together with the other core documents, it completes the product definition:

* **PRD** defines **what** the product does.
* **Architecture** defines **how** it is built.
* **Review Engine** defines **how** it reasons.
* **UX Architecture** defines **how** traders experience it.
* **Visual Language & UI Standards** defines **how** that experience looks, feels, and communicates.

Its purpose is to ensure every screen feels like part of the same coherent product.

Every visual decision—from typography and spacing to color, layout, and copywriting—should reinforce the same product philosophy.

**Every design decision in Cautus Insight should make the trader feel like an experienced mentor reviewed their trades before they opened the application.**


---

# 2. Product Personality

If Bloomberg Terminal had an experienced trading mentor built into it, it would feel like Cautus Insight.

The product should feel:

• Calm

• Professional

• Analytical

• Deliberate

• Quietly intelligent

Never:

• Flashy

• Gamified

• Sales-oriented

• Social-media inspired

• Fintech marketing

The product should earn trust through clarity rather than visual excitement.

---

# 3. Design Philosophy

## Coaching before dashboards

Every screen should feel like a review conversation.

Not a collection of widgets.

---

## Insight before metrics

The first thing users should read is the conclusion.

Metrics support conclusions.

They do not replace them.

---

## Calm confidence

The interface should never compete for attention.

The product should direct attention.

Whitespace is preferred over density.

Subtle emphasis is preferred over strong emphasis.

---

## Reduce cognitive load

The user should never search for the answer.

The application should present the answer first.

Every visual decision should reduce the amount of interpretation required.

---

## Consistency over creativity

A consistent interface is more valuable than a clever one.

If two screens solve the same problem, they should look and behave similarly.

---

# 4. Visual Hierarchy

Every screen should follow the same reading order.

Level 1

Hero Insight

↓

Level 2

Primary Recommendation

↓

Level 3

Supporting Evidence

↓

Level 4

Metrics

↓

Level 5

Raw Data

The hierarchy should never be inverted.

Charts should never appear before the conclusion they support.

Tables should never dominate the screen.

The trader should understand the page before reading any numbers.

---

# 5. Information Density

Cautus Insight is an analytical application.

It is not an information-dense application.

Each page should communicate one major lesson.

Avoid placing multiple equally important elements on the same screen.

The eye should naturally know where to look first.

If everything is emphasized, nothing is emphasized.

# 6. Typography

Typography communicates hierarchy.

Not decoration.

Font size, weight, and spacing should always indicate importance.

Never increase font size simply to draw attention.

---

## Font Family

Primary (UI text)

Inter / System UI fonts

Primary (data values, monospaced)

IBM Plex Mono

Typography should prioritize readability over personality. Monospaced fonts are used for prices, P&L values, and other numeric data to ensure vertical alignment in tables.

---

## Typography Scale

### Display

Purpose:

Reserved for page titles only.

Examples:

- Overview
- Trade Cycles
- Execution Quality

Recommended:

32px

Weight:

Bold (700)

Usage:

Once per page.

---

### Hero Insight

Purpose:

The most important text on every screen.

This is the first thing the trader reads.

Recommended:

24px

Weight:

Semibold (600)

Maximum:

Three sentences

Never:

- exceed four lines
- include bullet lists
- become a metrics table

---

### Section Heading

Purpose:

Introduce major sections.

Examples:

- Today's Focus
- Pattern Summary
- Objective Facts

Recommended:

18px

Weight:

Semibold

---

### Card Title

Purpose:

Identify reusable cards.

Examples:

- Exit Efficiency
- Entry Quality
- Biggest Leak

Recommended:

16px

Weight:

Medium

---

### Body

Purpose:

Primary reading text.

Recommended:

15–16px

Weight:

Regular

This should be the default text size throughout the application.

---

### Supporting Text

Purpose:

Descriptions

Recommendations

Context

Recommended:

14px

Color:

Muted

---

### Metadata

Purpose:

Labels

Dates

Secondary information

Recommended:

12–13px

Color:

Subtle gray

Metadata should never compete visually with conclusions.

---

# 7. Color System

Color communicates meaning.

Never decoration.

Most of the interface should remain neutral.

Cautus Insight uses a dark-first color system. The background is near-black. Text is light. Color is used sparingly and always semantically.

---

## Neutral Palette

The following token names map to the Tailwind config (`tailwind.config.js`):

| Token | Hex | Purpose |
|---|---|---|
| `ink-bg` | `#0a0a0a` | Page background |
| `ink-1` | `#0e0e0e` | Card backgrounds, table body |
| `ink-border` | `#1a1a1a` | Borders, dividers |
| `ink-strong` | `#262626` | Elevated surfaces, active nav items |
| `ink-primary` | `#f0f0f0` | Primary text, headings, key values |
| `ink-secondary` | `#a0a0a0` | Secondary text, labels, descriptions |
| `ink-muted` | `#606060` | Tertiary text, placeholders, timestamps |

90% of the interface should use neutral tokens.

---

## Semantic Colors

### Green — Positive Outcome

Token: `trade-profit` (`#22c55e`)

Meaning:

- Profitable trade
- Improving habit
- Strong execution
- Well-executed dimension grade

Never use green for decoration or navigation.

---

### Red — Negative Outcome

Token: `trade-loss` (`#ef4444`)

Meaning:

- Loss
- Recurring mistake that needs attention
- Poorly-executed dimension grade

Never use red for page emphasis or decorative borders.

---

### Amber — Coaching Opportunity

Token: `trade-warn` (`#f59e0b`)

Meaning:

- Mixed execution
- Coaching recommendation
- Pattern flagged for improvement

Amber should feel instructional, not alarming.

---

### Blue — Navigation and Selection

Token: `trade-select` (`#3b82f6`)

Meaning:

- Selected trade row
- Active navigation item
- Interactive element highlight

Blue should never communicate trading performance or outcome.

---

### Additional Semantic Tokens

| Token | Hex | Usage |
|---|---|---|
| `trade-resist` | `#a78bfa` | Premarket indicator badge |

---

### Purple

Reserved for future AI-assisted insights if introduced.

Do not use elsewhere.

---

# 8. Spacing

Whitespace is a feature.

Not wasted space.

Spacing communicates grouping.

---

Spacing Scale

4

8

12

16

24

32

48

64

Use the spacing scale consistently.

Avoid arbitrary values.

---

Vertical Rhythm

Every section should have enough spacing to feel visually independent.

Avoid stacking cards tightly together.

---

Maximum Content Width

Readable content is preferred over full-width layouts.

Long paragraphs should not span the entire screen.

---

# 9. Cards

Cards should group related information.

Cards should never become miniature dashboards.

---

Corner Radius

12px

---

Padding

20–24px

---

Shadow

Very subtle.

Elevation should be minimal.

---

Card Hierarchy

Hero cards

↓

Insight cards

↓

Metric cards

↓

Supporting cards

Do not give every card equal visual weight.

---

Interactive Cards

Hover

Subtle elevation

Selected

Accent border

Soft background tint

Never rely on color alone.

---

# 10. Tables

Tables present evidence.

They are not the primary content.

---

Default Density

Comfortable

Avoid overly compact rows.

---

Row Selection

Hover

Subtle background

Selected

Persistent highlight

---

Sorting

Clearly indicate active sort.

---

Columns

Prioritize decision-making.

Avoid exposing implementation details.

---

# 11. Charts

Charts provide evidence.

Never conclusions.

---

Every chart should answer one question.

Examples:

MAE/MFE

Question:

How much opportunity was available?

Hold Time

Question:

How long do I typically hold trades?

Heatmap

Question:

When do I perform best?

---

Every chart should include:

A one-sentence explanation.

A one-sentence interpretation.

Example:

Most losing trades experienced less than $0.25 adverse movement before failing.

Look for trades that exceed this threshold.

---

Avoid decorative charts.

Every chart should influence a trading decision.

---

# 12. Icons

Icons reinforce meaning.

They do not replace text.

---

Use icons sparingly.

Examples:

✓ Positive behavior

⚠ Needs attention

📈 Improving

📉 Declining

---

Avoid decorative iconography.

Icons should improve scanning.

---

# 13. Empty States

Every empty state should teach.

Not merely report.

Bad

"No data."

Better

"No trades matched this filter."

Best

"No trades matched this filter. Try expanding the date range or selecting another symbol."

Every empty state should help the user recover.

# 14. Copywriting System

Every sentence in Cautus Insight should feel like it was written by an experienced trading mentor.

The product should never sound like:

- a monitoring dashboard
- an alerting system
- a brokerage platform
- a data analytics tool

The application should speak calmly, objectively, and constructively.

---

## Coaching Voice

The application should describe observations.

Never judge the trader.

Bad

"You traded poorly."

Better

"This trade captured only 24% of the available move."

Best

"You exited early. Similar behavior appears in 68% of your winning trades."

---

Always explain:

What happened

↓

Why it matters

↓

What to do next

Never stop after reporting a metric.

---

## Positive Reinforcement

The application should reinforce good habits as often as it corrects mistakes.

Good coaching builds confidence.

Examples

"You respected your stop loss on every losing trade today."

"Your entries continue to improve."

"Your position sizing was disciplined throughout the session."

"You held your winners longer than your recent average."

Positive reinforcement should never feel generic.

It should always reference observable evidence.

---

## Constructive Coaching

Avoid emotionally charged language.

Avoid blame.

Avoid criticism.

Examples

Instead of:

"You made a mistake."

Say:

"This decision reduced the available profit."

Instead of:

"You chased."

Say:

"This entry occurred significantly above your typical entry range."

Instead of:

"Bad exit."

Say:

"The trade exited before momentum weakened."

---

## Confidence

Recommendations should communicate confidence.

High confidence

Observed repeatedly.

Medium confidence

Appears to be emerging.

Low confidence

Insufficient history.

Never overstate certainty.

---

## Recommendation Format

Every recommendation should contain four parts.

Observation

↓

Evidence

↓

Recommendation

↓

Expected Benefit

Example

Observation

Winning trades are exited significantly earlier than available opportunity.

Evidence

Average Exit Efficiency is 42%.

Recommendation

Allow winning trades additional room before exiting.

Expected Benefit

Capturing only 10% more of each winner would materially improve profitability.

---

## Hero Insight Style

Hero Insights should:

Lead with the conclusion.

Use plain English.

Reference evidence.

Never exceed three sentences.

Never become a paragraph of metrics.

Example

Good

Today's profits were driven by disciplined entries. Most losses came from holding losers too long.

Poor

Win Rate 61%.

Profit Factor 1.48.

Average Hold 4m.

MAE 0.31.

---

## Takeaway Style

Every review ends with one Takeaway.

One sentence.

Actionable.

Memorable.

Examples

Tomorrow, focus on protecting losing trades earlier.

Continue trusting your entries while improving your exits.

Your discipline improved today. Keep repeating it.

Never provide multiple Takeaways.

---

## Terminology

Prefer

Trade Cycle

Avoid

Trade Record

---

Prefer

Observation

Avoid

Warning

---

Prefer

Recommendation

Avoid

Alert

---

Prefer

Practice

Avoid

Fix

---

Prefer

Takeaway

Avoid

Conclusion

---

Prefer

Pattern

Avoid

Issue

---

Prefer

Opportunity

Avoid

Problem

---

## Numbers

Numbers should support the message.

Never replace the message.

Bad

Exit Efficiency

41%

Good

You captured 41% of the available move.

Better

You consistently leave nearly half of profitable moves unrealized.

---

## Celebrate Improvement

The application should recognize progress.

Examples

Exit management has improved over the last three weeks.

This behavior appears less frequently than last month.

You're beginning to hold winners more consistently.

Improvement deserves the same visual weight as correction.

---

# 15. Motion & Interaction

Motion should communicate state.

Never decoration.

Animations should feel immediate and subtle.

Recommended duration

150–250ms

Avoid:

Bounce

Elastic

Overshoot

Large scaling effects

The interface should feel stable.

---

Hover

Reveal interactivity.

Not surprise.

---

Selection

Selection should remain visible.

Users should never lose context.

---

Drawer

Opening:

Slide smoothly.

Closing:

Return focus to the originating component.

The drawer should feel contextual rather than modal.

---

Loading

Loading should communicate progress.

Prefer skeleton loaders over spinners.

---

# 16. Accessibility

Accessibility is part of product quality.

Not a future enhancement.

---

Contrast

Meet WCAG AA minimums.

---

Keyboard Navigation

All interactive elements must be keyboard accessible.

---

Focus States

Always visible.

Never rely solely on color.

---

Icons

Never communicate meaning using icons alone.

Always pair with text.

---

Charts

Every chart should include a textual interpretation.

Charts are evidence.

The interpretation is the product.

---

# 17. Design Guardrails

These rules protect Cautus Insight from becoming another analytics dashboard.

---

Do not add metrics without purpose.

Every metric should support a coaching conclusion.

---

Do not create pages around visualizations.

Create pages around trader questions.

---

Do not create components because space exists.

Create components because understanding improves.

---

Do not duplicate responsibility.

One component.

One purpose.

---

Do not emphasize everything.

Visual hierarchy is intentional.

---

Do not replace plain English with financial terminology.

The application should be understandable by an improving trader.

---

Every page should answer:

What should I do differently tomorrow?

If it cannot answer that question, reconsider whether the page belongs.

---

# 18. Design Review Checklist

Before merging any UI change, verify:

□ Does the page have one Hero Insight?

□ Does the Hero Insight appear before charts?

□ Does every chart support a conclusion?

□ Does every recommendation cite evidence?

□ Does the page answer exactly one trader question?

□ Is an existing component reused before creating a new one?

□ Is typography consistent with the hierarchy?

□ Is color communicating meaning rather than decoration?

□ Does the user leave with one memorable lesson?

If any answer is "No," the design should be reconsidered before implementation.