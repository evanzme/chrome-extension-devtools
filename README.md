# DevTools - Chrome Developer Toolbox

A feature-rich Chrome extension providing 40+ essential developer utilities, inspired by [DevUtils](https://devutils.com/).

![DevTools](icons/icon128.png)

## Features (40+ Tools)

### Encode / Decode (7 tools)
| Tool | Description |
|------|-------------|
| **JSON Formatter** | Format, minify and validate JSON data |
| **Base64 String** | Encode and decode Base64 strings |
| **Base64 Image** | Convert images to Base64 or Base64 to images |
| **URL Encode/Decode** | URL encoding, decoding and parsing |
| **HTML Entity** | Encode/decode HTML special characters |
| **Backslash Escape** | Escape and unescape special characters |
| **JWT Debugger** | Parse and debug JSON Web Tokens |

### Generators (5 tools)
| Tool | Description |
|------|-------------|
| **UUID Generator** | Generate UUID v4 and ULID |
| **Hash Generator** | Generate MD5, SHA-1, SHA-256, SHA-512 hashes |
| **Password Generator** | Generate secure random passwords |
| **Lorem Ipsum** | Generate placeholder text for design |
| **QR Code Generator** | Generate QR codes from text or URLs |

### Converters (8 tools)
| Tool | Description |
|------|-------------|
| **Unix Time** | Convert between timestamps and date/time |
| **Number Base** | Convert between binary, octal, decimal, hex |
| **Color Converter** | Convert between HEX, RGB, HSL, RGBA |
| **Case Converter** | Convert to camelCase, snake_case, kebab-case, etc. |
| **YAML ↔ JSON** | Convert between YAML and JSON formats |
| **CSV ↔ JSON** | Convert between CSV and JSON formats |
| **Hex ↔ ASCII** | Convert between hexadecimal and ASCII text |
| **HTML → JSX** | Convert HTML code to React JSX format |

### Text Tools (6 tools)
| Tool | Description |
|------|-------------|
| **Text Diff** | Compare two texts and highlight differences |
| **RegExp Tester** | Test and debug regular expressions |
| **Markdown Preview** | Live preview of Markdown rendering |
| **HTML Preview** | Live preview of HTML code rendering |
| **String Inspector** | Inspect string details and statistics |
| **Line Sort/Dedupe** | Sort, deduplicate, reverse, shuffle lines |

### Formatters (5 tools)
| Tool | Description |
|------|-------------|
| **HTML Formatter** | Beautify or minify HTML code |
| **CSS Formatter** | Beautify or minify CSS code |
| **JS Formatter** | Beautify or minify JavaScript code |
| **XML Formatter** | Beautify or minify XML code |
| **SQL Formatter** | Format SQL queries |

### Developer Tools (5 tools)
| Tool | Description |
|------|-------------|
| **Cron Parser** | Parse and validate Cron expressions |
| **cURL → Code** | Convert cURL commands to code (JS, Python, PHP, Go, Java) |
| **JSON → Code** | Generate type definitions (TypeScript, Go, Python, Swift, Java) |
| **Cert Decoder** | Parse X.509 certificate information |
| **SVG → CSS** | Convert SVG to CSS background-image |

## Installation

### 1. Generate Icons (if needed)

```bash
python3 generate_icons.py
```

### 2. Load Extension

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **Developer mode** (top right corner)
4. Click **Load unpacked**
5. Select this project folder

### 3. Usage

Click the DevTools icon in the browser toolbar to open the tools panel.

## Project Structure

```
devUtils/
├── manifest.json          # Chrome extension manifest
├── index.html             # Main page (all tools UI)
├── styles.css             # Styles (dark/light themes)
├── app.js                 # Main application logic
├── background.js          # Background service worker
├── README.md              # Documentation
├── generate_icons.py      # Python icon generator script
├── icons/                 # Icon files
│   ├── icon.svg
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── libs/                  # Third-party libraries
    ├── md5.min.js         # MD5 hashing
    └── marked.min.js      # Markdown parser
```

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **UI Design**: Modern dark/light theme, DevUtils-inspired
- **Fonts**: Plus Jakarta Sans (UI), JetBrains Mono (code)
- **Icons**: SVG + PNG (16/48/128)

## Highlights

- 🎨 Beautiful modern UI design
- 🌓 Dark/Light theme toggle
- 🔍 Tool search functionality
- 📋 One-click copy to clipboard
- 💾 Persistent theme preference
- 🚀 Fast and offline-capable
- 📱 Responsive layout

## License

MIT License

## Credits

Design inspired by [DevUtils](https://devutils.com/)
