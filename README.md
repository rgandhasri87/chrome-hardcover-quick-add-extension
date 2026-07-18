# Intro
The purpose of this extension is for web-surfers to smoothly add books they see mentioned online to their Hardcover lists (and also for the author(s) to learn about making Chrome extensions.)

# Warnings
Take a look at the [Getting Started](https://docs.hardcover.app/api/getting-started/) page. It warns the following:

* This should only be used from a code backend — never from a browser.
* This is only for offline use at this time.
*   You can only access this API from localhost or APIs.
*   Later on, we hope to allow developers to join a group that allowlists specific sites, but that’s a way down the line.

There may be a solution (see roadmap.)

# Setup

1. **Clone the repo**
```bash
   git clone https://github.com/rgandhasri87/chrome-hardcover-quick-add-extension.git
   cd chrome-hardcover-quick-add-extension
```
 
2. **Load it into Chrome as an unpacked extension**
   - Go to `chrome://extensions/`
   - Toggle on **Developer mode** (top right)
   - Click **Load unpacked**
   - Select the cloned project folder
   You should see "Hardcover Quick Add" appear in your extensions list.
3. **Reload after changes**
   - Any time you edit the code, go back to `chrome://extensions/` and click the reload icon (circular arrow) on the extension's card.
   - To debug `background.js`, click **Inspect views: service worker** on the extension's card to open its console.
4. **Try it out**
   - Go to any webpage, highlight some text (e.g. a book title)
   - Right-click → **Add "..." to Hardcover**
   - The side panel should open


# Current status

The current status of this extension is:
* Adds a "Send to Hardcover" button to the context menu that appears when highlighting text in Chrome
* Has a background service worker that listens for clicks on that menu button and opens a primitive side panel

So basically nothing.

# Roadmap
- [ ] Next step: persist selected text across side panel open/close (e.g. via `chrome.storage.session`)
- [ ] Actually design the side panel
- [ ] Figure out how to connect to Hardcover/auth. [This extension](https://github.com/cyberk/goodreads-hardcover-sync) uses Chrome Cookies API to use auth cookies from a currently active Hardcover session/tab. Additionally, Hardcover may have added OAuth support since the last time this was worked on - investigate.
- [ ] Find the entire GraphQL query map
- [ ] Run some sample queries and generate templates
