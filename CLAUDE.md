# CLAUDE.md - Chore Tracker

## Project Overview

**Do Your Chores, Bruh** is a mobile-friendly single-page web application for families to manage household chores and reward kids for completing tasks. Features a point-based reward system with weekly scoreboards.

## Tech Stack

- **Frontend**: React 18 (via CDN), JSX with Babel Standalone
- **Backend**: Supabase REST API
- **State**: React Hooks (useState, useEffect, useMemo)
- **Storage**: localStorage for preferences, Supabase PostgreSQL for data
- **Architecture**: Single-file SPA (no build tools)

## Project Structure

```
chore-tracker/
├── index.html    # Entire application (~900 lines)
├── icon.svg      # App icon (favicon + iOS home screen)
├── CLAUDE.md     # Developer documentation
└── README.md     # Project readme
```

Single HTML file contains: HTML structure, React components, inline CSS, app logic, and API integration.

## Running the App

No build process required:
1. Open `index.html` directly in a modern browser
2. Or host on any static file server (GitHub Pages, Netlify, etc.)

## Key Concepts

### User Roles
- **Kids**: Can view/complete their assigned chores and optional chores
- **Admin**: Full access with pattern lock protection

### Chore Types
- **Mandatory**: Assigned to specific kids, no points, tagged "Required"
- **Optional**: Any user can complete for points, tagged "Optional"

### Default Users
Sophia, Henry, Charlotte, Maxwell - customizable in Settings

## API Integration

Backend: Supabase REST API

### Supabase Configuration
```javascript
const SUPABASE_URL = 'https://[project-id].supabase.co/rest/v1';
const SUPABASE_KEY = '[your-anon-key]';
```

### API Operations
- `getAll()` - Fetch all chores, completions, templates, and users
- `addChore(chore)` / `addChores(chores)` - Create chores
- `updateChore(chore)` - Update existing chore
- `deleteChore(id)` - Remove a chore
- `addCompletion(completion)` - Record chore completion
- `addTemplate(template)` / `updateTemplate(template)` / `deleteTemplate(id)` - Manage templates
- `updateUsers(users)` - Update user list

### Database Tables
- `chores` - Active chores
- `completions` - Completion history
- `templates` - Saved chore templates
- `users` - Family members

## Main Components

| Component | Purpose |
|-----------|---------|
| `UserSelect` | Initial user/role selection |
| `EmojiPattern` | Admin pattern lock authentication |
| `ChoreView` | Main task list view |
| `HistoryView` | Completion history with filtering |
| `ManageView` | Admin chore management |
| `SettingsView` | Appearance and user customization |
| `Scoreboard` | Weekly points leaderboard |
| `AssignmentPreviewModal` | Preview batch chore assignments |
| `KidExclusionModal` | Select kids to exclude from batch assignment |

## Data Models

```javascript
User:       { name, emoji, color }
Chore:      { id, type, description, points, assignedTo, status, createdAt }
Completion: { id, choreId, description, points, completedBy, completedAt }
Template:   { id, type, description, points, assignedTo, assignmentMode }
```

### Template Assignment Modes
- `assignmentMode: 'random'` - Will be randomly assigned to a kid (becomes mandatory)
- `assignmentMode: 'optional'` - Stays as optional chore anyone can complete

## Admin Authentication

Admin access is protected by a 4-tap emoji pattern on a 3x3 grid.

```javascript
// Grid positions (1-9, left-to-right, top-to-bottom):
// 1 2 3
// 4 5 6
// 7 8 9

const ADMIN_PATTERN = [2, 3, 6, 5]; // Default pattern
```

The emoji grid shuffles randomly on each login attempt for added security.

## Batch Random Assignment Feature

Allows admin to select multiple templates and generate chores with random kid assignments:

1. Go to **Manage -> Saved Chores**
2. Scroll to **Batch Assignment** section
3. Check templates to include
4. Toggle each between `Random` or `Optional` mode
5. Edit points inline for optional chores
6. Click **Generate Chores**
7. If fewer random chores than kids, select who to exclude
8. Preview shows assignments - use **Shuffle** to re-randomize
9. Click **Create** to generate all chores

### Assignment Logic
- Kids are shuffled randomly (Fisher-Yates algorithm)
- Random chores are assigned round-robin to shuffled kids
- If more chores than kids, some kids get multiple
- Optional chores retain their point values

## Styling

- Theme toggle: Light/Dark mode (saved to localStorage)
- Light: White backgrounds, soft shadows
- Dark: Navy/charcoal (#1a1a2e, #1e1e2f)
- Accent colors: Blue (#45B7D1), Red (#FF6B6B), Teal (#4ECDC4), Purple (#9B59B6)

## Development Notes

- Edit `index.html` directly, refresh browser to see changes
- Use browser DevTools (F12) for debugging
- API errors logged to console
- Mobile-first design with haptic feedback support
- iOS home screen support with apple-touch-icon

## Common Modifications

- Change `DEFAULT_USERS` array for different kid names
- Modify `ADMIN_PATTERN` constant for different unlock pattern
- Update `SUPABASE_URL` and `SUPABASE_KEY` to use a different backend
- Edit `getStyles()` function for custom theming

## Supabase Database Schema

### chores
| Column | Type | Description |
|--------|------|-------------|
| id | text | Unique identifier (PK) |
| type | text | `mandatory` or `optional` |
| description | text | Chore description |
| points | integer | Points for optional chores |
| assigned_to | text | Kid name (for mandatory) |
| status | text | `pending` or `completed` |
| created_at | timestamp | Creation timestamp |

### completions
| Column | Type | Description |
|--------|------|-------------|
| id | text | Unique identifier (PK) |
| chore_id | text | Reference to chore |
| description | text | Chore description snapshot |
| points | integer | Points earned |
| completed_by | text | Kid who completed it |
| completed_at | timestamp | Completion timestamp |

### templates
| Column | Type | Description |
|--------|------|-------------|
| id | text | Unique identifier (PK) |
| type | text | `mandatory` or `optional` |
| description | text | Chore description |
| points | integer | Points for optional chores |
| assigned_to | text | Kid name (for mandatory) |
| assignment_mode | text | `random` or `optional` (for batch) |

### users
| Column | Type | Description |
|--------|------|-------------|
| name | text | User name (PK) |
| emoji | text | User emoji avatar |
| color | text | User theme color (hex) |

## Limitations

- No offline support (requires internet for API)
- No error boundaries for crash recovery
- Single-file architecture limits code organization
