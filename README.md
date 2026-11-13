# HelloWorldApp

A simple cross-platform mobile application built with **React Native, Expo, and TypeScript**.

This project demonstrates the fundamentals of React Native development, including reusable components, state management, styling, and user interactions.

## Features

- Simple and clean user interface
- Interactive **Open** button
- Displays **Hello World!** when the button is pressed
- Cross-platform support for iOS and Android
- Built with TypeScript

## Tech Stack

- **React Native** — Mobile application framework
- **Expo** — Development and build platform
- **TypeScript** — Type-safe JavaScript
- **React Hooks** — State management with `useState`
- **Expo EAS** — iOS build and distribution

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (supported LTS version)
- npm
- Git
- Expo Go or an Android/iOS simulator

### Installation

Clone the repository:

```bash
git clone https://github.com/duynguyen199/HelloWorldApp.git
```

Navigate to the project:

```bash
cd HelloWorldApp
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx expo start
```

### Run on iOS

On macOS with Xcode and an iOS Simulator installed:

```bash
npm run ios
```

Alternatively, scan the Expo QR code using your iPhone.

### Run on Android

With an Android emulator configured:

```bash
npm run android
```

## How It Works

1. Launch the application.
2. The home screen displays an **Open** button.
3. Tap the button.
4. The application displays **Hello World!**.

The interaction uses React's `useState` hook to update the screen.

## Project Structure

```text
HelloWorldApp/
├── assets/
├── App.tsx
├── app.json
├── eas.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## iOS Deployment

The application supports iOS builds using Expo Application Services (EAS).

Build the iOS application:

```bash
eas build --platform ios --profile production
```

Submit the build to App Store Connect:

```bash
eas submit --platform ios --latest
```

TestFlight distribution requires an active Apple Developer Program membership.

## Future Improvements

- Add multiple screens and navigation
- Create reusable UI components
- Integrate REST APIs
- Add user authentication
- Improve application styling

## Author

**Duy Nguyen**

GitHub: [@duynguyen199](https://github.com/duynguyen199)

## License

No license has been specified for this project.