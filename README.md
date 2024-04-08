# monorepo-template

My opinionated starter template for web apps, built using Turborepo.

This repo includes the following packages and apps:

### Apps and Packages

- `app`: a [Next.js](https://nextjs.org/) app for documentation website
- `@repo/config-eslint`: ESLint configurations used throughout the monorepo
- `@repo/config-typescript`: tsconfig.json's used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/ui`: React UI library for the main app
- `@spanion/utils`: all reusable utility functions, published to npm
- `@spanion/react-hooks`: all reusable react hooks, published to npm

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
