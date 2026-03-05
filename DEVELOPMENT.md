# 🛠️ Development Setup & Hot-Reload Guide

## What We Installed

✅ **nodemon** - File watcher for automatic server restart
✅ **Next.js Turbopack** - Ultra-fast compilation engine
✅ **.env.local** - Environment configuration

---

## How It Works (Behind the Scenes)

### Development Server Flow

```
You Save File (Ctrl + S)
        ↓
Nodemon/Next.js Detects Change
        ↓
Turbopack Recompiles Code (FAST ⚡)
        ↓
Hot Module Replacement (HMR)
        ↓
Browser Auto-Refreshes
        ↓
See Changes Live! 🎉
```

### Example Workflow

**Scenario: You want to change the hero section text**

```bash
# 1. Server is already running
npm run dev

# 2. Open src/components/HeroSection.tsx

# 3. Find this line:
# "Engineer Building Products That Matter"

# 4. Change it to:
# "Building Amazing Products"

# 5. Save the file (Ctrl + S)

# 6. Check browser - BOOM! It updated automatically ✨
# No need to refresh manually!
```

---

## Two Ways to Run Dev Server

### Way 1: Next.js Turbopack (DEFAULT) ⭐⭐⭐

```bash
npm run dev
```

**Advantages:**

- ⚡ Fastest recompilation
- 🔄 Automatic hot-reload
- 📱 Browser DevTools preserved
- 💪 Built-in by Next.js

**Best for:** 99% of development

**What's Turbopack?**

- New compiler written in Rust
- 10x faster than Webpack
- Used by Vercel, Next.js, and major frameworks

---

### Way 2: Nodemon Alternative ⭐⭐

```bash
npm run dev:watch
```

**Advantages:**

- 👀 Explicit file watching
- 📋 Shows watched files
- 🔧 More configurable

**Best for:** When default hot-reload isn't working

**Configuration:** `nodemon.json`

---

## File Watching Configuration

### What Gets Watched (nodemon.json)

```json
{
  "watch": ["src"],
  "ext": "ts,tsx,json,css",
  "ignore": ["node_modules", ".next", ".git", "public"],
  "exec": "next dev",
  "delay": 500
}
```

**Explanation:**

- **watch**: Monitor `src/` folder only
- **ext**: Watch these file types
- **ignore**: Don't watch these folders (saves resources)
- **delay**: 500ms between detections (prevents double-restarts)
- **exec**: Run `next dev` when changes detected

---

## Environment Configuration

### .env.local

```env
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

**What it does:**

- Sets environment to development mode
- Disables Next.js telemetry (privacy)

---

## Common Questions

### Q: Do I need to run both servers at once?

**A:** No! Just pick one:

- `npm run dev` (recommended)
- `npm run dev:watch` (if needed)

### Q: What if changes don't appear?

**Solutions:**

1. Check if server is still running
2. Hard refresh browser (Ctrl + Shift + R)
3. Try `npm run dev:watch` instead
4. Restart server (Ctrl + C, then `npm run dev`)

### Q: Can I edit .env files while server is running?

**A:** No, you'll need to restart the server for .env changes to take effect

### Q: How fast are the updates?

**A:** Usually **1-3 seconds** depending on file complexity

### Q: Can I use this setup in production?

**A:** No! For production use `npm run build && npm run start`

---

## Hot-Reload File Examples

### ✅ Files That Auto-Reload (No Restart Needed)

```bash
# Component changes
src/components/HeroSection.tsx
src/components/Navbar.tsx

# Page content
src/app/page.tsx

# Data changes
src/data/projects.ts
src/data/skills.ts

# Styles (CSS/Tailwind)
src/app/globals.css
src/styles/custom.css

# Config (some)
next.config.ts ❌ (needs restart)
tailwind.config.ts ❌ (might need restart)
```

### ❌ Files That Need Restart

```bash
# Environment variables
.env.local           ❌ Restart needed

# Dependencies
package.json         ❌ npm install + restart

# Build config
next.config.ts       ❌ Restart needed
tsconfig.json        ⚠️  Might need restart
```

---

## Performance Metrics

| Metric                | Value        |
| --------------------- | ------------ |
| Initial Start         | ~2 seconds   |
| Code Change Detection | ~500ms       |
| Hot-Reload            | ~1-3 seconds |
| File Watch Delay      | 500ms        |

---

## Keyboard Shortcuts

| Shortcut           | Action                      |
| ------------------ | --------------------------- |
| `Ctrl + C`         | Stop server                 |
| `Ctrl + S`         | Save file (triggers reload) |
| `Ctrl + Shift + R` | Hard refresh browser        |
| `F12`              | Open browser DevTools       |

---

## Troubleshooting Checklist

When changes aren't appearing:

- [ ] Is the terminal showing `Ready` and `GET 200`?
- [ ] Did you save the file? (Ctrl + S)
- [ ] Try hard refresh? (Ctrl + Shift + R)
- [ ] Check browser console for errors (F12)
- [ ] Try restarting server (Ctrl + C, npm run dev)
- [ ] For .env changes: Always restart

---

## Next Steps

1. **Start the server:** `npm run dev`
2. **Open browser:** `http://localhost:3000`
3. **Edit a file:** Make any change in `src/`
4. **Save:** Ctrl + S
5. **Watch magic happen:** Auto-reload! ✨

---

**Questions?** Check `QUICK_START.md` for common tasks!
