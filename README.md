# RiseTogether Platform

RiseTogether is a microservices-based platform scaffold designed to support social-impact workflows across authentication, beneficiaries, schools, jobs, sponsors, chat, and a web frontend.

This repository currently contains the project structure and branch strategy, with service implementation to be added incrementally.

## Project Structure

```text
.
├── docker-compose.yml
├── README.md
├── config/
│   ├── default.json
│   ├── dev.json
│   └── prod.json
├── docker/
│   ├── docker-compose.yml
│   ├── nginx/
│   │   └── nginx.conf
│   └── services/
│       ├── auth/Dockerfile
│       ├── beneficiary/Dockerfile
│       ├── chat/Dockerfile
│       ├── job/Dockerfile
│       ├── school/Dockerfile
│       └── sponsor/Dockerfile
├── docs/
│   └── API-endpoints.md
├── frontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       └── App.js
├── gateway/
│   ├── package.json
│   └── server.js
└── services/
	├── auth/
	│   ├── package.json
	│   └── server.js
	└── beneficiary/
		├── package.json
		└── server.js
```

## Architecture (Target)

- `frontend` → user-facing web app
- `gateway` → API gateway / routing layer
- `services/auth` → authentication and authorization
- `services/beneficiary` → beneficiary management
- `services/school` (planned) → school domain APIs
- `services/job` (planned) → jobs and opportunities APIs
- `services/sponsor` (planned) → sponsor management APIs
- `services/chat` (planned) → chat / messaging APIs
- `config` → environment-wise configuration
- `docker` → containerization and nginx reverse proxy setup

## Branching Strategy

### Main branches

- `main` → production-ready code
- `develop` → integration branch for active development

### Feature branches

- `feature/auth-service`
- `feature/beneficiary-service`
- `feature/school-service`
- `feature/job-service`
- `feature/sponsor-service`
- `feature/chat-service`
- `feature/frontend-auth`
- `feature/frontend-dashboard`

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or compatible)
- Docker Desktop (optional, for containerized run)
- Git

### 1) Clone repository

```bash
git clone https://github.com/Piyula/RiseTogether-Platform
cd RiseTogether-Platform
```

### 2) Checkout development branch

```bash
git checkout develop
```

### 3) Install dependencies

Install dependencies in each Node.js module once `package.json` scripts/deps are defined.

```bash
cd frontend && npm install
cd ../gateway && npm install
cd ../services/auth && npm install
cd ../beneficiary && npm install
```

You can repeat this pattern for additional service folders as they are added.

### 4) Run services locally

Use the run script you define in each `package.json`, typically one of:

```bash
npm run dev
# or
npm start
```

## Docker (Planned Workflow)

When Docker files and compose definitions are completed, run:

```bash
docker compose up --build
```

or if using the nested compose file:

```bash
docker compose -f docker/docker-compose.yml up --build
```

## Configuration

Configuration files are located in `config/`:

- `default.json` → base shared settings
- `dev.json` → local development overrides
- `prod.json` → production overrides

Recommended approach:

- Keep secrets out of git
- Use environment variables for credentials and tokens
- Use `default.json` only for non-sensitive defaults

## API Documentation

Add and maintain endpoint contracts in:

- `docs/API-endpoints.md`

Suggested format per endpoint:

- Method + Route
- Request body / params / headers
- Success response example
- Error responses
- Authentication requirements

## Suggested Next Steps

1. Define each service's `package.json` scripts (`dev`, `start`, `test`).
2. Implement `server.js` entrypoints and health endpoints.
3. Fill `docs/API-endpoints.md` with initial API contracts.
4. Complete Dockerfiles and compose networking.
5. Add `.env.example` files for gateway and services.

## Contribution Workflow

1. Create feature branch from `develop`.
2. Commit with clear messages.
3. Push branch and open PR to `develop`.
4. Merge `develop` to `main` for releases.

Example:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/auth-service
```



