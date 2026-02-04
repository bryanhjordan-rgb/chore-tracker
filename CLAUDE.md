# CLAUDE.md - Chore Tracker

## Project Overview

**Do Your Chores, Bruh** is a mobile-friendly single-page web application for families to manage household chores and reward kids for completing tasks. Features a point-based reward system with weekly scoreboards, batch chore assignment, and customizable user profiles.

## Tech Stack

- **Frontend**: React 18 (via CDN), JSX with Babel Standalone
- **Backend**: Supabase REST API
- **State**: React Hooks (useState, useEffect, useMemo)
- **Storage**: localStorage for preferences, Supabase PostgreSQL for data
- **Architecture**: Single-file SPA (no build tools)

## Project Structure

```
chore-tracker/
├── index.html        # Entire application (~1570 lines)
├── config.example.js # Configuration template (copy to config.js)
├── config.js         # Local configuration (gitignored, user-created)
├── icon.svg          # App icon (favicon + iOS home screen)
├── CLAUDE.md         # Developer documentation
├── README.md         # Project readme
└── TODO.md           # Future improvements
```

Single HTML file contains: HTML structure, React components, inline CSS, app logic, and API integration.

## Running the App

No build process required:
1. Copy `config.example.js` to `config.js`
2. Edit `config.js` with your Supabase credentials
3. Open `index.html` directly in a modern browser
4. Or host on any static file server (GitHub Pages, Netlify, etc.)

## Configuration

The app uses an external `config.js` file for all configuration. Copy `config.example.js` to `config.js` and customize:

```javascript
const CONFIG = {
  supabase: {
    url: 'https://[project-id].supabase.co/rest/v1',
    key: '[your-anon-key]'
  },
  adminPattern: [1, 2, 3, 4],  // Pattern lock positions
  defaultUsers: [
    { name: 'Child1', emoji: '👧', color: '#FF6B6B' },
    // Add more users...
  ],
  emojiOptions: ['👧', '👦', '🧒', ...],  // Avatar choices
  colorOptions: ['#FF6B6B', '#45B7D1', ...]  // Theme colors
};
```

**Important**: `config.js` should be gitignored as it contains API keys.

## Key Concepts

### User Roles
- **Kids**: Can view/complete their assigned chores and optional chores, customize their profile
- **Admin**: Full access with pattern lock protection - manage chores, templates, users, settings

### Chore Types
- **Mandatory**: Assigned to specific kids, no points, tagged "Required"
- **Optional**: Any user can complete for points, tagged "Optional"

### Weekly Scoring
- Points are tracked on a weekly basis (Monday-Sunday)
- Scoreboard shows current week leader with crown and sunglasses badge (👑🕶️)
- History view shows completions grouped by day within the selected week
- Week navigation allows viewing past weeks

## API Integration

Backend: Supabase REST API

### API Operations
- `getAll()` - Fetch all chores, completions, templates, and users
- `addChore(chore)` / `addChores(chores)` - Create chores (single or bulk)
- `updateChore(chore)` - Update existing chore
- `deleteChore(id)` - Remove a chore
- `addCompletion(completion)` - Record chore completion
- `deleteCompletion(id)` - Remove a completion (for undo)
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
| `App` | Root component, state management, routing |
| `UserSelect` | Initial user/role selection with weekly scores |
| `EmojiPattern` | Admin pattern lock authentication |
| `ChoreView` | Main task list view with filter bar |
| `HistoryView` | Completion history with weekly scope and day grouping |
| `ManageView` | Admin chore management and batch assignment |
| `SettingsView` | Appearance and user customization |
| `Scoreboard` | Weekly points leaderboard with navigation |
| `ChoreCard` | Individual chore display with completion animation |
| `FilterBar` | Filter chores by user |
| `AppHeader` | Consistent header with logo |
| `AppFooter` | Copyright footer |
| `ErrorBoundary` | Catches JS errors and displays recovery UI |

