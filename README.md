# ConnectwithGMG / Portfolio

> AI-Crafted with Claude by Anthropic
> Apple MacBook Neo inspired design

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- npm (comes with Node.js)

### Launch in 3 commands

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

That is it! Open **http://localhost:5173** in your browser.

### Build for Production

```bash
# Build static files
npm run build

# Preview the production build
npm run preview
```

The `dist/` folder contains your production-ready site. Deploy it anywhere:
- **Firebase**: `firebase deploy`
- **Netlify**: drag and drop the `dist/` folder
- **Vercel**: `vercel --prod`
- **GitHub Pages**: push `dist/` contents

## Project Structure

```
gmg-portfolio/
  index.html          # Entry HTML
  package.json        # Dependencies
  vite.config.js      # Vite config
  public/
    img/              # Your images (favicon, photos, backgrounds)
  src/
    main.jsx          # React entry point
    App.jsx           # The entire portfolio app
```

## How to Update Content

All your data lives at the top of `src/App.jsx` in the `D` object:

- **Experience points**: Edit `D.exp` array
- **Skills**: Edit `D.skills` array (name + percentage)
- **Passions**: Edit `D.passions` array
- **Blog posts**: Edit `D.blogs` array
- **Contact info**: Edit `D.email`, `D.phone`, `D.location`
- **Social links**: Edit `D.li`, `D.gh`, `D.tw`

## Pages

| Page | What it shows |
|------|--------------|
| **Home** | Hero, stats, experience, skills, certifications, contact form |
| **Life of GMG** | Quote, passions (bike, photography, travel, fitness) |
| **My Thoughts** | Blog cards for your writings |

## Adding New Blog Posts

In `src/App.jsx`, find the `blogs` array and add:

```js
{ tag: "Your Category", title: "Your Title", excerpt: "Short description.", color: "#hexcolor" }
```

## Adding New Photos

Drop images into `public/img/` and reference them as `/img/yourphoto.jpg` in the code.
