# React Portfolio Project

This is a portfolio application built with React and Vite for the frontend, and a Node.js/Express server for the backend.

The frontend source files are located in the root directory. The backend server files are in the `/server` directory.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

---

## Setup & Running

1.  **Install Frontend Dependencies**:
    From the project root directory, run:
    ```bash
    npm install
    ```

2.  **Install Backend Dependencies**:
    Navigate into the server directory and install its dependencies:
    ```bash
    cd server
    npm install
    cd ..
    ```

3.  **Run the Development Servers**:
    From the project root directory, run:
    ```bash
    npm run dev
    ```
    This command will start both the frontend Vite server (on http://localhost:5173) and the backend Express server (on http://localhost:3001) concurrently. Your browser should automatically open to the application.