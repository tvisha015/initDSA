# initDSA.in

Welcome to **initDSA.in** – a modern web platform designed to help students and developers master **Data Structures and Algorithms (DSA)** through real-time code execution, categorized problems, and a smooth UI experience.
## 🌐 Live Website
You can access the platform here:  
👉 [**initDSA.in**](https://www.initdsa.in)
Explore problems, write code, run it live, and sharpen your DSA skills — all in one place!

## 📌 What is initDSA?

**initDSA** is an interactive coding practice platform inspired by sites like LeetCode. It allows users to:
- Solve DSA problems across various difficulty levels (Easy, Medium, Hard)
- Write and run code in-browser using Judge0 API
- Practice using real-life problem scenarios
- Track problem tags and topics
- Log in securely and save progress

The platform is ideal for beginners who want to start their DSA journey, as well as experienced coders preparing for interviews.

## 🛠️ Tech Stack

### 🚀 Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first CSS framework for fast styling
- **Monaco Editor** – In-browser code editor (same as used in VS Code)
### 🧠 Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Backend web application framework
### 🗃️ Database
- **PostgreSQL** – Relational database
- **Prisma ORM** (optional) – For querying and managing database models
### 🔐 Authentication
- **JWT (JSON Web Tokens)** – Secure user authentication
### ⚙️ Code Execution
- **Judge0 API** – Used to run and validate code submissions in real time
### ⚡ State Management
- **Zustand** – Lightweight React state management library
### 🔍 API Documentation
- **Swagger** – Auto-generated API documentation for frontend/backend integration
### 🔧 Version Control
- **Git** and **GitHub**
---
## 🧪 How to Clone and Run Locally
### Prerequisites
- Node.js (v16 or higher)  
- npm or yarn  
- PostgreSQL database  
- Judge0 API (for code execution)

### Steps to Run Locally
1. **Clone the repository**
```bash
git clone https://github.com/tvisha015/initDSA.git
cd backend
cd frontend
```
2. **Install Dependencies**
```bash
npm install
```
3. **Set Up Environment Variables Create a .env file in the root directory and add the following variables:**
```bash
PORT =
DATABASE_URL=
JWT_SECRET=
JUDGE0_API_URL=http://localhost:2358/
```
4. Run the Development Server
```bash
npm run dev
```

## 👩‍💻 Author
Made with ❤️ by **Tvisha Sharma**
- 🔗 [LinkedIn](https://www.linkedin.com/in/tvisha-sharma-74a551283/)
- ✖️ [X (formerly Twitter)](https://x.com/tvishasharma_)
- 📫 Email: tvisha.edu@gmail.com

If you found this project helpful or interesting, feel free to connect with me or give a ⭐ on GitHub!
