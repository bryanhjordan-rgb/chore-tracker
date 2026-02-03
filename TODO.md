# TODO - Future Improvements

A list of planned features and improvements for the Chore Tracker app.

## High Priority

### Icon & Branding
- [ ] **Fix favicon** - Update to use the more recent icon image
- [ ] **Add iOS PNG icon** - Wire in dedicated PNG file for iOS home screen saving (user will provide)

### Architecture
- [ ] **Break app into separate pages/routes** - Enable deep linking so pull-to-refresh loads the specific view directly instead of reloading the entire app
  - Consider using hash-based routing (e.g., `#/chores`, `#/history`, `#/manage`, `#/settings`)
  - Preserve current view state in URL
  - Allow bookmarking specific views
  - Handle browser back/forward navigation

## Medium Priority

### User Experience
- [ ] **Offline support** - Cache data locally for offline viewing
- [ ] **Push notifications** - Remind kids about incomplete chores
- [ ] **Chore due dates** - Add optional due dates with visual indicators
- [ ] **Recurring chores** - Auto-generate chores on a schedule (daily, weekly)

### Features
- [ ] **Rewards store** - Let kids redeem points for rewards
- [ ] **Chore streaks** - Track consecutive days of completing chores
- [ ] **Family competitions** - Weekly/monthly challenges between kids
- [ ] **Chore notes** - Allow adding notes or photos to completed chores

### Admin Improvements
- [ ] **Bulk delete chores** - Select multiple chores to delete at once
- [ ] **Chore categories** - Organize chores by room or type
- [ ] **Export data** - Download history as CSV/PDF

## Low Priority

### Technical
- [ ] **Error boundaries** - Add React error boundaries for crash recovery
- [ ] **Split into multiple files** - Break single-file app into modules (requires build step)
- [ ] **Add unit tests** - Test critical functions like scoring, assignment logic
- [ ] **Service worker** - Enable PWA features like offline caching

### Visual
- [ ] **Custom themes** - More color scheme options beyond light/dark
- [ ] **Animations** - Add subtle transitions when completing chores
- [ ] **Achievement badges** - Visual rewards for milestones

## Completed
- [x] Weekly scoreboard with leader crown
- [x] Batch random assignment feature
- [x] User profile customization (emoji, color)
- [x] External configuration file (config.js)
- [x] Undo completion feature
- [x] History view with weekly scope
- [x] Dark mode support
- [x] Multi-user chore assignment
- [x] Template/saved chores system
