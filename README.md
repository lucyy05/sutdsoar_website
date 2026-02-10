# SUTD Organisation of Autonomous Robotics (SOAR) Website

This repository contains the source code for the official website of the SUTD Organisation of Autonomous Robotics (SOAR). The website serves as a platform to showcase our projects, events, team members, and vision, as well as providing learning resources for the robotics community.

## 🚀 Technology Stack

This project is built using modern web technologies:

*   **Framework:** [Vue.js 3](https://vuejs.org/) (Composition & Options API)
*   **Build Tool:** [Vite](https://vitejs.dev/) - for fast development and bundling.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - for type-safe code.
*   **Styling:** SCSS / SASS with a custom design system.
*   **State Management:** [Vuex](https://vuex.vuejs.org/)
*   **Routing:** [Vue Router](https://router.vuejs.org/)

## 🛠️ Project Setup

### Prerequisites

*   Node.js (LTS version recommended)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/sutdsoar_v2.git
    cd sutdsoar_v2
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

To start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

To build the project for production:

```bash
npm run build
```

The output files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

*   `src/app/home`: Components and logic for the main landing page (Home, About, Events, Projects, Team).
*   `src/app/learn`: Components for the Learning resources section.
*   `src/app/shared`: Reusable UI components (`VueNavBar`, `VueGrid`, `ProjectCard`, etc.) and styles.
*   `src/app/router.ts`: Application routing configuration.
*   `src/app/store.ts`: State management configuration.

## 🎨 Features

*   **Responsive Design:** Optimized for Desktop, Tablet, and Mobile devices.
*   **Interactive Animations:** Custom particle effects in the Hero section.
*   **Dynamic Sections:** Modular components for showcasing Projects and Events.

## 🤝 Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
