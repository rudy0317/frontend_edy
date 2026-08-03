# Frontend Service (`frontend_edy`)

Repo ini tempat kodingan frontend (UI) buat aplikasi **Task Management**. Frontend dibuat pake **React** (Vite / CRA) dan bakal nembaik API backend di `http://localhost:8000`.

---

## Task Anak Magang

Tugas lo di repo ini:
1. Slicing UI & Bikin halaman: Halaman Login, Register, Dashboard Task.
2. Integrasi API pake `fetch` atau `axios` ke backend (`http://localhost:8000/api`).
3. Simpan token Auth (misal pake `localStorage`).
4. Bikin state management sederhana (tampilin loading, alert error kalau request gagal).

---

## Setup Project

```bash
# 1. Clone repo
git clone https://github.com/rudy0317/frontend_edy.git
cd frontend_edy

# 2. Install dependencies (kalau udah ada package.json)
npm install

# 3. Jalankan dev server
npm run dev
# Biasanya jalan di http://localhost:5173
```

---

## List Halaman & Fitur UI

### 1. Auth Page
- **Halaman Register:** Input nama, email, password -> `POST http://localhost:8000/api/register`
- **Halaman Login:** Input email, password -> `POST http://localhost:8000/api/login` (simpan token ke localStorage)

### 2. Dashboard Task Page
- **List Task:** Ambil data dari `GET http://localhost:8000/api/tasks` -> Tampilin dalam bentuk card / tabel.
- **Tambah Task:** Modal / Form buat `POST http://localhost:8000/api/tasks` (`title`, `description`).
- **Update Status:** Button buat ganti status task (pending -> completed) via `PUT http://localhost:8000/api/tasks/{id}`.
- **Hapus Task:** Button hapus -> `DELETE http://localhost:8000/api/tasks/{id}`.

---

## Contoh Integrasi API (Fetch)

```javascript
// Contoh Fetch Data Task
const getTasks = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/tasks');
    const data = await res.json();
    if (data.success) {
      console.log(data.data);
    }
  } catch (err) {
    console.error("Gagal konek ke backend", err);
  }
};
```

---

## Aturan Git

- JANGAN push langsung ke branch `main`.
- Bikin branch sendiri: `git checkout -b feature/nama-fitur`.
- Kalau udah selese, push ke GitHub trus bikin Pull Request (PR).