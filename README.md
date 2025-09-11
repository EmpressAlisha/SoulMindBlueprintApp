# SoulMindBlueprintApp

A React Native mobile app built with Expo, designed to guide seekers through the SoulMind Blueprint. This app provides an intuitive interface for exploring personal development and spiritual growth content.

## 📱 Getting Started

### Prerequisites

Before running the app, make sure you have:

- **Node.js** (v16 or later): [Download here](https://nodejs.org/)
- **Expo CLI**: Install globally with `npm install -g @expo/cli`
- **Expo Go app** on your mobile device:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EmpressAlisha/SoulMindBlueprintApp.git
   cd SoulMindBlueprintApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App

#### Option 1: Using Expo Go (Recommended for beginners)

1. **Start the development server:**
   ```bash
   npm start
   # or
   expo start
   ```

2. **Open the app on your device:**
   - A QR code will appear in your terminal and browser
   - Open the **Expo Go** app on your phone
   - Scan the QR code with your device camera (iOS) or the Expo Go app (Android)
   - The app will load on your device!

#### Option 2: Using iOS Simulator (Mac only)

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Launch iOS Simulator:**
   - Press `i` in the terminal, or
   - Click "Run on iOS simulator" in the Expo Dev Tools browser window

#### Option 3: Using Android Emulator

1. **Set up Android Studio and create an emulator** ([Guide here](https://docs.expo.dev/workflow/android-studio-emulator/))

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Launch Android Emulator:**
   - Press `a` in the terminal, or
   - Click "Run on Android device/emulator" in the Expo Dev Tools browser window

### Building for Production

#### Web Build
```bash
npm run web
```

#### Native Builds
For building standalone apps for iOS and Android, use Expo Application Services (EAS):

```bash
npm install -g eas-cli
eas build
```

## 🏗️ Project Structure

```
SoulMindBlueprintApp/
├── App.js                 # Main app component
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── assets/               # Images, fonts, and other static assets
├── backend/              # Express.js backend (optional for local development)
└── node_modules/         # Installed dependencies
```

## 🔧 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android device/emulator
- `npm run ios` - Start the app on iOS device/simulator (Mac only)
- `npm run web` - Start the app in web browser

## 🌐 Backend Integration

This repository includes an optional Express.js backend in the `backend/` directory for local development. To run the backend:

```bash
cd backend
npm install express
node index.js
```

The backend will serve blueprint data at `http://localhost:3001/api/blueprint`.

**Note:** When testing on a physical device, replace `localhost` with your computer's IP address.

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Go App](https://expo.dev/client)

## 🐛 Troubleshooting

### Common Issues

**Metro bundler cache issues:**
```bash
npm start --clear
# or
expo start --clear
```

**Network request failures:**
- Ensure your device and computer are on the same network
- Replace `localhost` with your computer's IP address when testing on physical devices
- Check firewall settings

**Expo Go app not loading:**
- Make sure you're connected to the same network as your development machine
- Try restarting the Expo development server
- Check that your firewall isn't blocking the connection

### Getting Help

If you encounter any issues:
1. Check the [Expo Troubleshooting Guide](https://docs.expo.dev/troubleshooting/overview/)
2. Search existing issues on GitHub
3. Create a new issue with detailed steps to reproduce the problem

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## 📄 License

This project is licensed under the MIT License.

---

**Enjoy your SoulMind Blueprint journey!** 🌟