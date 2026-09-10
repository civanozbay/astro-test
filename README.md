# civanozbay.github.io

Civan Özbay'ın kişisel sitesi: kısa bir tanıtım, iş deneyimleri ve projeler. Astro + Tailwind CSS ile yazılmış statik bir site.

`main` branch'ine yapılan her push, `.github/workflows/deploy.yml` üzerinden GitHub Pages'e deploy edilir ve <https://civanozbay.github.io> adresinde yayınlanır.

## Geliştirme

```sh
npm ci        # bağımlılıkları kur
npm run dev   # localhost:4321
npm run build # ./dist içine üretim çıktısı
```

Sayfalar `src/pages` altında (`index.astro`, `about.mdx`, `projects.astro`); site başlığı, açıklaması ve sosyal linkler `src/consts.ts` ile `src/constants.ts` dosyalarından geliyor.