### Modal Components
| Component | Purpose |
|-----------|---------|
| `ConfirmModal` | Delete confirmation dialog |
| `UserPickerModal` | Select who completed a chore (admin) |
| `MultiUserPickerModal` | Assign chore to multiple kids |
| `AssignmentPreviewModal` | Preview batch chore assignments |
| `KidExclusionModal` | Select kids to exclude from batch |
| `EditChoreModal` | Edit existing chore details |
| `CustomizeKidsModal` | Admin: edit all kids' profiles |
| `UserCustomizeModal` | Kid: customize own profile |
| `UndoToast` | Undo recent chore completion |

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

// Set in config.js:
adminPattern: [2, 3, 6, 5]  // Default pattern
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

## Undo Completion Feature

When a chore is completed:
- A toast notification appears at the bottom of the screen
- Shows "Completed: [chore name]" with an Undo button
- Toast auto-dismisses after 5 seconds
- Clicking Undo restores the chore and removes the completion
- Admin can also undo completions from History view

## Admin Delete Features

### Delete History Entries
Admin can delete completion history entries from the History view:
- **Single delete**: Click the trash icon next to any history entry
- **Bulk delete**: Click "Select" button, check multiple entries, then click "Delete (N)"
- Confirmation dialog appears before deletion
- Unlike undo, delete only removes the history entry (does not restore the chore)

### Bulk Delete Chores
Admin can delete multiple active chores at once from the Manage view:
- Click "Select" button next to "Active Chores" header
- Check the chores to delete (click card or checkbox)
- Click "Delete (N)" button to confirm
- Confirmation dialog appears before deletion

## User Profile Customization

Kids can customize their own profile by tapping their emoji in the chore view:
- Choose from ~80 emoji options (various skin tones, animals, objects)
- Pick any color using color picker
- Changes sync to database

Admin can customize all kids via Settings -> Customize Kids:
- Edit name, emoji, and color for each kid
- Add or remove kids
- Changes reflect immediately across all views

## Styling

- Theme toggle: Light/Dark mode (saved to localStorage)
- Light: White backgrounds, soft shadows
- Dark: Navy/charcoal (#1a1a2e, #1e1e2f)
- Accent colors: Blue (#45B7D1), Red (#FF6B6B), Teal (#4ECDC4), Purple (#9B59B6)
- Points displayed in yellow (#FFE66D)

## Development Notes

- Edit `index.html` directly, refresh browser to see changes
- Use browser DevTools (F12) for debugging
- API errors logged to console
- Mobile-first design with haptic feedback support
- iOS home screen support with apple-touch-icon

## Common Modifications

- Edit `config.js` to change users, pattern, or Supabase credentials
- Edit `getStyles()` function in index.html for custom theming
- Modify `PATTERN_EMOJI` array for different emoji choices in pattern lock

## Supabase Database Schema

### chores
| Column | Type | Description |
|--------|------|-------------|
| id | text | Unique identifier (PK) |
| type | text | `mandatory` or `optional` |
| description | text | Chore description |
| points | integer | Points for optional chores |
| assigned_to | text | Kid name (for mandatory) |
| status | text | `pending`, `active`, or `completed` |
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

## Hash-Based Routing

The app uses hash-based routing for deep linking and bookmark support:

```
#/chores   - Main chore list (default)
#/history  - Completion history
#/manage   - Admin chore management
#/settings - Admin settings
```

### Routing Behavior
- URL hash updates when navigating between views
- Refreshing the page restores the current view
- Browser back/forward buttons work as expected
- Admin views (`#/manage`, `#/settings`) require re-authentication on page refresh
- Non-authenticated users navigating to admin hashes are redirected to `#/chores`

## Limitations

- No offline support (requires internet for API)
- Single-file architecture limits code organization
- No push notifications

## Commit Guidelines

When making changes to this codebase, always:
1. Update `TODO.md` to mark completed items and add new tasks
2. Update `README.md` if user-facing features change
3. Update `CLAUDE.md` if architecture, components, or developer info changes
4. Keep line count estimate in Project Structure section current
