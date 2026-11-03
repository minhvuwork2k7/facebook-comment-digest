# Privacy Policy for Comment Digest

**Last Updated:** November 2, 2026

**Comment Digest** ("the Extension") is a browser extension designed to help users read, filter, and summarize public or visible comment threads on `www.facebook.com`. Protecting your privacy is a core design requirement of this Extension.

---

## 1. What Data the Extension Accesses

The Extension operates **only when you explicitly click the "Analyze comments" button** in the side panel:

1. **Visible Comment Text & Reaction Counts (Website Content):**
   - When triggered by you, the Extension reads the text of comments and the numeric reaction counts currently visible on the post you are viewing on `www.facebook.com`.
   - **Strict Anonymization:** Before any analysis is performed, the Extension strips out commenter names, profile links, avatars/photos, timestamps, and user IDs. Only the comment text itself (and reaction count, if present) is processed.
2. **User Configuration Settings:**
   - If you choose to enable AI-powered summaries, you may enter your personal Google Gemini API key, select a Gemini model, and choose a preferred summary language.

---

## 2. How Your Data Is Used and Processed

The Extension supports two operating modes:

### A. Local Mode (Default when no API key is configured)
- All comment filtering, keyword grouping, and statistical calculations happen **100% locally inside your browser**.
- Zero comment data leaves your device.

### B. AI Summary Mode (When you provide your own Google Gemini API key)
- When you click **"Analyze comments"** and have configured both a Gemini API key and a Gemini model, the anonymized, spam-filtered comment text is sent directly from your browser to the **Google Gemini API** (`https://generativelanguage.googleapis.com/`) using your personal API key.
- **Google's Terms and Data Processing:** Because the request is made directly to Google using your own API key, the processing of that text by Google is governed by the [Google APIs Terms of Service](https://developers.google.com/terms), the [Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms), and [Google's Privacy Policy](https://policies.google.com/privacy). Please note that Google's free-tier API services may have specific data-handling policies (including potentially using submitted prompts and responses to improve Google products and models). We strongly encourage you to review Google's terms before using a free-tier API key.

---

## 3. Data Storage and Retention

- **No External Servers:** The developer of Comment Digest does **not** operate any backend server, database, or proxy. We never receive, view, store, or log your comments or your API key.
- **Ephemeral Comment Processing:** Comment text is held temporarily in browser memory (`RAM`) only while generating the summary and is discarded immediately when you close the side panel or run a new analysis. Comments are never written to disk or persistent storage.
- **Local Storage of Settings:** Your Gemini API key, selected model ID, summary language preference, and nested-reply toggle are stored exclusively on your own computer using Chrome's local extension storage (`chrome.storage.local`). You can delete your stored API key at any time using the **"Clear Key"** button in the Extension's Settings.

---

## 4. No Analytics, Tracking, or Data Sharing

- The Extension contains **no** analytics scripts, telemetry, crash reporters, advertising SDKs, or tracking pixels.
- We do **not** sell, rent, trade, or transfer any user data to third parties.
- The Extension only reads the page when you click the button; it never likes, replies to, shares, or posts anything on your behalf.

---

## 5. Non-Affiliation Disclaimer

Comment Digest is an independent project and is **not** affiliated with, endorsed by, sponsored by, or officially connected with Meta Platforms, Inc., Facebook, or Google LLC.

---

## 6. Contact Information

If you have questions or concerns about this Privacy Policy or the Extension's privacy practices, please contact:

- **Email:** [ĐIỀN: email liên hệ]
