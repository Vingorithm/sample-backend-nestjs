## Project Pattern

Project ini menggunakan **Modular Pattern** (feature-based) yang merupakan
best practice bawaan NestJS.

### Alasan menggunakan pattern ini:
1. Memisahkan concern setiap fitur (auth, tasks).
2. Mudah dikembangkan dan di-maintain.
3. Mudah untuk testing (unit & e2e).
4. Struktur jelas dan scalable untuk project besar.

## How to Run

1. npm install
2. set DATABASE_URL in .env
3. npx prisma migrate dev
4. npm run start:dev
5. npm run test:e2e
