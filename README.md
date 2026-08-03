# Frontend App (`frontend_edy`)

Repository frontend React untuk aplikasi **Task Management**.

📌 **GitHub Project Board:** [Task Management Project #4](https://github.com/users/rudy0317/projects/4/views/1)

## Jobdesk (CRUD Task):
- Buat UI Dashboard Task (Form Tambah, Tabel/Card List Task, Tombol Status & Hapus).
- Hubungkan UI ke backend PHP (`http://localhost:8000/api/tasks.php`).

## Cara Menjalankan:
```bash
npm install
npm run dev
```

## Fitur & Endpoint (CRUD Only):
- **Tampil List Task:** `GET /api/tasks.php`
- **Tambah Task Baru:** `POST /api/tasks.php`
- **Update Status Task:** `PUT /api/tasks.php?id={id}`
- **Hapus Task:** `DELETE /api/tasks.php?id={id}`

## Workflow Git:
- Kerjakan di branch baru (`git checkout -b feature/nama-fitur`).
- Push ke branch tersebut, lalu buat Pull Request (PR).