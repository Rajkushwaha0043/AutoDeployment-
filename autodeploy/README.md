# AutoDeploy 🚀

A full-stack web application demonstrating **CI/CD (Continuous Integration/Continuous Deployment)** with automatic deployment on every code push to GitHub.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment Setup](#deployment-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Demo](#demo)

## 🎯 Overview

**AutoDeploy** is a modern web application built to showcase the power of automated deployment workflows. The main purpose is to demonstrate how CI/CD pipelines work, not to build complex business logic.

### Key Highlights:
- ✅ **Automatic deployment** whenever code is pushed to GitHub
- ✅ **GitHub Actions** for CI/CD automation
- ✅ **Modern tech stack** with React, Vite, Tailwind CSS
- ✅ **Premium UI design** with dark mode and animations
- ✅ **Full-stack architecture** with Node.js backend

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| **React 18** | Frontend framework |
| **Vite** | Fast build tool |
| **Tailwind CSS** | Utility-first CSS framework |
| **JavaScript (ES6+)** | Programming language |

### Backend
| Technology | Description |
|------------|-------------|
| **Node.js** | Runtime environment |
| **Express.js** | Backend framework |
| **MongoDB** | Database (optional) |
| **Mongoose** | MongoDB ODM |

### DevOps & Deployment
| Tool | Purpose |
|------|---------|
| **GitHub** | Version control |
| **GitHub Actions** | CI/CD pipeline |
| **Vercel** | Frontend hosting |
| **Render** | Backend hosting |

## ✨ Features

### 1. **Dynamic Greeting**
Displays time-based greetings (Good Morning/Afternoon/Evening) based on user's local time.

### 2. **Theme Switcher**
Toggle between light and dark mode with persistent preference storage.

### 3. **Deployment Visualization**
Interactive demo showing the 3-step deployment flow: Push → Build → Deploy.

### 4. **API Endpoints**
- `/api/quote` - Random motivational quotes
- `/api/deployments` - Deployment statistics
- `/api/deployments/history` - Deployment history
- `/health` - Health check endpoint

## 📁 Project Structure

```
autodeploy/
├── src/                      # React components
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Demo.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   └── index.css
├── backend/                  # Node.js + Express API
│   ├── src/
│   │   ├── routes/api.js
│   │   ├── server.js
│   │   └── config.js
│   ├── package.json
│   └── render.yaml
├── .github/workflows/
│   ├── frontend.yml         # Frontend CI/CD
│   └── backend.yml          # Backend CI/CD
├── package.json
├── tailwind.config.js
├── vercel.json
└── README.md
```

## 💻 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start server
npm start
```

The backend will be available at `http://localhost:3000`

### Environment Variables

#### Backend (.env)
```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
MONGO_URI=mongodb://localhost:27017/autodeploy  # Optional
```

## 🚀 Deployment Setup

### Step 1: Create Accounts

1. **Vercel** (Frontend) - Sign up at [vercel.com](https://vercel.com)
2. **Render** (Backend) - Sign up at [render.com](https://render.com)

### Step 2: Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

**Vercel Secrets:**
- `VERCEL_TOKEN` - From Vercel account settings
- `VERCEL_ORG_ID` - From Vercel project settings
- `VERCEL_PROJECT_ID` - From Vercel project settings

**Render Secrets:**
- `RENDER_API_KEY` - From Render account settings
- `RENDER_SERVICE_ID` - From Render service dashboard

### Step 3: Deploy

**Vercel (Frontend):**
1. Connect GitHub repository in Vercel dashboard
2. Deploy automatically on push to main

**Render (Backend):**
1. Create New Web Service in Render
2. Connect your GitHub repository
3. Set Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `npm start`

## 🔄 CI/CD Pipeline

### How It Works

1. **Push code** to GitHub main branch
2. **GitHub Actions** automatically triggers
3. **Build & Test** your application
4. **Deploy** to Vercel (frontend) & Render (backend)
5. **Live** in ~2-3 minutes! 🎉

### Testing the Pipeline

Make a small change and push to GitHub:
```bash
git add .
git commit -m "feat: update greeting message"
git push origin main
```

Watch the Actions tab in your GitHub repository to see the deployment in progress!

## 🎬 Demo

Try these changes to see CI/CD in action:

1. Update greeting in `src/components/Hero.jsx`
2. Change colors in `tailwind.config.js`
3. Add new quote in `backend/src/routes/api.js`

## 📝 License

MIT License - free to use for learning and demonstration.

## 🤝 Contributing

This is a demo project for educational purposes. Feel free to fork and customize!

---

**Built with ❤️ for CI/CD demonstration** 🚀
