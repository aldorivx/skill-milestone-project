# Skill Milestone Projects

Repositori ini dirancang sebagai **monorepo / multi-project repository** yang menampung seluruh tugas dan proyek milestone pembelajaran. Setiap proyek milestone berada di dalam direktorinya masing-masing dan dapat dijalankan serta di-deploy secara independen.

---

## 📁 Struktur Repositori

```text
skill-milestone-project/
├── .gitignore                  # Konfigurasi Git ignore global
├── pnpm-workspace.yaml         # Definisi workspace pnpm monorepo
├── README.md                   # Dokumentasi utama indeks milestone
│
├── web3-crypto-scanner/        # Milestone 2: Web3 Crypto Market Scanner
│   ├── app/                    # Next.js App Router (Turbopack)
│   ├── components/             # Komponen UI (shadcn UI b0 preset)
│   ├── lib/                    # Helper formatting & utilitas
│   ├── types/                  # TypeScript definitions
│   ├── package.json
│   └── ...
│
└── [milestone-berikutnya]/     # Proyek milestone masa depan (Milestone 3, dst.)
```

---

## 🚀 Daftar Proyek Milestone

| Milestone | Proyek | Tech Stack | Status | Live Demo |
| :--- | :--- | :--- | :--- | :--- |
| **Month 2** | [Web3 Crypto Scanner](./web3-crypto-scanner) | Next.js 16, React 19, Tailwind CSS v4, shadcn UI (b0), CoinGecko API | ✅ Selesai | [skill-milestone-project.vercel.app](https://skill-milestone-project.vercel.app) |
| **Month 3** | *Upcoming* | - | ⏳ Segera | - |

---

## 🛠️ Menjalankan Proyek Secara Lokal

### Milestone 2: Web3 Crypto Scanner
```bash
# Masuk ke direktori proyek
cd web3-crypto-scanner

# Install dependencies
pnpm install

# Jalankan server development
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

---

## 🌐 Panduan Deployment ke Vercel (Multi-Project)

Karena satu repositori ini menampung banyak proyek milestone, setiap proyek di-deploy dengan menentukan **Root Directory** proyek yang sesuai di Vercel:

### Melalui Vercel CLI:
```bash
# 1. Masuk ke direktori milestone yang ingin di-deploy
cd web3-crypto-scanner

# 2. Deploy ke production
npx vercel --prod
```

### Melalui Vercel Dashboard:
1. Hubungkan repository `aldorivx/skill-milestone-project`.
2. Pada bagian **Root Directory**, tentukan subfolder proyek yang ingin di-deploy (misalnya: `web3-crypto-scanner`).
3. Vercel akan secara otomatis mendeteksi framework (Next.js) dan melakukan build khusus untuk proyek tersebut.