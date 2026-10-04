# AniMind 🎌

A mobile app for anime fans to **discover, track, and review** anime — with personalized recommendations based on your taste.

Most anime platforms are cluttered and impersonal. AniMind aims to be simpler and taste-driven: find your next watch, keep a watchlist, rate what you've seen, and get recommendations that actually fit you.

---

## Features (MVP)

- 🔐 **Authentication** — secure sign-up and login with JWT
- 🔎 **Anime search & details** — powered by the [Jikan API](https://jikan.moe/) (MyAnimeList data)
- 📺 **Watchlist** — track what you want to watch and what you've finished
- ⭐ **Ratings & reviews** — rate anime and write reviews
- 🧠 **Recommendations** — personalized suggestions using genre similarity + popularity

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Mobile app** | React Native |
| **Backend** | Node.js · Express · TypeScript |
| **Database** | MongoDB (Atlas) — *migrating to PostgreSQL (NeonDB) later* |
| **External data** | Jikan API (no API key required) |
| **Auth** | JWT |

> **Note on the database:** AniMind starts on MongoDB and will migrate to PostgreSQL (NeonDB) as the data model matures. All database access is isolated behind a **repository layer**, so the migration touches only that layer — routes, controllers, and services stay unchanged.

---

## Project Structure

This is a monorepo containing the backend API and (later) the mobile app.

```
AniMind/
├── backend/          # Express + TypeScript API
│   └── src/
│       ├── config/        # env loading + DB connection
│       ├── routes/        # URL → controller mapping
│       ├── controllers/   # request/response handling
│       ├── services/      # business logic
│       ├── repositories/  # database access (DB-specific layer)
│       ├── models/        # Mongoose schemas
│       ├── middleware/    # auth, error handling, validation
│       ├── validators/    # input validation schemas
│       ├── types/         # shared TypeScript types
│       └── utils/         # helpers
└── mobile/           # React Native app (coming soon)
```

### Request flow

```
request → routes → middleware → controller → service → repository → model → database
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- A MongoDB Atlas connection string

### Backend setup

```bash
cd backend
npm install

# create your env file from the template
cp .env.example .env
# then fill in .env with your real values (MONGODB_URI, JWT_SECRET, etc.)

npm run dev
```

The server runs at `http://localhost:3000`. Check it's alive:

```bash
curl http://localhost:3000/health
```

### Backend scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled production build |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without changing files |

---

## Status

🚧 **In active development** — backend foundation complete; building out core features toward launch.

---

## License

ISC
