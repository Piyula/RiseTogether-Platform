# RiseTogether Platform

RiseTogether Platform is an impact-oriented system designed to connect and support key stakeholders such as beneficiaries, schools, sponsors, and job opportunities.

This repository currently contains the **frontend application** (React) and serves as the foundation for a planned microservices backend architecture.

## Current Status

- ✅ Frontend application is available under `frontend/`
- 🚧 Backend services (`auth`, `gateway`, domain services) are planned and will be added incrementally

## Tech Stack (Current)

- **Frontend:** React (Create React App)
- **Routing:** React Router
- **HTTP Client:** Axios
- **Testing:** React Testing Library + Jest

## Repository Structure

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

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### 1) Clone the Repository

```bash
git clone https://github.com/Piyula/RiseTogether-Platform
cd RiseTogether-Platform
```

### 2) Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3) Run the Frontend

```bash
npm start
```

The app runs at: `http://localhost:3000`

## Frontend Scripts

From the `frontend/` directory:

- `npm start` - Run development server
- `npm test` - Run tests
- `npm run build` - Create production build
- `npm run eject` - Eject CRA configuration (irreversible)

## Planned Target Architecture

The platform is intended to evolve into a microservices architecture with the following components:

- `gateway` - API gateway and request routing
- `services/auth` - authentication and authorization
- `services/beneficiary` - beneficiary domain management
- `services/school` - school domain APIs
- `services/job` - jobs/opportunities APIs
- `services/sponsor` - sponsor domain APIs
- `services/chat` - messaging and communication

## Branching Strategy

- `main` - stable/production branch
- `develop` - integration branch for ongoing development
- `feature/*` - task-specific feature branches

## Contribution Workflow

1. Branch from `develop`
2. Implement your changes
3. Commit with clear messages
4. Push branch and open a pull request to `develop`

Example:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/frontend-auth
```

## Roadmap

1. Add `gateway` and `auth` services
2. Define API contracts and shared configuration
3. Add domain services (`beneficiary`, `school`, `job`, `sponsor`, `chat`)
4. Introduce Docker-based local orchestration
5. Add CI/CD and environment-specific deployment

## License

Add your license information here (for example: MIT).
