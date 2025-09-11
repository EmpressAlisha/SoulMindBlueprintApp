# SoulMindBlueprintApp

A React Native app powered by a Node.js/Express backend, designed to guide seekers through the SoulMind Blueprint. The blueprint data is served via an API and displayed in the mobile app.

---

## Folder Structure

- `backend/`: Express.js backend API serving the blueprint data (`blueprint.json`)
- `frontend/`: React Native app fetching and displaying blueprint data

---

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install express
node index.js
```

- The backend runs by default on **http://localhost:3001**
- The blueprint data is served at **http://localhost:3001/api/blueprint**

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

- For Expo-based React Native apps, use `npx expo start`.
- For plain React Native, use `npx react-native run-ios` or `npx react-native run-android` as needed.

### 3. Connecting Frontend to Backend

- By default, the frontend fetches from `http://localhost:3001/api/blueprint`.
- **If you are testing on a physical device or emulator:**  
  Replace `localhost` in `frontend/App.js` with your computer’s IP address (e.g. `http://192.168.1.100:3001/api/blueprint`).

---

## How to Test

1. **Start the Backend:**  
   Open a terminal, run:
   ```bash
   cd backend
   node index.js
   ```

2. **Start the Frontend:**  
   Open a new terminal, run:
   ```bash
   cd frontend
   npm start
   ```
   - If using Expo, scan the QR code with your phone (Expo Go app).

3. **View the Blueprint:**  
   - Open the app.
   - Tap “View SoulMind Blueprint”.
   - You should see the live blueprint data from your backend.

---

## Troubleshooting

- **Network Requests Failing:**  
  - Make sure your backend is running.
  - If on mobile/emulator, use your computer’s IP instead of `localhost`.

- **React Native Errors:**  
  - Ensure all dependencies are installed (`npm install`).
  - Restart Metro bundler if you see cache errors (`npm start --reset-cache`).

- **Backend Errors:**  
  - Ensure Node.js is installed.
  - Check that `express` is installed (`npm install express`).

---

## Customizing Your Blueprint

- Edit `backend/blueprint.json` to update your blueprint data.
- Restart your backend server after making changes.

---

**Enjoy your SoulMind Blueprint journey!**