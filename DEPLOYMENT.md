# Deploying Aperture Club

## Option A — Netlify (Recommended for CMS)

1. Push this repo to GitHub / GitLab / Bitbucket
2. Import the repo into [Netlify](https://app.netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Enable **Netlify Identity** in Site Settings → Identity
6. Enable **Git Gateway** in Identity → Services → Git Gateway
7. Invite admin users via Identity → Invite users
8. Your CMS will be live at `https://your-site.netlify.app/admin`

### Enabling Static Export
In `next.config.js`, uncomment:
```js
output: 'export',
trailingSlash: true,
// unoptimized: true,   // only if you don't use Netlify Image CDN
```

---

## Option B — Cloudflare Pages

1. Push to GitHub
2. Connect at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Build command: `npm run build`
4. Output directory: `out`
5. For the CMS, use the **GitHub** backend in `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
```

---

## Local CMS Development

Run the Decap CMS local backend alongside the dev server:

```bash
# Terminal 1
npm run dev

# Terminal 2
npx decap-server
```

Then uncomment `local_backend: true` in `public/admin/config.yml`.

---

## Content Structure

| Content Type | Folder | CMS Path |
|---|---|---|
| Members | `/content/members/` | Admin → Members |
| Showcase | `/content/showcase/` | Admin → Monthly Showcase |
| Tutorials | `/content/tutorials/` | Admin → Tutorials |
| News | `/content/news/` | Admin → News & Events |

All content is stored as Markdown files with YAML frontmatter — editable directly or via the CMS admin panel.
