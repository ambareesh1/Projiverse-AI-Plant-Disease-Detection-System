# AI Plant Disease Detection System

A premium, medium-size Projiverse academic agri-tech project for students, farmers, and agriculture learners. Users upload a plant leaf image, select crop type, and receive mock AI disease prediction with confidence score, severity level, causes, treatment suggestions, prevention tips, AI explanation, history, analytics, and print-ready reports.

## Problem Statement
Farmers often detect plant disease too late, expert inspection may be unavailable, and students need real-world AI/ML projects beyond notebooks.

## Objective
Build a React + FastAPI full-stack platform that demonstrates image classification workflow, backend APIs, SQL database design, AI assistant integration, and academic documentation.

## Features
- Leaf image upload with type and 5MB validation
- Crop selector for Tomato, Potato, Corn, Rice, Wheat, Grape, Apple, Cotton
- Mock ML prediction service with realistic disease metadata
- Result page with confidence, severity, causes, treatment, prevention, disclaimer
- PlantCare AI Assistant with OpenRouter-ready integration and mock fallback
- User dashboard, admin analytics dashboard, prediction history
- Disease knowledge base and RAG-ready markdown files
- Print / Save as PDF report page
- Academic explanation page and documentation

## Tech Stack
Frontend: React, TypeScript, Vite, Tailwind CSS, React Router DOM, Axios, Lucide React, Recharts, GSAP. Backend: FastAPI, Pydantic, SQLAlchemy, SQLite, python-jose/passlib JWT-ready auth, python-multipart, requests, dotenv.

## Architecture
React calls FastAPI `/api` endpoints. FastAPI validates uploads, stores records using SQLAlchemy, calls the mock model, optionally calls OpenRouter from backend-only service, and returns advisory results. SQLite is default; PostgreSQL is supported by changing `DATABASE_URL`.

## Folder Structure
- `frontend/src/components` reusable UI, landing, dashboard components
- `frontend/src/pages` routed application pages
- `frontend/src/services` API clients
- `backend/app/routers` REST endpoints
- `backend/app/services` business logic
- `backend/app/ml` mock model and TensorFlow-ready loader
- `backend/app/knowledge_base` markdown disease knowledge
- `docs` academic documentation

## Setup Guide
Backend:
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Frontend: `VITE_API_BASE_URL=http://localhost:8000/api`.
Backend: `DATABASE_URL=sqlite:///./plantcare.db`, `JWT_SECRET_KEY=change-this-secret`, `OPENROUTER_API_KEY=`, `OPENROUTER_MODEL=openai/gpt-4o-mini`.

## API Endpoints
Auth: `POST /api/auth/signup`, `POST /api/auth/login`, `GET /api/auth/me`.
Predictions: `POST /api/predictions/analyze`, `GET /api/predictions`, `GET /api/predictions/{id}`, `DELETE /api/predictions/{id}`, `GET /api/predictions/user/{userId}`.
Diseases and crops support CRUD. AI supports chat, explain prediction, viva, abstract, and model explanation. Analytics supports overview and chart datasets.

## ML Model Workflow
The MVP uses a crop-aware mock model. A real CNN workflow can later add TensorFlow/Keras model loading in `backend/app/ml/model_loader.py`, resize/normalize images, run inference, decode labels, and map confidence and severity.

## AI Assistant
PlantCare AI Assistant explains disease results, safe treatment and prevention, CNN workflow, API flow, architecture, abstracts, viva questions, and future enhancements. If no OpenRouter key exists, it returns helpful mock responses.

## Demo Users
- admin@plantcare.com / Admin@123
- student@plantcare.com / Student@123
- farmer@plantcare.com / Farmer@123

## Screenshots
Add screenshots of landing page, detection page, result page, dashboards, and AI assistant after running locally.

## Future Enhancements
Real TensorFlow model integration, mobile app, offline detection, multilingual AI assistant, voice assistant, weather prediction, IoT soil sensors, drone image analysis, geo disease map, agriculture helpline integration, expert consultation, farm disease alerts.

## Disclaimer
This system provides advisory and educational information only. It does not guarantee diagnosis. For serious crop damage, consult a local agriculture expert.
