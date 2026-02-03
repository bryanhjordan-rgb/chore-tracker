# Do Your Chores, Bruh

A mobile-friendly chore tracking app for families. Assign tasks, track completions, and reward kids with points on a weekly scoreboard.

## Features

- **Family Member Profiles** - Each kid gets their own login with custom emoji and color
- **Two Chore Types**
  - *Mandatory* - Assigned to specific kids, must be completed
  - *Optional* - Anyone can complete for bonus points
- **Weekly Scoreboard** - Track points earned throughout the week
- **Admin Dashboard** - Manage chores, templates, and family members
- **Pattern Lock** - Secure admin access with emoji pattern authentication
- **Dark Mode** - Toggle between light and dark themes
- **Mobile First** - Designed for phones with haptic feedback support
- **iOS Support** - Add to home screen for app-like experience

## Quick Start

1. Clone the repository
2. Open `index.html` in a browser
3. Select a user to start tracking chores

No build process or dependencies required - it's a single HTML file.

## Hosting

Deploy anywhere that serves static files:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## Tech Stack

- **React 18** - UI components (loaded via CDN)
- **Babel Standalone** - JSX transformation in browser
- **Supabase** - PostgreSQL database with REST API
- **localStorage** - Theme and preference persistence

## Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create the required tables (see schema below)
3. Update the credentials in `index.html`:

```javascript
const SUPABASE_URL = 'https://[your-project].supabase.co/rest/v1';
const SUPABASE_KEY = '[your-anon-key]';
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
  status TEXT DEFAULT 'pending',
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

### Customization

Edit these constants in `index.html`:

```javascript
// Default family members
const DEFAULT_USERS = [
  { name: 'Sophia', emoji: '...', color: '#FF6B6B' },
  // Add more users...
];

// Admin pattern lock (grid positions 1-9)
const ADMIN_PATTERN = [2, 3, 6, 5];
```

## Admin Access

Tap "Admin" on the login screen, then enter the pattern by tapping the emoji grid in sequence. The default pattern is positions 2, 3, 6, 5 (top-middle, top-right, middle-right, center).

## Project Structure

```
chore-tracker/
├── index.html    # Complete application
├── icon.svg      # App icon
├── README.md     # This file
└── CLAUDE.md     # Developer documentation
```

## License

MIT License - Jordan Family 2026
