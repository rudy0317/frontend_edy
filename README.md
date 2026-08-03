# Frontend App (`frontend_edy`)

Repository frontend React untuk aplikasi **Task Management**.

## Jobdesk:
- Buat UI Login, Register, dan Dashboard.
- Hubungkan UI ke backend PHP (`http://localhost:8000/api`).
- Simpan token login di `localStorage`.

## Cara Menjalankan:
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

## Workflow Git:
- Kerjakan di branch baru (`git checkout -b feature/nama-fitur`).
- Push ke branch tersebut, lalu buat Pull Request (PR).