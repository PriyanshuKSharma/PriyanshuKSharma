# Priyanshu Kumar Sharma: macOS-style portfolio

A portfolio that behaves like a macOS desktop. Each section opens as a draggable window, and several can be open at once.
No framework and no build step: plain HTML, CSS and JavaScript.

## Run it
- Open `index.html` in a browser (double-click works).
- Or serve the folder: `python3 -m http.server 8000`, then visit http://localhost:8000
- Deploy: see "Deploy with GitHub Actions" below, or drop the folder on Vercel / Netlify.

## Structure
```
index.html              page shell (menu bar, dock, boot screen), loads the files below
css/
  base.css              variables, menu bar, desktop icons, windows, dock
  components.css        stat cards, terminal, spotlight, widgets
  system-ui.css         menu dropdowns, Launchpad, Control Center, notifications, lock screen
  apps.css              sidebar/detail layout, cards, contacts, resume paper, tables
  theme.css             dark cyber theme, aurora wallpaper, glass windows, avatar, boot
  effects.css           Mission Control, snapping, typewriter
data/                   YOUR CONTENT: edit these files to update the site
  experience.js         work, internships, education (EX, ED)
  projects.js           projects (PJ)
  skills.js             skill categories and percentages (MXC)
  credentials.js        certifications, awards, hackathons (CE, AW, HK)
  research.js           papers and research (RS)
  desktop.js            apps pinned to the desktop by default (DEFAULT_PINNED)
  github.js             GitHub username (GH) and an offline snapshot of your counts
  learning.js           learning hub link (LH) and every learning website (LW)
js/
  helpers.js            constants, icon set, HTML helpers
  apps.js               app definitions (About, Experience, Projects, Skills, Certificates, Research, Resume, Contacts)
  apps-terminal.js      Terminal app: virtual file system + all commands
  window-manager.js     open / close / minimize / zoom / drag, sidebar layout
  widgets.js            "~/now" card, animated stats, cursor glow
  spotlight.js          Ctrl/Cmd + K search
  menubar.js            menu dropdowns, Apple menu, right-click menu
  launchpad.js  control-center.js  dock.js  system.js
  mission-control.js  snap.js  effects.js  main.js
assets/
  images/profile.jpg    profile photo (used in About, Contacts, boot and lock screens)
  images/favicon-*.png  browser tab icon (your photo); apple-touch-icon.png for phones
  images/achievements/  GitHub badge images (Pull Shark, Starstruck, Pair Extraordinaire, Quickdraw, YOLO)
  resume/               resume PDF (linked by the "Download PDF" button in the Resume app)
```

## Editing content
- Skill percentages: change the numbers in `MXC` (`data/skills.js`). The bars, category averages and the Terminal `skills` command all update.
- New project: add an entry to `PJ` (`data/projects.js`). Fields: name, subtitle, summary, tech chips, repo name, demo link(s), detail HTML.
- Links (LinkedIn, GitHub, paper DOI): `LI`, `G`, `DOI` at the top of `js/helpers.js`.
- Data is stored as `.js` (not `.json`) so the site works when opened straight from disk. Browsers block `fetch` on `file://`.

## Script order matters
Scripts share one global scope and load in the order listed in `index.html`: helpers, data, apps, then the window manager and the feature modules, with `main.js` last.

## Shortcuts
Ctrl/Cmd + K search · F3 or Ctrl + Up Mission Control · drag a window to a screen edge to snap · Terminal: `help`, `neofetch`, `skills`, `matrix`; the Terminal has cd, ls, cat, tree, open, close, projects, skills, research, contact and more (type `help`)

## Deploy with GitHub Actions
`.github/workflows/deploy.yml` validates the site (JS syntax, missing files) and publishes it to GitHub Pages on every push to `main`.
1. Put the contents of this folder at the root of a GitHub repo (so `index.html` is at the top level) and push to `main`.
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push again, or run the workflow from the **Actions** tab. The live URL appears on the deploy job and in Settings → Pages.
If your default branch is not `main`, change `branches: [main]` in the workflow.

## GitHub Activity (live data)
The GitHub Activity app loads data in the browser and caches it in `localStorage` for 30 minutes:
- profile counts, repositories (languages, recently updated) and recent events from `api.github.com` (unauthenticated, 60 requests per hour per visitor IP, which the cache keeps well under)
- the contribution calendar from the public `github-contributions-api.jogruber.de` service, because GitHub's REST API does not expose it (it needs a GraphQL token). If that service is down, it falls back to the `ghchart.rshah.org` image.
- achievement badges are local images in `assets/images/achievements/` (GitHub has no API for them). Replace the PNGs or edit `AC` in `js/github-app.js` when you earn new ones.
Change the username in `data/github.js` (`GH`). These calls work on GitHub Pages or any normal host. They are blocked inside the claude.ai preview, where the app shows your saved counts only.

## Safari
The learning websites app is a small Safari: a Start Page with favorites, tabs, an address bar and an **Open in new tab** button.
- Any link to `*.github.io`, `*.web.app` or `*.vercel.app` anywhere on the site (project demos, the About links, Terminal output, Spotlight) opens in Safari first. Links to other sites (GitHub, LinkedIn, DOI) open normally. Ctrl/Cmd-click always opens a normal tab. Edit the list `SFH` in `js/learning-app.js`.
- Add sites in `data/learning.js` (`LW` for learning sites, `LF` for projects and portfolio).
- A site only shows inside the window if it allows embedding. If a page stays blank, use Open in new tab.

## Pin apps to the desktop
The desktop starts with no app icons. Right-click any dock icon and choose **Pin to Desktop** (or **Remove from Desktop**); right-click a desktop icon to remove it. In Terminal: `pin projects`, `unpin projects`. A visitor's choice is saved in their browser. To choose the default for everyone, list app ids in `data/desktop.js`, for example `var DEFAULT_PINNED=["about","projects"];`.
