# Frontend App (`frontend_edy`)

Repository frontend **HTML, CSS, & Vanilla JavaScript** untuk aplikasi **Task Management**.

📌 **GitHub Project Board:** [Task Management Project #4](https://github.com/users/rudy0317/projects/4/views/1)

## Tech Stack:
- HTML5 & CSS3
- JavaScript Native (Fetch API / `async-await`)

## Jobdesk (CRUD Task):
- Buat tampilan UI Task Management (`index.html`, `style.css`, `script.js`).
- Buat Form Tambah Task dan Tabel/List Task.
- Hubungkan UI ke API backend PHP (`http://localhost:8000/api/tasks.php`) menggunakan `fetch()`.

## Cara Menjalankan:
Tinggal buka file `index.html` di browser (atau gunakan extension Live Server di VS Code).

## Fitur & Endpoint (CRUD Only):
- **Tampil List Task:** `GET http://localhost:8000/api/tasks.php`
- **Tambah Task Baru:** `POST http://localhost:8000/api/tasks.php`
- **Update Status Task:** `PUT http://localhost:8000/api/tasks.php?id={id}`
- **Hapus Task:** `DELETE http://localhost:8000/api/tasks.php?id={id}`

## Contoh Fetch API (Vanilla JS):
```javascript
// Contoh ambil data task dari backend
async function getTasks() {
  const response = await fetch('http://localhost:8000/api/tasks.php');
  const data = await response.json();
  console.log(data);
}
```

## Workflow Git:
- Kerjakan di branch baru (`git checkout -b feature/nama-fitur`).
- Push ke branch tersebut, lalu buat Pull Request (PR).