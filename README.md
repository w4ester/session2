
LLM Workshop for Marketers — Session 2 (GitHub Pages)
Fully static workshop site + slide deck that run on GitHub Pages.

What’s inside
/index.html — hands-on site (tokenization, prompting, templates, agents)

/slides/ — HTML slides powered by reveal.js

/assets/ — CSS & JS

One‑time setup (GitHub Pages)
Create a new GitHub repository (public or private).

Upload all files in this folder to the repo root (or use Add file → Upload files).

Go to Settings → Pages and set:

Source: Deploy from a branch

Branch: main (root) ➜ Save

Your site will be available at https://<your-username>.github.io/<repo-name>/

Tip: If you prefer publishing from /docs, move these files into a /docs folder and select that in Pages settings.

Local development
Open index.html directly in your browser, or serve locally (optional):

bash
Always show details

Copy code

No API keys required
All interactions on the site are client-side. The tokenizer uses a pure-JS CL100K model and does not call external APIs.

Customize
Update text in index.html and slides/slides.md

Adjust styles in assets/css/styles.css

Extend interactivity in assets/js/app.js

License
MIT — feel free to reuse for your own workshops.
