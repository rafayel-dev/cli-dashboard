# 🧠 Admin Dashboard — React + Tailwind

A modern and responsive admin dashboard built with **React**, **Tailwind CSS**. Optimized for developer experience and real-world use. 

---

## 🚀 Live Demo

👉 [Live Preview](https://cli-dashboard.vercel.app/)

---

## 🛠️ Tech Stack

- ⚛️ React 19
- 🎨 Tailwind CSS
- 🔐 Firebase Auth (optional)
- 📦 Zustand or Redux
- 💾 localStorage (UI persistency)

---

## ✨ Features

- ✅ **Responsive Design**: Adapts to various screen sizes for optimal viewing on desktop and mobile devices.
- ✅ **Collapsible Sidebar**: Toggle sidebar visibility with state persistence using `localStorage`.
- ✅ **Route Memory**: Automatically restores the last visited page/path on application reload.
- ✅ **Clean Folder Structure**: Organized and maintainable project structure for better development experience.
- ✅ **Protected Routes**: Secure routes for authenticated users (if authentication is implemented).
- ✅ **Dynamic Content**: Dashboard components (Stat Cards, Charts, Tables) display dynamic data.
- ✅ **Authentication Flow**: Basic login page and authentication context for user management.

## 📁 Project Structure

```
cli-dashboard/
├── .env
├── public/
├── src/
│   ├── components/
│   │   └── common/       # Reusable, generic UI components
│   ├── context/          # React Context APIs (e.g., AuthContext.js, ThemeContext.js)
│   ├── layout/           # Structural components (Navbar, Sidebar)
│   ├── pages/            # Page-specific components
│   ├── styles/           # CSS files
│   └── App.js            # Main application component
│   └── index.js          # Entry point
│   └── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
├── README.md
└── ... (other configuration files)
```

## Admin Login Credentials

**Username:** admin
**Password:** admin

👤 Author

Rafiul Islam
Full Stack Web Developer
(https://github.com/rafayel-islam)