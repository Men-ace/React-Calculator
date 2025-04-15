# 🧮 React-Calculator

A fun and responsive calculator built using **React**, with a sneaky prank mode that randomly tweaks your result for laughs! Built for experimenting with state management, event handling, and custom UI behavior.

---

## 🎯 Features

- ✅ Basic calculator operations: Add, Subtract, Multiply, Divide, Percentage
- ⌨️ Keyboard input support
- 🧠 Intelligent handling of multiple operators and decimal points
- 😈 **Prank mode**: Occasionally returns a slightly wrong result + plays a prank sound (`.wav`)
- 💅 Stylish, responsive UI with custom button components
- 🔊 Audio integration using JavaScript

---

## ⚙️ Technologies Used

- [React](https://react.dev/) – UI framework
- [Vite](https://vitejs.dev/) – Fast bundler and dev server
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- CSS Modules – Custom styling
- Audio Playback using the native JS `Audio` API

---

## 📦 Installation

Clone the project and install dependencies:

```bash
git clone https://github.com/yourusername/react-calculator.git
cd react-calculator
npm install or yarn

To start the development server:
npm start dev
yarn dev

 Project Structure: react-calculator
pgsql
Copy
Edit
react-calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── aa.wav
│   ├── components/
│   │   └── Button.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js


🔊 Prank Mode Details
Occasionally, when the = or Enter key is pressed, the app adds a random number between 1–3 to the total and plays a sound effect (aa.wav). This simulates a prank-like miscalculation — just for fun.

You can replace the prank sound by adding your own .wav file in the assets/ folder and updating the import path in App.jsx.


