# Moldtelecom Website

The official Moldtelecom website is built with **React 19**, **TypeScript** and **Vite**. It provides a polished multi‑language experience and integrates Invisible reCAPTCHA for form security.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Build & Deploy](#build--deploy)
- [Project Structure](#project-structure)
- [Localization](#localization)
- [Available Scripts](#available-scripts)
- [Security](#security)

## Features

- Modern React application powered by Vite
- TypeScript for type safety across the codebase
- i18next setup with Romanian, Russian and English translations
- Progressive Web App configuration via `vite-plugin-pwa`
- Invisible reCAPTCHA support (`VITE_RECAPTCHA_SITE_KEY`)
- Google Analytics tracking (`VITE_GOOGLE_MEASUREMENT_ID`)
- Microsoft Clarity session recording (`VITE_CLARITY_ID`)
- Production build and deployment script

## Requirements

- [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/)

## Installation

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Copy the example environment file and provide your environment variables (reCAPTCHA key, Google Analytics ID,...):
   ```bash
   cp .env.template .env
   # edit .env and set VITE_RECAPTCHA_SITE_KEY, VITE_GOOGLE_MEASUREMENT_ID and VITE_CLARITY_ID
   ```

## Development

Start the local development server with hot reloading:

```bash
yarn dev
```

## Build & Deploy

Create an optimized production build:

```bash
yarn build
```

Preview the built site locally:

```bash
yarn preview
```

Deploy the contents of `dist`:

```bash
yarn deploy
```

## Project Structure

- `src/` – React components and application logic
- `public/` – static assets and configuration JSON files
- `scripts/` – utilities used during development and maintenance

## Localization

Translation files reside under `src/lang`. The language is inferred from the URL and handled by `LanguageContext` and the router.

## Available Scripts

- `yarn lint` – run ESLint on the codebase
- `yarn format` – format files with Prettier
- `yarn find-unused-assets` – list unused images and JSON files under `public`

## Security

See [SECURITY.md](SECURITY.md) for instructions on reporting vulnerabilities.

---

This project is maintained by Moldtelecom.
