# Electron Starter Pack

A modern Electron application starter template with React 19, TypeScript, and Vite for fast development and building.

## Features

- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Type-safe development
- ⚡ **Vite** - Lightning-fast development server and build tool
- 🖥️ **Electron** - Cross-platform desktop application framework
- 📦 **Electron Builder** - Application packaging and distribution

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/bit-programmer/electron-starter-pack.git
   cd electron-starter-pack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Available Scripts

- `npm run dev:react` - Start the React development server with Vite
- `npm run dev:electron` - Start the Electron application
- `npm run build` - Build the React application for production
- `npm run transpile:electron` - Transpile TypeScript files for Electron

## Project Structure

```
electron-starter-pack/
├── src/
│   ├── electron/          # Electron main process files
│   │   └── tsconfig.json  # TypeScript config for Electron
│   ├── ui/                # React Code
├── dist-electron/         # Compiled Electron files
├── dist-react/            # Built React application
├── package.json
└── README.md
```

## Building for Production

### Platform-Specific Distribution

Build and package for specific platforms with one command:

- **macOS (ARM64)**
  ```bash
  npm run dist:mac
  ```

- **Windows (x64)**
  ```bash
  npm run dist:win
  ```

- **Linux (x64)**
  ```bash
  npm run dist:linux
  ```

These distribution scripts automatically handle the complete build pipeline: TypeScript compilation, React build, and electron-builder packaging.

## Development Tips

- The React development server runs on Vite, providing hot module replacement for fast development
- Electron main process files are located in `src/electron/`
- Make sure to transpile Electron TypeScript files when making changes to the main process

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6.2.0
- **Desktop Framework**: Electron 38.1.0
- **Packaging**: Electron Builder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## Support

If you encounter any issues or have questions, please create an issue in the repository.