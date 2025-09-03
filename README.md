🎨 Artisan App – GenAI Exchange Hackathon Project

An AI-powered marketplace for artisans, built with Next.js (frontend) and Express + Firebase Admin (backend).
This repository is a monorepo containing both frontend and backend, with CI/CD via GitHub Actions.

🚀 Tech Stack

Frontend: Next.js 15 + TypeScript + Tailwind CSS

Backend: Express + TypeScript + Firebase Admin SDK

Database: Firestore

Auth: Firebase Authentication

Hosting: Firebase Hosting (Frontend) + Google Cloud Run (Backend)

CI/CD: GitHub Actions

📂 Folder Structure
artisan-app/
│── frontend/              # Next.js frontend
│   ├── src/               # Pages, components, lib (firebase.ts), styles
│   ├── public/            # Static assets
│   ├── package.json
│   └── .env.example
│
│── backend/               # Express backend
│   ├── src/
│   │   ├── index.ts       # Entry point
│   │   ├── firebase.ts    # Firebase Admin init
│   │   ├── routes/        # API routes
│   │   └── serviceAccountKey.json (ignored)
│   ├── package.json
│   └── .env.example
│
│── .github/workflows/     # GitHub Actions for frontend & backend deploy
│── firebase.json          # Firebase Hosting config
│── .gitignore             # Global ignore
└── README.md              # This file

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/<your-org>/artisan-app.git
cd artisan-app

2. Frontend Setup (Next.js + Tailwind)
cd frontend
npm install
cp .env.example .env.local


Fill in frontend/.env.local with your Firebase client config:

NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id


Run locally:

npm run dev


Frontend will be available at 👉 http://localhost:3000

3. Backend Setup (Express + Firebase Admin)
cd backend
npm install
cp .env.example .env.local


Fill in backend/.env.local:

PORT=5000
FIREBASE_PROJECT_ID=artisan-app-ae358
GOOGLE_APPLICATION_CREDENTIALS=./src/serviceAccountKey.json


⚠️ Place your serviceAccountKey.json inside backend/src/ (this file is gitignored).

Run locally:

npm run dev


Backend will be available at 👉 http://localhost:5000

🔑 Environment Variables

Frontend: only public Firebase keys (NEXT_PUBLIC_...)

Backend: private Firebase Admin keys + server configs

.env.local files are ignored by Git

.env.example documents required variables

🚀 Deployment
🔹 Frontend (Firebase Hosting)

Deployed automatically via GitHub Actions (frontend-deploy.yml).

Build output: frontend/out.

🔹 Backend (Google Cloud Run)

Deployed automatically via GitHub Actions (backend-deploy.yml).

Runs as a containerized Express app using Firebase Admin SDK.

👩‍💻 Development Workflow

Checkout the correct branch:

dev/frontend-upload → frontend changes

dev/backend-ai → backend changes

Work on your feature and commit with a clear message:

git commit -m "feat: add artisan profile page"


Push to GitHub and open a Pull Request.

Once merged into main, CI/CD auto-deploys.

🛡️ Security Notes

serviceAccountKey.json is NEVER committed (ignored by .gitignore).

Do not commit .env.local.

Production secrets are stored in:

Firebase Console (Frontend Hosting)

Google Cloud Console (Cloud Run env vars) (Backend)

🧪 Testing the Setup

Frontend Firebase Auth test: open /test-auth page in frontend after login.

Backend Firestore test: GET request to
http://localhost:5000/test-firebase
→ should return { count: <number_of_users> }.

✨ Contributing

Always pull the latest main before starting.

Keep commits small and descriptive.

Follow branch naming convention:

feat/..., fix/..., chore/...

📌 License

MIT – free to use for hackathon purposes.