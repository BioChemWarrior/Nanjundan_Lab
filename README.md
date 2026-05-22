# Horizon Research Laboratory — website

Research laboratory marketing site built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Landing hero with active project highlights  
- About, Team, Publications, Projects (+ detail routes), News (+ articles), Gallery  
- Contact form and visit request form via **Server Actions** (demo redirects—swap for email/API)  
- Responsive layout with sticky header and layered footer  

## Getting started

```bash
cd laboratory-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. Replace lab metadata in `src/lib/content.ts` (name, contact, copy, lists).  
2. Swap placeholder gallery gradients for real assets (`next/image` + hosted media).  
3. Hook `submitContactForm` / `submitAppointmentForm` to Resend, SMTP, Slack, or your CRM.  
4. Add MDX or a CMS for news/projects if editorial workflows matter.  

## Production build

```bash
npm run build
npm start
```

## License

MIT — adapt freely for your institution.
