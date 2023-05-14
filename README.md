# Cypress E2E UI > Tour Radar project

## Setup
Run `npm install` from Cypress root folder to install framework and all dependencies

## Test runner
- `npm run cy:tour_radar_prod` from Cypress root folder to open Cypress GUI with Tour Radar tests and the configuration for LIVE environment.
- `npm run cy:tour_radar_prod_run` from Cypress root folder to run Tour Radar tests with the configuration for LIVE environment on the CLI. This will be used mainly for CI/CD, but additionally creates reports in cypress\reports.

Failing tests will be rerun up to three times before showing as fails in report.

The current configuration allows for easy configuration of a different environment (as STG).

## Failing tests
Currently tour_collection.desktop.side_menu.order_by_price_per_day may fail if discounted tour details are shown in the first page. Discounted prices are ordered as if they were calculated on the full price, while shown as discounted prices. 
