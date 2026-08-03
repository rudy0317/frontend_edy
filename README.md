# Frontend App (`frontend_edy`)

Kodingan frontend pake React buat aplikasi **Task Management**.

## Jobdesk:
- Bikin UI Login, Register, dan Dashboard.
- Hubungin UI ke backend PHP (`http://localhost:8000/api`).
- Simpen token login di `localStorage`.

## Cara Jalanin:
```bash
npm install
npm run dev
```

## Fitur & Endpoint:
- **Register:** `POST /api/register`
- **Login:** `POST /api/login`
- **List Task:** `GET /api/tasks`
- **Tambah Task:** `POST /api/tasks`
- **Update Task:** `PUT /api/tasks/{id}`
- **Hapus Task:** `DELETE /api/tasks/{id}`

## Git:
- Kerjain di branch baru (`git checkout -b feature/nama-fitur`).
- Push ke branch lo, terus buat PR.