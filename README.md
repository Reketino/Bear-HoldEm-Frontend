## Bear HoldEm VIP — Frontend

- A Texas Hold’em poker frontend built with Next.js, focused on real game state rendering and clean full-stack integration.

- The frontend currently presents the poker game in a structured UI layout, while all poker logic, hand evaluation, betting rules, and AI behavior live in a  custom backend API.

- The long-term goal is a full poker table experience, but this frontend is intentionally built step-by-step — starting with correctness before visual polish.

## 🎯 What This Frontend Does (Current)

- Renders:

- Player hand (you)

- AI hand (hidden until showdown)

- Community cards (flop / turn / river)

- Pot size & current street

- Handles player actions:

- Check

- Call

- Raise

- Fold

- Syncs game state from backend in real time

- Displays hand strength & winner at showdown

## ✔️ All game data is real
## ✔️ No mocked poker logic
## ❌ No poker table visuals yet

## 🧭 What’s Coming Next (Planned)

- 🎴 Poker table layout (felt, seats, center board)

- 🪙 Chip stacks & bet animations

- 🎥 Card dealing & flip animations

- 🪑 Multiple seats (6-max / full ring)

- 🎧 UX polish (sounds, transitions)

- UI realism comes after engine correctness — not before.

## 🧠 Architecture Philosophy

- This frontend is deliberately UI-thin:

- No hand evaluation logic

- No betting rules

- No AI decisions

- Everything comes from the backend.

## This ensures:

- Clean separation of concerns

- Easier debugging

- Realistic full-stack architecture

## 🧩 Component Overview
- components/
- ├── BearPoker.jsx     # Game controller & API bridge
- ├── Hand.jsx          # Renders card groups
- ├── Card.jsx          # Single card (SVG / PNG)
- ├── HandStrength.jsx  # Showdown results


- Each component is intentionally small and reusable.

## 🐻 Honest Summary

- This frontend is not finished visually — and it’s not pretending to be.

- What it is:

- A working poker client

- Driven by a real engine

- Built cleanly

- Ready to evolve into a true poker table UI

## 🧠 Why I think this is a strength

- It helped me develop a better understanding of how backend & frontend work together.

-  It also showed me how precise backend logic can be surfaced and consumed in the frontend.

- While the UI is still simple, but the structure is solid.

- This gives me a strong base to return to the project and keep improving both the game and my skills over time.



## 🚀 Next Step (Technical)

- The next milestone on the frontend side is:

## 👉 Poker table layout

- Player bottom center

- AI top center

- Board centered

Pot in the middle

- Actions near player seat

- No new backend work needed — only layout + animation.