// Chore Tracker Configuration Template
// Copy this file to config.js and fill in your own values
// DO NOT commit config.js to version control

const CONFIG = {
  // Supabase API Configuration
  // Get these from your Supabase project settings: https://supabase.com/dashboard
  supabase: {
    url: 'https://YOUR_PROJECT_ID.supabase.co/rest/v1',
    key: 'YOUR_SUPABASE_ANON_KEY'
  },

  // Admin Pattern Lock (positions 1-9 on 3x3 grid, left-to-right, top-to-bottom)
  // 1 2 3
  // 4 5 6
  // 7 8 9
  // Example: [1, 2, 3, 6] draws an "L" shape
  adminPattern: [1, 2, 3, 4],

  // Default family members (used when no users exist in database)
  // Customize with your own family members
  defaultUsers: [
    { name: 'Child1', emoji: '👧', color: '#FF6B6B' },
    { name: 'Child2', emoji: '👦', color: '#45B7D1' },
    { name: 'Child3', emoji: '👧', color: '#9B59B6' },
    { name: 'Child4', emoji: '🧒', color: '#4ECDC4' }
  ],

  // Emoji options for user avatars
  emojiOptions: [
    // Kids - Default skin tone
    '👧', '👦', '🧒', '👶',
    // Kids - Light skin tone
    '👧🏻', '👦🏻', '🧒🏻', '👶🏻',
    // Kids - Medium-light skin tone
    '👧🏼', '👦🏼', '🧒🏼', '👶🏼',
    // Kids - Medium skin tone
    '👧🏽', '👦🏽', '🧒🏽', '👶🏽',
    // Kids - Medium-dark skin tone
    '👧🏾', '👦🏾', '🧒🏾', '👶🏾',
    // Kids - Dark skin tone
    '👧🏿', '👦🏿', '🧒🏿', '👶🏿',
    // Fantasy & Characters
    '🦸', '🦸‍♂️', '🦸‍♀️', '🦹', '🦹‍♂️', '🦹‍♀️',
    '🧙', '🧙‍♂️', '🧙‍♀️', '🧚', '🧚‍♂️', '🧚‍♀️',
    '🧛', '🧜', '🧝', '🧞', '🥷', '🤴', '👸',
    // Animals
    '🦊', '🐱', '🐶', '🦄', '🐼', '🐨', '🦁', '🐯',
    '🐰', '🐻', '🐸', '🐵', '🦋', '🐝', '🦉', '🐧',
    '🐬', '🦈', '🐙', '🦖', '🐲', '🦩', '🦜', '🐢',
    // Sports & Activities
    '⚽', '🏀', '🎾', '🏈', '⚾', '🎮', '🎨', '🎭',
    '🎸', '🎹', '🎤', '📚', '🔬', '🚀', '✈️', '🏆',
    // Food & Fun
    '🍕', '🍦', '🧁', '🍩', '🌮', '🍔', '🎂', '🍭',
    // Nature & Weather
    '🌸', '🌻', '🌈', '⭐', '🌙', '☀️', '❄️', '🔥',
    // Objects & Symbols
    '💎', '🎀', '👑', '🎪', '🎯', '💫', '✨', '💖'
  ],

  // Color options for user themes
  colorOptions: [
    '#FF6B6B', // Coral Red
    '#45B7D1', // Sky Blue
    '#9B59B6', // Purple
    '#4ECDC4', // Teal
    '#FFE66D', // Yellow
    '#FF8C42', // Orange
    '#98D8AA', // Mint Green
    '#E84A5F', // Rose
    '#2A363B', // Dark Slate
    '#F67280', // Salmon Pink
    '#6C5CE7', // Indigo
    '#00B894', // Emerald
    '#FDCB6E', // Mustard
    '#E17055', // Terra Cotta
    '#74B9FF', // Light Blue
    '#A29BFE'  // Lavender
  ]
};
