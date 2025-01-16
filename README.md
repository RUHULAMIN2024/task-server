````markdown
# Social Media Task - Server

This is the backend for the Social Media Task project, built using Node.js, Express.js, and MongoDB. It handles data storage, image uploads, and API endpoints for user submissions and admin dashboard functionality.

## Features

- **User Data Storage**:

  - Save user name, social media handle, and image URLs to MongoDB.

- **Image Upload**:
  - Upload and store images using Cloudinary.
- **Admin API**:
  - Provide an endpoint for fetching user submissions for the dashboard.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Cloudinary (for image uploads)
- Multer (for handling file uploads)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/RUHULAMIN2024/task-server
   cd task-server

   ```

2. Install dependencies:
   ```bash
   npm install
   ```
````

3. Create a `.env` file in the root directory and add the following variables:

   ```env

   NODE_ENV=development
   PORT=5000
   DATABASE_URL= <mongodb_url>
   CLOUDINARY_CLOUD_NAME=<>
   CLOUDINARY_API_KEY=<>
   CLOUDINARY_API_SECRET=<>
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---
