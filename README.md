# Task Manager

## Task Manager Demo Explained

[![Task Manager Demo Explained](https://img.youtube.com/vi/j4qMZcr0iz4/0.jpg)](https://www.youtube.com/watch?v=j4qMZcr0iz4-mc)

## Systematic UI Developement - Task Manager with React-Native

[![Systematic UI Developement - Task Manager with React-Native](https://img.youtube.com/vi/G1yuNYyr-mc/0.jpg)](https://www.youtube.com/watch?v=G1yuNYyr-mc)

## Demo

[![Systematic UI Developement - Task Manager with React-Native](https://img.youtube.com/vi/PhR47cPun_s/0.jpg)](https://www.youtube.com/watch?v=PhR47cPun_s)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- **Expo Go app** on your iOS/Android device (for quickest development)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Setup Instructions

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## How to Run the Project

For simplicity let's go with Expo Go in Simulator

```bash
npm start
```

1. Open the Expo Go app on your iOS or Android device

2. Scan the QR code displayed in your terminal or browser

   - **iOS**: Use the built-in Camera app
   - **Android**: Use the QR scanner in the Expo Go app

3. If you experience issues loading the QR, expose the port to the internet

```bash
npm start --tunnel
```

## Dependencies and Versions

| Package                                       | Version  | Purpose                                      |
| --------------------------------------------- | -------- | -------------------------------------------- |
| **react**                                     | 19.1.0   | Core React library                           |
| **react-native**                              | 0.81.5   | React Native framework                       |
| **expo**                                      | ~54.0.20 | Expo managed workflow platform               |
| **typescript**                                | ~5.9.2   | TypeScript language support                  |
| **@react-native-async-storage/async-storage** | 2.2.0    | Persistent local storage for tasks and theme |
| **react-native-safe-area-context**            | ~5.6.0   | Safe area rendering (notches, status bars)   |
| **expo-status-bar**                           | ~3.0.8   | Status bar control and styling               |
| **expo-crypto**                               | ~15.0.7  | UUID generation for task IDs                 |

## Project Structure

```
rn-shopping-list/
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React Context (theme management)
│   ├── types/          # TypeScript type definitions
│   ├── constant.ts     # App constants (storage keys)
│   └── utils.ts        # Utility functions
├── App.tsx             # Root application component
├── index.ts            # Entry point
└── app.json            # Expo configuration
```

## Features

- Create, complete, and delete tasks
- Three priority levels (high, medium, low)
- Filter by status (all, completed, pending)
- Filter by priority
- Dark/light theme toggle (see Known Issues)
- Pull-to-refresh
- Persistent storage (tasks saved locally)
- Animations on list CRUD ops
- Edit existing tasks (not implemented)

## Brief explanation of your state management choice

This app is using Context API over Zustand was for the following reasons :

- Small **scale** of states (theme in the app) is small
- Few global states (theme)
- Favor react-native hooks over community-based to reduce external deps and increase maintainability

When **NOT** to use or migrate to zustand or any global state management?

- Multiple states (for example, user, analytics, business-domaind data, theme) and you need to define multiple operations on those states (CRUD, business ops)
- Large object states, zustand use Immer to draft and update a new deeply nested state
- Caching and data fetching to keep consistency between client & sever state (there are other alternatives react-query, swc)

## Assumptions

1. No routing required, therefore no App folder
2. Following the src folder structure just by convention
3. Design might not be according to UI System Design Guidelines for iOS or Android
4. For this Demo, app is in a fresh start.

## Known Issues

1. **Status bar theme toggle**: The status bar doesn't change style to light/dark in Expo Go app. This works correctly with native builds. [Related React Native Issue #26369](https://github.com/facebook/react-native/issues/26369)
