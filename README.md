# Rawand Hoshyar Portfolio

A minimal portfolio website for architecture and photography.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser.

3. **Build for production**
   ```bash
   npm run build
   ```
   This creates a `dist` folder ready for deployment.

## Deploying to Netlify

### Option 1: Drag and Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to deploy

### Option 2: Connect GitHub (Recommended)
1. Push this project to a GitHub repository
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

## Adding Project Images

1. Export images from your portfolio (PNG or JPG format, ~1500px wide)
2. Add them to `public/images/projects/`
3. Name them to match the code (use either .png or .jpg):

| Project | Hero image | Gallery images (5 each) |
|---------|-----------|-------------------------|
| The Slipway Public House | `slipway-hero` | `slipway-1`, `slipway-2`, `slipway-3`, `slipway-4`, `slipway-5` |
| Separation for the Actor | `separation-hero` | `separation-1`, `separation-2`, `separation-3`, `separation-4`, `separation-5` |
| Eden's Workshop | `eden-hero` | `eden-1`, `eden-2`, `eden-3`, `eden-4`, `eden-5` |
| Between Currents | `currents-hero` | `currents-1`, `currents-2`, `currents-3`, `currents-4`, `currents-5` |

The site automatically tries PNG first, then falls back to JPG.

## Adding More Polaroids

Edit `src/pages/Shop.jsx` and add to the `polaroids` array:

```javascript
{
  id: 9,
  title: 'New Polaroid Title',
  description: 'Location',
  price: 40,
  image: '/images/polaroids/polaroid-9.png',
  available: true
}
```

## Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Fonts**: Change Google Fonts link in `index.html`
- **Content**: Edit text in page components under `src/pages/`

## Future: Adding E-commerce

When ready to accept payments directly:
1. Sign up at [Snipcart](https://snipcart.com)
2. Add their script to `index.html`
3. Add buy buttons to shop items

For now, purchases go through Instagram DM (no fees).
