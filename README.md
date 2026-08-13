# Game Hub 🎮

A game discovery application built with React 19, TypeScript and Chakra UI, powered by the [RAWG](https://rawg.io/apidocs) video game database. Browse over 800,000 games with live search, genre and platform filtering, sorting, and infinite scroll.

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img alt="Chakra UI" src="https://img.shields.io/badge/Chakra_UI-3-319795?logo=chakraui&logoColor=white" />
  <img alt="TanStack Query" src="https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white" />
  <img alt="Zustand" src="https://img.shields.io/badge/Zustand-5-443E38" />
</p>

**🔗 Live demo: [games-hub.vercel.app](https://games-hub.vercel.app/)** _(if games don't load, RAWG's API may be down — not an app bug)_

---

## Features

- **Infinite scroll** — games load page-by-page as you scroll, using TanStack Query's `useInfiniteQuery`
- **Live search** — with a `Ctrl/⌘ + K` keyboard shortcut to focus the search box
- **Filter by genre** — sidebar list backed by the RAWG genres endpoint
- **Filter by platform** — PC, PlayStation, Xbox, Nintendo, and more
- **Sorting** — by relevance, date added, name, release date, popularity, or rating
- **Dynamic heading** — reflects the active filters (e.g. _"PlayStation Action Games"_)
- **Metacritic scores** — colour-coded badges (green / yellow / red) per game
- **Rating emojis** — visual sentiment indicator on highly-rated games
- **Dark / light mode** — persisted theme switching via `next-themes`
- **Loading skeletons** — layout-stable placeholders instead of spinners on first paint
- **Responsive design** — 1 to 4 column grid, collapsing sidebar on smaller screens
- **Optimised images** — game art requested at cropped 600×400 dimensions, with a local placeholder fallback

---

## Tech stack

| Tool | Why it's here |
| --- | --- |
| **React 19** + **TypeScript** | Component model with end-to-end type safety across API responses, hooks and props |
| **Vite 7** | Near-instant dev server and fast production builds |
| **Chakra UI 3** | Accessible component primitives with a built-in responsive style system |
| **TanStack Query 5** | Server-state: caching, deduplication, background refetching, pagination |
| **Zustand 5** | Client-state: a single, minimal store for the active query — no provider nesting |
| **Axios** | HTTP client, wrapped in a generic reusable `APIClient<T>` |
| **react-infinite-scroll-component** | Scroll-triggered pagination |
| **react-icons** | Platform and UI iconography |
| **ms** | Human-readable cache durations (`ms("24h")` rather than `86400000`) |

---

## Architecture

The app draws a deliberate line between **server state** and **client state** — the single most important design decision in the codebase.

```
┌──────────────────────────────────────────────────────────┐
│  UI components                                           │
│  SearchInput · GenreList · PlatformSelector              │
│  SortSelector · GameHeading · GameGrid                   │
└───────────────┬──────────────────────┬───────────────────┘
                │ write                │ read
                ▼                      ▼
        ┌───────────────────────────────────┐
        │  Zustand store (client state)     │
        │  { genreId, platformId,           │
        │    sortOrder, searchText }        │
        └───────────────┬───────────────────┘
                        │ used as the React Query key
                        ▼
        ┌───────────────────────────────────┐
        │  Hooks (server state)             │
        │  useGames · useGenres             │
        │  usePlatforms                     │
        └───────────────┬───────────────────┘
                        ▼
        ┌───────────────────────────────────┐
        │  APIClient<T>  →  RAWG API        │
        └───────────────────────────────────┘
```

**Why this matters:**

- **No prop drilling.** The query object lives in a Zustand store, so `SearchInput` in the navbar and `GameGrid` several levels away both talk to the same state directly. An earlier revision threaded a `gameQuery` object down through `App` as props — the store removed that coupling entirely.
- **The store is the cache key.** `useGames` uses `["games", gameQuery]` as its query key, so any filter change automatically triggers the right fetch — and revisiting a previous filter combination is served instantly from cache.
- **Selectors keep re-renders narrow.** Components subscribe to individual slices (`useGameQueryStore((s) => s.gameQuery.genreId)`), so changing the sort order doesn't re-render the genre list.
- **One generic HTTP client.** `APIClient<T>` is instantiated per endpoint (`new APIClient<Game>("/games")`), so adding an endpoint is a single line rather than a new fetch function.
- **Instant first paint.** Genres and platforms are seeded with `initialData` from local files in `src/data/` and cached for 24 hours — the sidebar and platform dropdown render immediately with no loading flash, then reconcile with the API in the background.

---

## Getting started

### Prerequisites

- **Node.js 18+** and npm
- A free **RAWG API key** — sign up at [rawg.io/apidocs](https://rawg.io/apidocs)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/RumeshChathuranga/Game-Hub.git
cd Game-Hub

# 2. Install dependencies
npm install

# 3. Configure your API key
cp .env.example .env
# then open .env and set VITE_RAWG_API_KEY to your key

# 4. Start the dev server
npm run dev
```

The app runs at **http://localhost:5173**.

### Environment variables

| Variable | Description |
| --- | --- |
| `VITE_RAWG_API_KEY` | Your RAWG API key. Required — the app cannot fetch games without it. |

> Vite only exposes variables prefixed with `VITE_` to the client. Because this is a frontend-only app, the key is visible in the built bundle; RAWG issues free keys intended for this use. A production deployment would proxy requests through a backend to keep the key server-side.

---

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Type-check with `tsc -b`, then build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Project structure

```
src/
├── component/              # Feature components
│   ├── navbar.tsx          # Logo, search, theme toggle
│   ├── SearchInput.tsx     # Search box with ⌘K shortcut
│   ├── GenreList.tsx       # Genre sidebar
│   ├── PlatformSelector.tsx
│   ├── SortSelector.tsx
│   ├── GameHeading.tsx     # Filter-aware page heading
│   ├── GameGrid.tsx        # Infinite-scrolling results grid
│   ├── GameCard.tsx
│   ├── GameCardContainer.tsx
│   ├── GameCardSkeleton.tsx
│   ├── CriticScore.tsx     # Colour-coded Metacritic badge
│   ├── Emoji.tsx           # Rating sentiment icon
│   ├── PlatformIconList.tsx
│   └── ColorModeSwitch.tsx
├── components/ui/          # Chakra UI CLI-generated primitives
│   ├── provider.tsx        # Chakra + next-themes provider
│   ├── color-mode.tsx
│   ├── tooltip.tsx
│   └── toaster.tsx
├── hooks/                  # Server-state hooks (TanStack Query)
│   ├── useGames.ts         # Paginated, filtered game list
│   ├── useGenres.ts
│   └── usePlatforms.ts
├── services/
│   ├── api-client.ts       # Generic APIClient<T> over Axios
│   └── image-url.ts        # Builds cropped RAWG image URLs
├── data/                   # Seed data for instant first paint
│   ├── genres.ts
│   └── platforms.ts
├── assets/                 # Logo, rating emojis, image placeholder
├── store.ts                # Zustand game-query store
├── App.tsx                 # Responsive grid layout
└── main.tsx                # Providers and app entry point
```

Path aliases are configured via `vite-tsconfig-paths`, so imports use `@/` rather than relative traversal:

```ts
import useGames from "@/hooks/useGames";
```

---

## Implementation notes

**Infinite scroll pagination.** `useGames` derives the next page from RAWG's `next` field, returning `allPages.length + 1` while more results exist and `undefined` when exhausted — which is what tells `InfiniteScroll` to stop requesting.

**Cache strategy.** Games are cached for 24 hours; genres and platforms are effectively static and are both seeded with `initialData` and cached for 24 hours. This keeps the app well inside RAWG's free-tier rate limits during normal browsing.

**Image optimisation.** RAWG serves full-resolution art. `getCroppedImageUrl` splices `crop/600/400/` into the media path so the CDN returns an appropriately sized image, cutting page weight substantially on a grid of 20+ cards. Missing artwork falls back to a bundled placeholder.

**Type safety across the boundary.** The Axios wrapper is generic over the response shape (`fetchResponse<T>`), so `Game`, `Genre` and `Platform` types flow from the API layer through the hooks and into components without a single `any`.

---

## Deployment

The app is deployed on [Vercel](https://vercel.com) at **[games-hub.vercel.app](https://games-hub.vercel.app/)**.

To deploy your own instance:

1. Import the repository into Vercel — the Vite preset is detected automatically (`npm run build` → `dist/`).
2. Add `VITE_RAWG_API_KEY` under **Settings → Environment Variables**, for the Production, Preview and Development environments.
3. Deploy.

> Environment variables are read at **build time**, not runtime. After adding or changing `VITE_RAWG_API_KEY` you must trigger a fresh deployment for it to take effect.

---

## Roadmap

- [ ] Game detail page with screenshots, trailers and description
- [ ] Persist active filters to the URL so searches are shareable
- [ ] Unit and component tests (Vitest + React Testing Library)
- [ ] Proxy API requests through a lightweight backend to hide the key
- [ ] Accessibility audit and keyboard navigation pass

---

## Acknowledgements

Game data provided by the [RAWG Video Games Database API](https://rawg.io/apidocs).

Built as a learning project to work through modern React patterns end-to-end — server/client state separation, generic API clients, and query-key-driven caching.

---

## License

Released under the MIT License.
