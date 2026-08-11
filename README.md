# RCI Lab Website

Official website source for the Robot Control and Intelligence Laboratory at Kyung Hee University.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static website is generated in `out/` and deployed to GitHub Pages by GitHub Actions.

## GitHub Pages setup

1. Create a public repository named `rcilab.github.io` under the `rcilab` account.
2. Push this project to the repository's `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. The included workflow builds and deploys the static export.

The site is initially published at `https://rcilab.github.io`. After validation, add `public/CNAME` with `rcilab.khu.ac.kr` and update the university DNS record to complete the custom-domain cutover.
