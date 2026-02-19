# Rawand Hoshyar Portfolio

Personal portfolio website for architecture and photography work.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Ready for Netlify deployment. Just connect your repo and it will auto-deploy.

## Adding Images

### Project Images
Add to `public/images/projects/`:
- `slipway-hero.png` (or .jpg)
- `slipway-1.png` through `slipway-5.png`
- `seperation-hero.png`
- `seperation-1.png` through `seperation-5.png`
- `eden-hero.png`
- `eden-1.png` through `eden-5.png`
- `currents-hero.png`
- `currents-1.png` through `currents-5.png`

### Polaroid Images
Add to `public/images/polaroids/`:
- `polaroid-1.png` through `polaroid-8.png`

## Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx
│   ├── Work.jsx
│   ├── ProjectDetail.jsx
│   ├── Polaroids.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```
