# Description

## Run on dev

1. Clone the repository
2. Create a copy of file name `.env.template` and renamed to `.env`
3. Install dependencies `npm install`
4. Raise the database `docker compose up -d`
5. Run prisma migrations `npx prisma migrate dev`
6. Run seed `npm run seed`
7. Run project `npm run dev`
