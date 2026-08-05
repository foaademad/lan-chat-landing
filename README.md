# LanChat Landing

الصفحة الرسمية لتعريف تطبيق **LanChat** بهوية الفحمي + الذهبي `#C9960F`.

عربي / إنجليزي · شرح المميزات · روابط App Store و Google Play و LanChat Web.

## تشغيل محلي

```bash
npm install
npm run dev
```

## البناء

```bash
npm run build
```

المخرجات في مجلد `dist/`.

## Coolify (VPS)

المشروع بدون Docker. في Coolify اختر **Nixpacks** (أو اترك الاكتشاف التلقائي) مع:

- Base directory: `lanchat(payment)` إذا كان الريبو هو `LANCHATFOLDER`، أو جذر المشروع إذا كان ريبو اللاندنج وحده
- Build: من `nixpacks.toml` (`npm ci` ثم `npm run build`)
- Start: `serve` على مجلد `dist`

بعد أي تعديل: **Redeploy** من لوحة Coolify (وليس من الماك).

## ملاحظات

- روابط المتاجر والويب في `src/content.ts` → `STORE_URLS`.
- الحقوق في الفوتر: **Lan SMS Trading**.
- الأصول: `public/brand/wordmark.png` و `public/brand/logo.png`.
