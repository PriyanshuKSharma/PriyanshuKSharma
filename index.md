# Priyanshu Kumar Sharma: macOS-style portfolio

A portfolio that behaves like a macOS desktop. Each section opens as a draggable window, and several can be open at once.
No framework and no build step: plain HTML, CSS and JavaScript.

## Run it
- Open `index.html` in a browser (double-click works).
- Or serve the folder: `python3 -m http.server 8000`, then visit http://localhost:8000
- Deploy: push the folder to a GitHub repo and enable Pages, or drop it on Vercel / Netlify.

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
