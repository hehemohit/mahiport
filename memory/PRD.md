# Mahi Vinod Soni — Portfolio PRD

## Original Problem Statement
Build a modern, premium, responsive personal portfolio for Mahi Vinod Soni (Data Scientist & AI Engineer). Ivory/Beige/Brown/Black palette. Sections: Hero (particle bg, headshot, CTAs, socials), About + stats + Education, Experience, Projects (with filtering), Skills (animated badges), Achievements, Leadership, Certifications, Contact (mailto), Footer. Light/Dark toggle, animated counters, smooth scroll, loading animation, SEO.

## User Personas
- **Primary**: Recruiters & hiring managers evaluating Mahi for Data Science / AI Engineer roles.
- **Secondary**: Peer engineers/researchers reviewing projects, professors, network connections.

## Core Requirements (Static)
- Single-page React app, no auth, no DB writes
- Color palette: Ivory #F8F5F0, Beige #E8DDD0, Brown #4A3F35, Ink #111111
- Fonts: Cabinet Grotesk (display), IBM Plex Sans (body), JetBrains Mono (numbers/badges)
- Light mode default with persistent toggle
- Every interactive element carries kebab-case `data-testid`
- Smooth scroll navigation, animated counters, canvas particle background
- Mobile-first responsive (375px → 1920px)

## What's Been Implemented (2026-12-26)
- ✅ Hero with canvas particle background, headshot placeholder card, 3 CTAs, social links
- ✅ Fixed Navbar with desktop links + mobile hamburger + theme toggle
- ✅ About section with 4 animated stat counters (9.32 / 95 / 87 / 3) + Education timeline
- ✅ Experience timeline (Pfizer, SYBGEN, ACSE Solutions)
- ✅ Bento Projects grid with All/GenAI/MLOps/Analytics filtering
- ✅ Skills (4 groups, 17 badges)
- ✅ Achievements + Certifications + Leadership card
- ✅ Contact with mailto/LinkedIn/GitHub rows + Resume download
- ✅ Footer "Designed and Developed by Mahi Soni"
- ✅ Page Loader (000→100 counter)
- ✅ SEO meta tags, dark/light theme persistence in localStorage
- ✅ All 54 automated UI/backend tests passing

## Prioritized Backlog
- **P1** Replace headshot placeholder with real photo (asset upload)
- **P1** Wire up actual resume PDF for download (place in `/app/frontend/public/resume.pdf`)
- **P1** Fill real social URLs in `/app/frontend/src/data/portfolio.js` (LinkedIn / GitHub / email)
- **P2** Add scroll progress bar at top
- **P2** Add custom cursor & magnetic hover on CTAs
- **P2** Add a blog/writing section
- **P2** Convert headshot side into an interactive 3D card
- **P3** Add OG image generation for richer link previews
- **P3** Add `lenis` smooth-scroll for buttery scrolling

## Next Tasks
1. Collect real assets from user (photo, resume, social URLs)
2. Replace placeholders in `data/portfolio.js`
3. Optionally migrate content to a CMS-style backend `/api/profile` endpoint
