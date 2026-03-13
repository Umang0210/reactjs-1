# ReactJS Shopping App

A React + Vite frontend project with common ecommerce-style pages and components such as:

- Header and footer
- Content section
- Cart
- Orders
- Login, logout, and register views

## Tech Stack

- React 19
- Vite 7
- ESLint 9
- Axios

## Project Structure

src/
- components/
	- Cart.jsx
	- Content.jsx
	- Footer.jsx
	- Header.jsx
	- Login.jsx
	- Logout.jsx
	- Orders.jsx
	- Register.jsx
- App.jsx
- main.jsx

## Prerequisites

- Node.js 18+ (Node.js 20 recommended)
- npm 9+

## Getting Started

1. Install dependencies:

	 npm install

2. Start development server:

	 npm run dev

3. Open the app in your browser:

	 http://localhost:5173

## Available Scripts

- npm run dev: Starts Vite dev server
- npm run build: Creates production build in dist/
- npm run preview: Serves the production build locally
- npm run lint: Runs ESLint checks

## CI Pipeline

This project includes a GitHub Actions workflow at:

.github/workflows/ci-cd.yml

Pipeline behavior:

- Runs on every push and pull request to main
- Installs dependencies using npm ci
- Runs lint
- Runs production build

## Future Improvements

- Add routing guards for authenticated pages
- Add form validation and error handling
- Add tests with Vitest and React Testing Library
- Integrate backend APIs for cart and orders
