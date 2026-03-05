# 🚀 Quick Start Guide

## First Time Setup

```bash
# 1. Navigate to the project
cd c:\Users\bunny\Job_prep\portfolio

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev
```

**Server will start at:** `http://localhost:3000`

---

## 🔄 Auto-Reload / Hot-Reload Explained

### What is Hot-Reload?

When you save a file, the development server automatically:

1. Detects the change
2. Recompiles the code
3. Updates the browser **without losing your scroll position or form data**

### How to Use It

#### **Option 1: Default (Recommended) ⭐**

```bash
npm run dev
```

- Uses **Turbopack** (fastest compiler)
- Automatically watches all files in `src/`
- Browser auto-refreshes
- **Best for most development**

#### **Option 2: With Nodemon**

```bash
npm run dev:watch
```

- Uses **Nodemon** file watcher
- More explicit file monitoring
- Useful if default doesn't work as expected

---

## 💻 Making Changes

**Simply edit any file and save:**

```
src/components/HeroSection.tsx
      ↓ (save)
      ↓ (auto-detect)
      ↓ (recompile)
      ↓ (refresh browser)
    DONE! ✅
```

**Time to see changes: ~1-3 seconds**

### Files That Auto-Reload

- ✅ `.ts` files (TypeScript)
- ✅ `.tsx` files (React components)
- ✅ `.json` files (config)
- ✅ `.css` files (styles)

### Files That Don't Auto-Reload

- ❌ `.env` files (requires restart: `Ctrl+C` → `npm run dev`)
- ❌ `package.json` (requires restart and re-install)
- ❌ Config files like `next.config.ts`

---

## 🛑 Stopping the Server

**In the terminal:**

```
Press Ctrl + C
```

---

## 📝 Common Workflow

```bash
# 1. Start the dev server
npm run dev

# 2. Open browser
# http://localhost:3000

# 3. Edit a file (e.g., src/components/HeroSection.tsx)

# 4. Save file (Ctrl + S)

# 5. Watch the browser auto-refresh! 🔄

# 6. Repeat steps 3-5 as needed

# 7. When done, press Ctrl + C to stop
```

---

## 🐛 Troubleshooting

### Changes not showing up?

**Solution 1:** Check if the dev server is still running

```bash
# If crashed, restart:
npm run dev
```

**Solution 2:** Try hard refresh in browser

```
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

**Solution 3:** Try alternative watcher

```bash
# Stop current server (Ctrl + C)
npm run dev:watch
```

### Port 3000 already in use?

```bash
# Kill the existing process and restart
npm run dev
```

---

## 📊 Performance Tips

- ⚡ **Turbopack is FAST** - Most changes appear in 1-3 seconds
- 💾 **Save frequently** - No risk of losing work
- 🔄 **Keep server running** - Don't stop and start repeatedly
- 📱 **Mobile testing** - Use network URL from terminal output

---

## 🎯 Key Commands Reference

| Command             | What It Does         | Stop With  |
| ------------------- | -------------------- | ---------- |
| `npm run dev`       | Start with Turbopack | `Ctrl + C` |
| `npm run dev:watch` | Start with Nodemon   | `Ctrl + C` |
| `npm run build`     | Build for production | N/A        |
| `npm run start`     | Run production build | `Ctrl + C` |
| `npm run lint`      | Check code quality   | N/A        |

---

**Happy Coding! 🚀**

For more info, check `README.md`
