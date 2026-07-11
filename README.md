# Web Development & Design Portfolio

This repository contains my web development projects, styling exercises, and client-side scripting directories. It covers core web design concepts, vanilla layouts, and component-driven libraries.

> [!NOTE]
> My interactive personal portfolio website and ATS resume have been moved to their own dedicated repository: **[Portfolio_Website](https://github.com/amanmishra2005/Portfolio_Website)**.

---

## 📂 Repository Breakdown

### 1. 🧱 HTML Exercises (`HTML/`)
* Practice layouts using HTML5 structural tags (`<header>`, `<section>`, `<article>`, `<footer>`).
* Form validations, tables, and media embeds.

### 2. 🎨 Styling & Design (`CSS/`)
* Practices for CSS Flexbox, Grid, custom variable tokens, keyframes, transitions, and hover interactions.
* Responsive templates adjusting gracefully across mobile, tablet, and desktop monitors.

### 3. ⚡ Interactive Scripting (`JavaScript/`)
* Client-side JavaScript operations, DOM selectors, event listeners, dynamic form actions, and data storage.
* API integration testing (JSON requests, async/await).

### 4. ⚛️ Modern Libraries (`React/`)
* **Core Concepts & Component Practices**:
  * `First_React_App/` / `React_Component/`: Fundamental setups for component creation, props usage, and Vite integration.
  * `Fragments/`: Clean templates using React Fragments to avoid redundant wrapper DOM nodes.
  * `Mapping/`: Rendering lists dynamically from data arrays, componentizing list items, using CSS Modules (`Container.module.css`) for localized styling, and implementing component wrappers (`Container.jsx` using `props.children`).
  * `BootStrap/`: Integrating external frameworks like Bootstrap for responsive UI components.
* **Mini Projects (`Projects/`)**:
  * **To-Do App (V1 & V2)**: Task creation, display, and deletion using component state.
  * **Bharat Clock**: Live date and time updates.
  * **Calculator**: Basic arithmetic processing with custom components.

---

## 🚀 How to Run Locally

### Vanilla HTML/CSS/JS (HTML, CSS, JavaScript)
You don't need any complex build configurations. Simply open the `.html` file inside your preferred browser:
1. Double-click the `.html` file.
2. Alternatively, use an editor extension like **VS Code Live Server** to run it on a local hot-reloading port (e.g. `http://127.0.0.1:5500`).

### React Apps
Each React project is built with Vite. To run any of them:
1. Navigate to the project directory:
   ```bash
   cd React/Mapping
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL (typically `http://localhost:5173`) in your browser.
