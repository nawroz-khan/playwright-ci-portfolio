# Playwright + GitHub Actions E2E Portfolio

![Playwright E2E Pipeline](https://github.com/nawroz-khan/playwright-ci-portfolio/actions/workflows/playwright.yml/badge.svg)

A production-ready end-to-end UI and API test automation framework built with **Playwright**, **TypeScript**, **Page Object Model (POM)** architecture, and **GitHub Actions CI/CD**.

## Architecture & Highlights
- **Page Object Model (`pages/`):** Decouples UI locators and user interactions (`LoginPage`, `InventoryPage`, `CheckoutPage`) from test specifications for high maintainability.
- **Cross-Browser Parallel Execution:** Configured in `playwright.config.ts` to run concurrently across **Chromium**, **Firefox**, and **WebKit**.
- **UI + API Coverage (`tests/`):**
  - `auth.spec.ts`: Positive and negative authentication flows.
  - `checkout.spec.ts`: Complete multi-step e-commerce purchase flow.
  - `api.spec.ts`: Direct REST API schema and status verification using Playwright's `APIRequestContext`.
- **CI/CD Automation (`.github/workflows/playwright.yml`):** Automatically runs the full suite on every push and pull request, capturing traces/screenshots on retry/failure and uploading HTML reports as downloadable artifacts.

## Quick Start
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps

# Run all tests headless
npm test

# View HTML test report
npm run report
```
