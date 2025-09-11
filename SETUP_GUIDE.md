# SoulMindBlueprintApp: Step-by-Step Setup & Testing Guide

This guide will help you:
- Open a terminal on your computer
- Run the backend (API)
- Set up and run the frontend (React Native app) on **iOS** and **Android**

---

## 1. How to Open a Terminal

### On Windows
- Press `Windows + R`, type `cmd`, press Enter.
  OR
- Search for “Command Prompt” in the Start menu.

### On Mac
- Press `Command + Space`, type “Terminal”, press Enter.
  OR
- Open “Applications” > “Utilities” > “Terminal”.

### On Linux
- Press `Ctrl + Alt + T`.
  OR
- Search for “Terminal” in your app menu.

---

## 2. Backend Setup (Node.js/Express API)

1. **Open your terminal.**
2. Navigate to your project folder (replace with your actual path):
   ```bash
   cd path/to/SoulMindBlueprintApp/backend
   ```
3. Install backend dependencies:
   ```bash
   npm install express
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```
   - You should see a message like: `Backend listening on port 3001`

---

## 3. Frontend Setup (React Native App)

### Prerequisites
- **Node.js**: [Download & install here](https://nodejs.org/)
- **Expo CLI** (recommended for beginners):  
  Install in terminal:
  ```bash
  npm install -g expo-cli
  ```
- **Android Studio** (for Android emulator): [Install here](https://developer.android.com/studio)
- **Xcode** (for iOS simulator; Mac only): [Install from App Store](https://apps.apple.com/us/app/xcode/id497799835)

---

### 3A. Install Frontend Dependencies

1. **Open a terminal.**
2. Navigate to the frontend folder:
   ```bash
   cd path/to/SoulMindBlueprintApp/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

### 3B. Run the App Using Expo

1. Start Expo:
   ```bash
   npx expo start
   ```
2. You’ll see a QR code in the terminal or browser.
   - **iOS/Android device:** Download the **Expo Go** app from the App Store/Play Store.
   - Scan the QR code with Expo Go.
3. The app loads on your phone!

---

### 3C. Run on iOS Simulator (Mac Only)

1. Make sure Xcode is installed.
2. In terminal, inside your `frontend` folder:
   ```bash
   npx expo start
   ```
3. Press `i` in the terminal, or click “Run on iOS simulator” in the Expo browser window.
4. The app opens in the iOS simulator!

---

### 3D. Run on Android Emulator

1. Open **Android Studio** and start an Android Virtual Device (AVD).
2. In terminal, inside your `frontend` folder:
   ```bash
   npx expo start
   ```
3. Press `a` in the terminal, or click “Run on Android emulator” in the Expo browser window.
4. The app opens in the Android emulator!

---

## 4. Connect Your App to the Backend

**If you use your physical device or emulator, you need to update the fetch URL in `frontend/App.js`:**
- Replace `localhost` with your computer’s IP address, e.g.:
  ```javascript
  fetch('http://192.168.1.100:3001/api/blueprint')
  ```
- Find your IP:
  - **Windows:** Type `ipconfig` in the terminal; look for “IPv4 Address”.
  - **Mac/Linux:** Type `ifconfig` or `ip a` in the terminal.

---

## 5. Test the App

1. Make sure the backend server is running.
2. Open your app (Expo Go, simulator, or emulator).
3. Tap “View SoulMind Blueprint”.
4. You should see live blueprint data from the backend.

---

## Troubleshooting

- **Network request fails:**  
  - Double check backend is running.
  - Make sure you updated the URL with your IP.
- **Expo errors:**  
  - Try restarting:  
    ```bash
    npx expo start --clear
    ```
- **React Native errors:**  
  - Make sure all dependencies are installed: `npm install`.

---

You’re all set! If you get stuck, just ask for help with the step you’re on!