export const constants = {
  TIME_RESOLVER: {
    day: {
      ms: 86400000,
      days: 1,
    },
    week: {
      ms: 604800000,
      days: 7,
    },
    month: {
      ms: 2592000000,
      days: 30,
    },
    year: {
      ms: 31556952000,
      days: 365,
    },
    total: {
      ms: Infinity,
      days: Infinity,
    },
  },
  LOCAL_MEDIA_FILES: [
    "pdf",
    "mp4",
    "mov",
    "webm",
    "mp3",
    "wav",
    "m4a",
    "flac",
    "ogg",
    "aac",
  ],
  ALLOWED_FILES: [
    "url",
    "html",
    "md",
    "pdf",
    "mp4",
    "mov",
    "webm",
    "mp3",
    "wav",
    "m4a",
    "flac",
    "ogg",
    "aac",
  ],
  ALLOWED_TABS: ["library", "read", "stats", "preferences"],
  SETTINGS_TO_SAVE: [
    {
      getter: "getTimerPosition",
      mutation: "changeTimerPosition",
    },
    {
      getter: "getTimerIntervals",
      mutation: "changeTimerIntervals",
    },
    {
      getter: "getMaxPrio",
      mutation: "changeMaxPrio",
    },
    {
      getter: "getHTMLContenteditable",
      mutation: "changeHTMLContenteditable",
    },
    {
      getter: "getAllowBrowsing",
      mutation: "changeAllowBrowsing",
    },
    {
      getter: "getMarkdownDarkMode",
      mutation: "changeMarkdownDarkMode",
    },
    {
      getter: "getMarkdownMathDelimiters",
      mutation: "changeMarkdownMathDelimiters",
    },
    {
      getter: "getNoteMathDelimiters",
      mutation: "changeNoteMathDelimiters",
    },
    {
      getter: "getPriorityRandomnessInterval",
      mutation: "changePriorityRandomnessInterval",
    },
  ],
  NOTES_SPLIT_STRING: "\r\n____________________\r\n",
  ALLOWED_IMAGES: ["image/jpeg", "image/png", "image/svg+xml", "image/webp"],
};
