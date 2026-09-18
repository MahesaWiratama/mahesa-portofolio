# Mahesa Personal Portfolio

Portfolio responsive dengan **Vite + Tailwind CSS + JavaScript**.

## Teknologi
- Vite
- Tailwind CSS 4
- JavaScript
- HTML

## Menjalankan project

Pastikan Node.js terpasang, lalu buka terminal di folder project:

```bash
npm install
npm run dev
```

Kemudian buka alamat yang diberikan Vite, biasanya:

```text
http://localhost:5173/
```

## Build production

```bash
npm run build
```

Untuk melihat hasil build:

```bash
npm run preview
```

## Halaman
- `/index.html` — Home
- `/about.html` — About
- `/projects.html` — Projects + satu tugas JavaScript (Simple Calculator)
- `/skills.html` — Skills

## Foto profil

Ganti:

`assets/images/profile-placeholder.svg`

dengan foto pribadi, misalnya:

`assets/images/profile.jpg`

Lalu ubah source gambar pada file HTML menjadi:

```html
<img src="./assets/images/profile.jpg" ...>
```

## Publish

Project dapat dibuild dengan Vite menggunakan `npm run build`, lalu folder `dist` dapat dipublish ke hosting static seperti GitHub Pages atau Vercel.
