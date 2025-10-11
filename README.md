# GitHub Pages Starter Site


This repository is a minimal static site you can deploy with GitHub Pages.


## Files
- `index.html` — Landing page
- `assets/css/styles.css` — Styles
- `assets/js/main.js` — Small JS for theme toggle and year
- `.nojekyll` — ensure GitHub Pages serves static files


## How to deploy
1. Create a new GitHub repository. For a user site, name it `your-github-username.github.io`.
2. Clone locally and copy the files into the repository root.


```bash
# replace the URL with your repo
git clone https://github.com/your-username/your-repo.git
cd your-repo
# copy the files from this template into the repo root
git add .
git commit -m "Initial site"
git push origin main
```


3. Open GitHub, go to the repository Settings → Pages, and choose `main` (or `gh-pages`) branch and `/ (root)` folder. Save. Your site will be published at `https://your-username.github.io/`.


## Alternative: Use `gh-pages` branch
If you don't want to use a special repo name, you can create any repo and publish from
