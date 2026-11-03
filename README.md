# Comment Digest

**Comment Digest** is a lightweight, privacy-focused Chrome extension (Manifest V3) that helps you read long discussion threads on `www.facebook.com`. With a single click in the side panel, it expands visible comments, filters out spam and repetitive noise, groups opinions by viewpoint, and generates a structured summary.

---

## Key Features

- **Automated Comment Expansion:** Safely clicks *"View more comments"*, *"View replies"*, and inline *"See more"* buttons across multiple interface languages (English, Vietnamese, Spanish, Portuguese, French, German, Indonesian, plus structural fallbacks) with randomized human-like delays (`0.8–1.5s`) and a **Stop** button you can press at any time.
- **Local Spam & Noise Filtering:** Automatically removes duplicate comments, emoji/sticker-only replies, name-tag-only comments, abnormal repeated characters, external URLs, phone numbers, and commercial/scam spam. Includes a collapsible preview of up to 30 filtered samples so you can verify what was removed.
- **4-Way Opinion Grouping:** Organizes comments into **Praise / Support**, **Criticism / Opposition**, **Questions**, and **Other / Neutral**.
- **Two Operating Modes:**
  1. **AI Summary Mode (Google Gemini API):** Bring your own free API key from Google AI Studio for intelligent multi-language summarization, main topic extraction, sentiment ratio estimation, and notable point detection (with automatic map-reduce batching for long threads).
  2. **Local Mode (Offline Fallback):** Works without an API key using local keyword dictionaries (English & Vietnamese) and word-frequency statistics. Automatically acts as a fallback if your API key is invalid, hits a rate limit (`HTTP 429`), or loses network connectivity.
- **Privacy First:** Strips commenter names, profile links, and avatars before analysis. Your API key is stored only in `chrome.storage.local` on your device and is sent exclusively via the `x-goog-api-key` header to Google's Gemini API.

---

## Installation (Load Unpacked)

1. Download or clone this folder to your computer.
2. *(Optional for local testing)* Ensure the three icon files (`icon16.png`, `icon48.png`, `icon128.png`) are placed inside `comment-digest/icons/`. If you have not created icon images yet, you can temporarily remove the `"icons"` and `"default_icon"` blocks from `manifest.json` to load the extension locally.
3. Open Google Chrome (version **116** or newer) and navigate to `chrome://extensions`.
4. Enable **Developer mode** in the top-right corner.
5. Click **Load unpacked** in the top-left corner and select the `comment-digest` folder.
6. Pin **Comment Digest** to your Chrome toolbar and click its icon to open the side panel.

---

## Setting Up a Free Google Gemini API Key (Optional)

Comment Digest works immediately in **Local Mode**, but configuring a free Gemini API key unlocks full AI summarization across all languages:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your Google account.
2. Click **Create API key** and copy the generated key.
3. Open the **Comment Digest** side panel in Chrome and click **Settings**.
4. Paste your key into the **Google Gemini API Key** box and click **Save Key** (or **Detect available models**).
5. Select a model from the **Gemini Model** dropdown (models with `flash` in their name are listed first as they typically offer generous free-tier quotas).
6. Choose your preferred **Summary language** (default is `English`, or select `Same as the comments`).

---

## Known Limitations

- **Desktop Web Only:** Supports standard posts and post pop-up dialogs (`role="dialog"`) on `https://www.facebook.com`. Mobile web (`m.facebook.com`), Reels, and Stories are not supported in this release.
- **Safety Caps:** To keep your browser responsive, each run reads up to **1,000 comments** or runs for at most **3 minutes** before summarizing what has been collected.
- **Local Mode Accuracy:** Local Mode relies on static keyword matching (optimized for English and Vietnamese) and word counts. It is a rough statistical estimate and cannot capture sarcasm, nuance, or complex arguments the way AI Mode does.
- **DOM Changes:** Social media platforms frequently update their page structure and obfuscated CSS classes. While Comment Digest relies on ARIA roles and multi-tier fallbacks, platform layout changes may occasionally affect comment detection.

---

## Disclaimer

Comment Digest is an independent open-source-style browser extension and is **not** affiliated with, endorsed by, or sponsored by Meta Platforms, Inc., Facebook, or Google LLC.
