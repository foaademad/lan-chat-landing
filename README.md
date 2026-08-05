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

المخرجات في مجلد `dist/` — **محلية فقط** وغير مرفوعة على Git.
لا تعتمد على نسخ/رفع `dist` يدويًا للسيرفر.

## Coolify (VPS)

المشروع بدون Docker. في Coolify اختر **Nixpacks** مع:

- Base directory: `lanchat(payment)` إذا كان الريبو `LANCHATFOLDER`، أو جذر المشروع إذا كان ريبو اللاندنج وحده
- Build Pack: **Nixpacks** (ليس Dockerfile، وليس Static فقط بدون build)
- Coolify يشغّل `npm ci` ثم `npm run build` ثم يخدم `dist`

بعد تعديل الكود في `src/`:
1. `git push`
2. من Coolify: **Redeploy** (يفضّل بدون cache إن ظهر الخيار)

مسح `dist` محليًا ثم `npm run build` لا يحدّث السيرفر وحده — التحديث يأتي من push + redeploy.

## ملاحظات

- روابط المتاجر والويب في `src/content.ts` → `STORE_URLS`.
- الحقوق في الفوتر: **Lan SMS Trading**.
- الأصول: `public/brand/wordmark.png` و `public/brand/logo.png`.
