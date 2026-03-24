# Online Commercial Scaffold v3

Next.js App Router scaffold for a multi-branch commercial platform with mock auth, RBAC, and CRUD mockup screens.

## Included modules
- Dashboard overview
- Inventory CRUD mockups
- Factory ordering CRUD mockups
- Marketing promotion CRUD mockups
- Management user CRUD mockups
- Finance and reporting overview pages

## CRUD routes included
- `/inventory` → product list
- `/inventory/products/new`
- `/inventory/products/[sku]`
- `/inventory/products/[sku]/edit`
- `/management` → user list
- `/management/users/new`
- `/management/users/[id]`
- `/management/users/[id]/edit`
- `/orders/factory` → factory order list
- `/orders/factory/new`
- `/orders/factory/[id]`
- `/orders/factory/[id]/edit`
- `/marketing` → promotions list
- `/marketing/promotions/new`
- `/marketing/promotions/[id]`
- `/marketing/promotions/[id]/edit`

## Start
```bash
npm install
npm run dev
```

Open `/login` and switch roles to test RBAC.


## PWA + mobile responsive mockup
- Installable PWA manifest
- Service worker with cached mock routes
- Mobile navigation drawer
- Install prompt helper for Android browsers
- iPhone/iPad install guidance in the UI
- Offline fallback page

## Test installability
```bash
npm install
npm run dev
```
Then open the app in a mobile browser or Chrome device emulation.

For a production installable PWA, deploy over HTTPS. On Android, supported browsers can show an install prompt. On iPhone and iPad, install usually happens through Share → Add to Home Screen.
