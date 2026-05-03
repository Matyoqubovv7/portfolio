# Xudoyshukur Matyoqubov — Developer Portfolio

A premium, full-stack personal portfolio website built with **React**, **Node.js**, **Express**, and **MongoDB**. Featuring a dark-mode first design with glassmorphism, smooth Framer Motion animations, and a fully functional contact API.

---

## ✨ Features

- 🌑 **Dark mode** — Premium dark-first design with glassmorphism effects
- ⚡ **Framer Motion** — Smooth scroll animations, staggered reveals, hover effects
- 🎯 **Typing effect** — Animated role rotator in the Hero section
- 🔍 **Project filtering** — Filter projects by category (Full Stack, Frontend, etc.)
- 📬 **Contact API** — Form submissions stored in MongoDB (or JSON fallback)
- 🛡️ **Rate limiting & validation** — Security-first backend with express-validator
- 📱 **Fully responsive** — Mobile, tablet, and desktop
- 🖱️ **Custom cursor** — Smooth cursor follower on desktop
- 🎨 **Custom fonts** — Syne + DM Sans + JetBrains Mono
- 🔒 **CORS + Helmet** — Production-ready security headers

---

## 🗂 Project Structure

```
portfolio/
├── client/                  # React + Vite frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx         # Typing animation, CTA buttons
│   │   │   ├── About.jsx        # Bio, skill bars, tech stack
│   │   │   ├── Projects.jsx     # Project cards with filtering
│   │   │   ├── Achievements.jsx # Timeline of experience
│   │   │   ├── Contact.jsx      # Form + social links
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx       # Loading screen
│   │   │   └── CustomCursor.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                  # Node.js + Express backend
│   ├── config/
│   │   └── db.js            # MongoDB connection + JSON fallback
│   ├── controllers/
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── models/
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   ├── index.js             # Express app entry point
│   └── package.json
│
├── package.json             # Root — runs both client & server
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9+
- MongoDB Atlas URI *(optional — JSON fallback works without it)*

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install all dependencies (client + server)
npm run install:all

# Or install manually:
cd client && npm install
cd ../server && npm install
```

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example server/.env
```

Open `server/.env` and fill in your values:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://...   # Optional
CLIENT_URL=http://localhost:5173
```

> ⚠️ **No MongoDB? No problem.** The server auto-detects a missing/invalid URI and falls back to in-memory JSON storage. Everything works — messages and projects are stored in memory during the session.

### 3. Run

```bash
# From the root directory — starts BOTH client and server
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `GET` | `/api/projects` | List all projects |
| `GET` | `/api/projects?category=Frontend` | Filter by category |
| `GET` | `/api/projects/:id` | Get project by ID |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | List all messages (admin) |

### Contact POST body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'd like to work with you."
}
```

---

## 🎨 Customization

### Personal Info

Search and replace `YOUR_USERNAME` with your actual handles:

```
https://t.me/YOUR_USERNAME
https://instagram.com/YOUR_USERNAME
https://github.com/YOUR_USERNAME
https://linkedin.com/in/YOUR_USERNAME
```

### Color Palette

Edit `client/tailwind.config.js`:

```js
colors: {
  accent:   "#6ee7b7",  // Primary green
  accent-2: "#a78bfa",  // Purple
  accent-3: "#f472b6",  // Pink
}
```

### Projects

Edit the `FALLBACK_PROJECTS` array in `client/src/components/Projects.jsx` or seed your MongoDB with real projects via the `jsonStore.projects` array in `server/config/db.js`.

---

## 📦 Build for Production

```bash
# Build the React client
npm run build

# Start the production server
npm start
```

The built static files will be in `client/dist/`. You can serve them via Nginx, or configure Express to serve them:

```js
// In server/index.js (add this for production)
import { join } from "path";
app.use(express.static(join(__dirname, "../client/dist")));
app.get("*", (req, res) => res.sendFile(join(__dirname, "../client/dist/index.html")));
```

---

## 🔧 Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- React Intersection Observer

**Backend**
- Node.js + Express
- Mongoose + MongoDB Atlas
- express-validator
- Helmet + CORS
- express-rate-limit

---

## 📄 License

MIT © Xudoyshukur Matyoqubov
