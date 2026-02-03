// Chore Tracker Configuration
// This file contains sensitive configuration - DO NOT commit to version control

const CONFIG = {
  // Supabase API Configuration
  supabase: {
    url: 'https://zkkudyxpupkyfmbifqyq.supabase.co/rest/v1',
    key: 'sb_publishable__ibwbjPWSBxPG6oOgkglJQ_SsxkFTBX'
  },

  // Admin Pattern Lock (positions 1-9 on 3x3 grid, left-to-right, top-to-bottom)
  // 1 2 3
  // 4 5 6
  // 7 8 9
  adminPattern: [2, 3, 6, 5],

  // Default family members (used when no users exist in database)
  defaultUsers: [
    { name: 'Sophia', emoji: '👧', color: '#FF6B6B' },
    { name: 'Henry', emoji: '👦', color: '#45B7D1' },
    { name: 'Charlotte', emoji: '👧', color: '#9B59B6' },
    { name: 'Maxwell', emoji: '🧒', color: '#4ECDC4' }
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
