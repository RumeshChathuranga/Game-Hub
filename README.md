# Game Hub

A modern game discovery web application built with React, TypeScript, and Chakra UI. This application allows users to browse, search, and discover games with a responsive and intuitive interface.

## Key Features

- **Game Discovery:** Browse a vast collection of games with a dynamic grid layout.
- **Detailed Game Information:** View comprehensive details including screenshots, trailers, attributes, and expandable descriptions on dedicated game pages.
- **Advanced State Management:** Utilizes Zustand for efficient and centralized application state handling.
- **Optimized Data Fetching:** Implements React Query for data fetching, caching, synchronization, and performance optimizations.
- **Client-Side Routing:** Seamless navigation and error handling powered by React Router.
- **Infinite Scrolling:** Smoothly load more games as you scroll for an uninterrupted browsing experience.
- **Dark and Light Mode:** Built-in theme support using Chakra UI.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.

## Technology Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Component Library:** Chakra UI
- **State Management:** Zustand
- **Data Fetching & Caching:** React Query
- **Routing:** React Router
- **HTTP Client:** Axios

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```text
src/
├── component/      # Reusable UI components
├── entities/       # TypeScript interfaces and type definitions
├── hooks/          # Custom React hooks (including React Query hooks)
├── pages/          # React Router page components
├── services/       # API integration services
├── store.ts        # Zustand store configuration
└── routes.tsx      # Application routing configuration
```
