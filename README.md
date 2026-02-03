# Do Your Chores, Bruh

A mobile-friendly chore tracking app for families. Assign tasks, track completions, and reward kids with points on a weekly scoreboard.

## Features

- **Family Member Profiles** - Each kid gets their own login with custom emoji and color
- **Two Chore Types**
  - *Mandatory* - Assigned to specific kids, must be completed
  - *Optional* - Anyone can complete for bonus points
- **Weekly Scoreboard** - Track points earned throughout the week with leader crown and sunglasses 👑😎
- **Batch Assignment** - Randomly assign multiple chores to kids at once
- **Saved Chores** - Save frequently used chores as templates
- **Admin Dashboard** - Manage chores, templates, and family members
- **Pattern Lock** - Secure admin access with emoji pattern authentication
- **Profile Customization** - Kids can customize their own emoji and color
- **Undo Completion** - Accidentally marked done? Undo within 5 seconds
- **History View** - See completed chores grouped by day, navigate between weeks
- **Dark Mode** - Toggle between light and dark themes
- **Completion Animations** - Satisfying visual feedback when marking chores done
- **Error Recovery** - Graceful error handling with friendly recovery UI
- **Mobile First** - Designed for phones with haptic feedback support
- **iOS Support** - Add to home screen for app-like experience

## Quick Start

1. Clone the repository
2. Copy `config.example.js` to `config.js`
3. Edit `config.js` with your Supabase credentials
4. Open `index.html` in a browser
5. Select a user to start tracking chores

No build process or dependencies required - it's a single HTML file.

## Hosting

Deploy anywhere that serves static files:
- GitHub Pages
- Netlify
- Vercel
- Any web server

**Note**: Make sure to include `config.js` in your deployment (or set up environment-specific configs).

## Tech Stack

- **React 18** - UI components (loaded via CDN)
- **Babel Standalone** - JSX transformation in browser
- **Supabase** - PostgreSQL database with REST API
- **localStorage** - Theme and preference persistence

## Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create the required tables (see schema below)
3. Copy `config.example.js` to `config.js`
4. Update the credentials:

```javascript
const CONFIG = {
  supabase: {
    url: 'https://[your-project].supabase.co/rest/v1',
    key: '[your-anon-key]'
  },
  adminPattern: [1, 2, 3, 4],  // Pattern lock positions
  defaultUsers: [
    { name: 'Child1', emoji: '👧', color: '#FF6B6B' },
    { name: 'Child2', emoji: '👦', color: '#45B7D1' },
    // Add your family members...
  ],
  emojiOptions: [...],  // Avatar choices
  colorOptions: [...]   // Theme colors
};
```

### Database Schema

Create these tables in your Supabase project:

```sql
-- Users table
CREATE TABLE users (
  name TEXT PRIMARY KEY,
  emoji TEXT NOT NULL,
  color TEXT NOT NULL
);

-- Chores table
CREATE TABLE chores (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  assigned_to TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Completions table
CREATE TABLE completions (
  id TEXT PRIMARY KEY,
  chore_id TEXT,
  description TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  completed_by TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Templates table
CREATE TABLE templates (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  assigned_to TEXT,
  assignment_mode TEXT DEFAULT 'optional'
);
```

## Admin Access

Tap "Admin" on the login screen, then enter the pattern by tapping the emoji grid in sequence. The default pattern is set in `config.js`.

Pattern grid positions:
```
1 2 3
4 5 6
7 8 9
```

## Project Structure

```
chore-tracker/
├── index.html        # Complete application
├── config.example.js # Configuration template
├── config.js         # Your local config (gitignored)
├── icon.svg          # App icon
├── README.md         # This file
├── CLAUDE.md         # Developer documentation
└── TODO.md           # Future improvements
```

## Screenshots

The app features:
- **User selection screen** with weekly points preview and leader badge
- **Chore list** with filter bar and quick completion
- **Scoreboard** showing all kids' weekly totals
- **History view** with daily groupings and undo option
- **Admin management** for chores, templates, and batch assignment
- **Settings** for dark mode and kid customization

## License

MIT License - Jordan Family 2026
