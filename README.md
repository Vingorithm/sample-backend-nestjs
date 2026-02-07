# NestJS Simple Todo List API

Project ini merupakan **Simple REST API** yang dibangun menggunakan **NestJS + TypeScript**
dengan studi kasus **Todo List**.  
Aplikasi ini menyediakan fitur **authentication menggunakan JWT** serta **manajemen task**
yang terhubung dengan user (one-to-many relationship).

Project ini dibuat untuk memenuhi tugas pembuatan REST API sederhana dengan best practice
yang umum digunakan pada pengembangan backend modern.

---

## Features

- User registration & login
- JWT-based authentication
- CRUD Task (Create, Read, Update, Delete)
- Authorization (task hanya bisa diakses oleh pemiliknya)
- SQL Database (PostgreSQL) menggunakan Prisma ORM
- End-to-End (E2E) testing untuk verifikasi JWT token

---

## Tech Stack

- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (Passport)
- **Testing**: Jest & Supertest
- **API Documentation**: Postman

---

## Project Pattern

Project ini menggunakan **Modular Pattern** (feature-based) yang merupakan
best practice bawaan NestJS.

### Alasan menggunakan pattern ini:
1. Memisahkan concern setiap fitur (auth, tasks).
2. Mudah dikembangkan dan di-maintain.
3. Mudah untuk testing (unit & e2e).
4. Struktur jelas dan scalable untuk project besar.

---

## API Overview

### Auth
- `POST /auth/register` → Register user
- `POST /auth/login` → Login & get JWT token

### Tasks (Protected)
- `GET /tasks` → Get all tasks (by logged-in user)
- `POST /tasks` → Create new task
- `PATCH /tasks/:id` → Update task
- `DELETE /tasks/:id` → Delete task

---

## End-to-End Testing

E2E testing digunakan untuk memastikan:
- JWT token di-generate dengan benar
- Endpoint terproteksi tidak dapat diakses tanpa token
- Endpoint dapat diakses dengan token yang valid

Test dilakukan menggunakan **Jest + Supertest**.

```bash
npm run test:e2e
