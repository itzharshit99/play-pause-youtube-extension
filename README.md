# YouTube Auto Play-Pause Extension

This Chrome extension automatically pauses YouTube videos when you switch to a different tab and resumes playing when you return to the tab with the video. It's a simple and effective way to manage your video playback without manual interaction.

## Features

- Automatically **pauses** YouTube videos when you switch to another tab.
- Automatically **resumes playback** when you return to the YouTube tab.
- Works seamlessly in the background without interrupting your browsing experience.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click on **Load unpacked** and select the folder where you downloaded/cloned this repository.
5. The extension will be added to Chrome. You can see it in the extensions menu.

## How It Works

The extension uses Chrome's tab events to detect when a user switches tabs. It interacts with the YouTube video player to pause and resume videos accordingly.  

## Usage

1. Install the extension following the steps above.
2. Open a YouTube video and start playing it.
3. Switch to another tab, and the video will automatically pause.
4. Return to the YouTube tab, and the video will automatically resume playing.

## Development

To make modifications to the extension:

1. Edit the JavaScript or manifest files as needed.
2. Reload the extension from `chrome://extensions/`.

## Files in the Project

- **manifest.json**: Defines the extension metadata and permissions.
- **background.js**: Handles tab change events and communicates with the content script.
- **content.js**: Interacts with the YouTube player to control playback.

## Permissions

The extension requires the following permissions:

- `tabs`: To detect tab switch events.
- `activeTab`: To interact with the currently active YouTube tab.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy uninterrupted browsing with automatic video play-pause functionality! 🚀
