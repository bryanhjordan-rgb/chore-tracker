# CLAUDE.md - Chore Tracker

## Project Overview

Chore Tracker is a mobile-friendly single-page web application for families to manage household chores and reward kids for completing tasks. Features a point-based reward system with weekly scoreboards.

## Tech Stack

- **Frontend**: React 18 (via CDN), JSX with Babel Standalone
- **Backend**: Google Apps Script HTTP API
- **State**: React Hooks (useState, useEffect, useMemo)
- **Storage**: localStorage for preferences, Google Sheets via API for data
- **Architecture**: Single-file SPA (no build tools)

## Project Structure

```
chore-tracker/
└── index.html    # Entire application (718 lines)
```

Single file contains: HTML structure, React components, inline CSS, app logic, and API integration.

## Running the App

No build process required:
1. Open `index.html` directly in a modern browser
2. Or host on any static file server (GitHub Pages, Netlify, etc.)

## Key Concepts

### User Roles
- **Kids**: Can view/complete their assigned chores and optional chores
- **Admin**: Full access with PIN protection (default: `1234`)

### Chore Types
- **Mandatory**: Assigned to specific kids, no points, tagged "📌 Required"
- **Optional**: Any user can complete for points, tagged "⭐ Optional"

### Default Users
Sophia (👧), Henry (👦), Charlotte (👧), Maxwell (🧒) - customizable in Settings

## API Integration

Endpoint: Google Apps Script macro (hardcoded in `API_URL`)

Actions: `getAll`, `addChore`, `updateChore`, `deleteChore`, `addCompletion`, `addTemplate`, `updateTemplate`, `deleteTemplate`, `updateUsers`

Uses `no-cors` mode with JSON serialization.

## Main Components

| Component | Purpose |
|-----------|---------|
| `UserSelect` | Initial user/role selection |
| `PinEntry` | Admin PIN authentication |
| `ChoreView` | Main task list view |
| `HistoryView` | Completion history with filtering |
| `ManageView` | Admin chore management |
| `SettingsView` | Appearance and user customization |
| `Scoreboard` | Weekly points leaderboard |

## Data Models

```javascript
User:       { name, emoji, color }
Chore:      { id, type, description, points, assignedTo, status, createdAt }
Completion: { id, choreId, description, points, completedBy, completedAt }
Template:   { id, type, description, points, assignedTo }
```

## Styling

- Theme toggle: Light/Dark mode (saved to localStorage)
- Light: White backgrounds, soft shadows
- Dark: Navy/charcoal (#1a1a2e, #1e1e2f)
- Accent colors: Blue (#45B7D1), Red (#FF6B6B), Teal (#4ECDC4), Gold (#FFE66D)

## Development Notes

- Edit `index.html` directly, refresh browser to see changes
- Use browser DevTools (F12) for debugging
- API errors logged to console
- Mobile-first design with haptic feedback support

## Common Modifications

- Change `DEFAULT_USERS` array for different kid names
- Modify `ADMIN_PIN` constant for security
- Update `API_URL` to use a different backend
- Edit `getStyles()` function for custom theming

## Limitations

- No offline support (requires internet for API)
- Hard-coded API endpoint
- No error boundaries for crash recovery
- `no-cors` mode limits error handling
