# Design Brief: Digital Neural Campus

| Aspect | Details |
|--------|---------|
| **Tone & Purpose** | Brutalist futurism—premium computational energy for academic AI. Showcase/landing targeting institutions. |
| **Theme** | Dark cinematic AI terminal with neon cyan accents. Deep charcoal backgrounds evoke advanced systems. |
| **Differentiation** | Glassmorphic cards + neon glow on interaction. Unmistakable AI terminal aesthetic. |

## Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| background | 0.08 0.01 0 | Page background; deep charcoal |
| foreground | 0.98 0 0 | Primary text; bright white |
| card | 0.12 0.01 0 | Card backgrounds; slightly elevated |
| accent (primary) | 0.85 0.25 200 | Neon cyan for CTAs, highlights, AI states |
| secondary | 0.22 0.01 0 | Muted surfaces; steel grey |
| muted | 0.18 0.01 0 | Disabled, secondary surfaces |
| border | 0.95 0 0 | 10% opacity white for glassmorphism |
| destructive | 0.65 0.19 22 | Error, warning states |

## Typography

| Layer | Font | Scale | Usage |
|-------|------|-------|-------|
| Display | General Sans (400) | 2.5rem, 2rem, 1.5rem | Hero titles, section headers |
| Body | DM Sans (400) | 1rem, 0.875rem | Body text, content, UI labels |
| Mono | Geist Mono (400) | 0.875rem | Code, technical specs, data displays |

## Structural Zones

| Zone | Treatment | Border | Background |
|------|-----------|--------|------------|
| Header/Nav | Glass card, frosted | `border-white/10` | `bg-card` + backdrop blur |
| Hero | Full-width deep background | None | `bg-background` |
| Content Cards | Glassmorphic | `border-white/10` + glow-cyan | `bg-card/40` + blur |
| Footer | Muted surface | `border-t border-white/10` | `bg-secondary` |

## Shape & Spacing

- **Radius**: 4px (minimal, geometric)
- **Spacing**: 16px base unit; tighter on mobile
- **Density**: Compact cards with 8px inner padding on small; 16px on medium+

## Component Patterns

- **Buttons**: Accent cyan with glow on hover; smooth scale (0.95 → 1)
- **Cards**: Glass effect with 10% white border, backdrop blur, semi-transparent bg
- **Text Accents**: Gradient cyan for highlights; `text-glow` utility
- **Links**: Underline on hover with fade transition

## Motion

- **Transitions**: All 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Entrance**: Scale + fade (0.5s)
- **Hover**: Scale 1.02 + glow increase
- **Parallax**: Subtle on hero elements; 2-3s duration

## Signature Detail

**Neon glow on interaction.** Cyan accents pulse with 20-40px blur radius shadows. Cards respond to hover with increased glow intensity. Reinforces "AI terminal" metaphor.

## Accessibility

- Cyan accent: 0.85 L, high contrast on 0.08 L background (>7:1 ratio)
- Text hierarchy: size + weight (400 body, 600+ headers)
- Focus states: Cyan ring + glow
- "Easy Word" explanations for non-technical users via tooltips/modals
