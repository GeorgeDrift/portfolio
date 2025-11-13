
# API Documentation & Database Setup Guide

This document provides a complete guide for setting up the backend server, connecting it to a PostgreSQL database, and understanding the available API endpoints.

---

## 1. Backend Setup

### Environment Variables

Before running the server, you need to create a `.env` file in the `/server` directory. This file will store your sensitive configuration details.

Create `/server/.env` and add the following content:

```env
# PostgreSQL Database Connection URL
# Replace with your actual database connection string
DATABASE_URL="postgresql://user:password@host:port/database_name"

# JSON Web Token (JWT) Secret
# Use a long, random, and secret string for production
JWT_SECRET="your-super-secret-jwt-key-that-is-very-long-and-random"
```

### Installing Dependencies

Navigate to the server directory and install the required packages. You will need a PostgreSQL client like `pg`.

```bash
cd server
npm install
npm install pg # PostgreSQL client
```

### Running the Server

From the `/server` directory, you can run the server in development mode (with automatic restarts):

```bash
npm run dev
```

---

## 2. PostgreSQL Database Schema

Here are the SQL commands to create the necessary tables in your PostgreSQL database.

### Table: `users`

Stores admin login credentials. In a real application, the password should be hashed using a library like `bcrypt`.

-   **Table Name**: `users`
-   **Columns**:
    -   `id` (SERIAL, PRIMARY KEY)
    -   `username` (VARCHAR(255), UNIQUE, NOT NULL)
    -   `password` (VARCHAR(255), NOT NULL)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Example for inserting the admin user (password should be hashed in production)
INSERT INTO users (username, password) VALUES ('admin', 'password');
```

### Table: `profile`

Stores the information for the "About Me" section. This table should only ever contain a single row.

-   **Table Name**: `profile`
-   **Columns**:
    -   `id` (INTEGER, PRIMARY KEY, DEFAULT 1)
    -   `name` (VARCHAR(255), NOT NULL)
    -   `bio` (TEXT, NOT NULL)
    -   `image_url` (VARCHAR(255), NOT NULL)

```sql
CREATE TABLE profile (
    id INTEGER PRIMARY KEY DEFAULT 1,
    name VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    CONSTRAINT single_row CHECK (id = 1) -- Ensures only one row can be inserted
);
```

### Table: `skills`

Stores the list of technical skills.

-   **Table Name**: `skills`
-   **Columns**:
    -   `id` (SERIAL, PRIMARY KEY)
    -   `name` (VARCHAR(255), NOT NULL)
    -   `icon` (VARCHAR(50), NOT NULL) - *Identifier for the frontend icon*

```sql
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    icon VARCHAR(50) NOT NULL
);
```

### Table: `projects`

Stores the details for each project in the portfolio.

-   **Table Name**: `projects`
-   **Columns**:
    -   `id` (SERIAL, PRIMARY KEY)
    -   `title` (VARCHAR(255), NOT NULL)
    -   `description` (TEXT, NOT NULL)
    -   `technologies` (TEXT[], NOT NULL) - *Array of strings*
    -   `image_url` (VARCHAR(255), NOT NULL)
    -   `live_url` (VARCHAR(255))
    -   `repo_url` (VARCHAR(255))

```sql
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[] NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    live_url VARCHAR(255),
    repo_url VARCHAR(255)
);
```

### Table: `gallery_images`

Stores the images for the photo gallery.

-   **Table Name**: `gallery_images`
-   **Columns**:
    -   `id` (SERIAL, PRIMARY KEY)
    -   `image_url` (VARCHAR(255), NOT NULL)
    -   `alt_text` (VARCHAR(255), NOT NULL)

```sql
CREATE TABLE gallery_images (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255) NOT NULL
);
```

---

## 3. API Endpoints

All endpoints are prefixed with `/api`.

### Authentication

-   **`POST /auth/login`**
    -   **Description**: Authenticates an admin user.
    -   **Body**: `{ "username": "admin", "password": "password" }`
    -   **Success Response (200)**: `{ "token": "your_jwt_token" }`
    -   **Error Response (401)**: `{ "message": "Invalid credentials!" }`

### Profile

-   **`GET /profile`**
    -   **Description**: Retrieves the profile information.
    -   **Success Response (200)**: `Profile` object.

-   **`PUT /profile`**
    -   **Description**: Updates the profile information.
    -   **Authentication**: Required (Bearer Token).
    -   **Body**: `Profile` object.
    -   **Success Response (200)**: Updated `Profile` object.

### Skills

-   **`GET /skills`**
    -   **Description**: Retrieves the list of all skills.
    -   **Success Response (200)**: Array of `Skill` objects.

### Projects

-   **`GET /projects`**
    -   **Description**: Retrieves the list of all projects.
    -   **Success Response (200)**: Array of `Project` objects.

-   **`POST /projects`**
    -   **Description**: Adds a new project.
    -   **Authentication**: Required (Bearer Token).
    -   **Body**: `Project` object (without `id`).
    -   **Success Response (201)**: The newly created `Project` object (with `id`).

-   **`DELETE /projects/:id`**
    -   **Description**: Deletes a project by its ID.
    -   **Authentication**: Required (Bearer Token).
    -   **Success Response (204)**: No content.

### Gallery

-   **`GET /gallery`**
    -   **Description**: Retrieves all gallery images.
    -   **Success Response (200)**: Array of `GalleryImage` objects.

-   **`POST /gallery`**
    -   **Description**: Adds a new image to the gallery.
    -   **Authentication**: Required (Bearer Token).
    -   **Body**: `GalleryImage` object (without `id`).
    -   **Success Response (201)**: The newly created `GalleryImage` object (with `id`).

-   **`DELETE /gallery/:id`**
    -   **Description**: Deletes an image from the gallery by its ID.
    -   **Authentication**: Required (Bearer Token).
    -   **Success Response (204)**: No content.
