# TODO - Future Improvements

A list of planned features and improvements for the Chore Tracker app.

## High Priority

### Icon & Branding
- [x] **Fix favicon** - Update to use the more recent icon image
- [ ] **Add iOS PNG icon** - Wire in dedicated PNG file for iOS home screen saving (user will provide)
- [x] **Add sunglasses emoji next to the crown emoji** - Sunglasses emoji overlaps below the crown for the current week point leader 

### Architecture
- [x] **Hash-based routing** - Deep linking with `#/chores`, `#/history`, `#/manage`, `#/settings`
  - Preserves view state in URL
  - Supports bookmarking and sharing links
  - Browser back/forward navigation works
  - Admin views require re-authentication on refresh

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
- [x] **Error boundaries** - Add React error boundaries for crash recovery
- [ ] **Split into multiple files** - Break single-file app into modules (requires build step)
- [ ] **Add unit tests** - Test critical functions like scoring, assignment logic
- [ ] **Service worker** - Enable PWA features like offline caching
- [ ] **Map to Domain** - Set up a proper domain with SSL etc so that there is a real
place for the app to live. 


### Visual
- [ ] **Custom themes** - More color scheme options beyond light/dark
- [x] **Animations** - Add subtle transitions when completing chores
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
- [x] Fix favicon (already using icon.svg)
- [x] Sunglasses emoji for weekly leader (overlapping 👑🕶️)
- [x] Chore completion animations
- [x] React error boundaries for crash recovery
- [x] Hash-based routing for deep linking
